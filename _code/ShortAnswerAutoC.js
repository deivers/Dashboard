// Define the following in the html file:
//   boolean logResponsesToDashboard (defaults to false)
//   integer quizpageNumber (required if the above is true)

// Note: we dont use jQuery autocomplete because we need the custom behavior of only showing completion when the characters entered have only one match, only in a particular list
// Another reason is that we need (the option) to hide the candidate autocomplete terms from prying eyes

var version = "1.0 November 2013";
var questionType = "Short Answer";
var answerTerms = [];
function completeFragment(fragment) {
	//console.log("completeFragment function with arg: "+fragment);
	var length = fragment.length;
	var indexOfMatch = -1;
	var isMatchUnique = true;
	if (length < minNumChars)
		return ""; // no match yet
	for (var i=0; i<autoCompleteTerms.length; i++) {
		if (fragment.toLowerCase() == autoCompleteTerms[i].substring(0,length)) {
			if (indexOfMatch >= 0)
				isMatchUnique = false;
			indexOfMatch = i;
		}
	}
	//console.log("index of match: "+indexOfMatch);
	return (indexOfMatch>=0 && isMatchUnique ? autoCompleteTerms[indexOfMatch] : "");
}

function handleKeyup(event) {
	/* reset style */
	$(event.target).removeClass("incorrect correct");
	/* if it was the tab key, then tab to next field */
	if (event.keyCode == 9) // tab key
		return true; // allow default behavior of tabbing to next field
	else if ((event.keyCode == 8))
		return true; // allow default behavior of backspace
	/* check for an autocomplete match */
	var userTypedString = event.target.value;
	var completedString = completeFragment(userTypedString);
	if (completedString.length > 0) {
		event.target.value = completedString;
		event.target.blur();
	}
}

function submitButtonTapped() {
	/* require all textfields to have an answer */
	var areAllAnswered = true;
	$("input").each(function() {
		if ($(this).val().length == 0)
			areAllAnswered = false;
	});
	if (!areAllAnswered) {
		alert("Type in answers for all of the questions before submitting.");
		return;
	}
	/* mark the answers right or wrong */
	var responseArray = checkAnswers();
	//console.log("responseArray: "+responseArray);
	$("input").each(function(index) {
		if (responseArray[index])
			$(this).removeClass("incorrect").addClass("correct");
		else
			$(this).removeClass("correct").addClass("incorrect");
	});
	/* add score summary below the submit button */
	var numCorrect = numberTrue(responseArray);
	var numTotal = responseArray.length;
	$(".score").html(numCorrect+" of "+numTotal+" correct").css("color","#000");
	if (numCorrect == numTotal) {
		$(".score").html("Correct!").css("color","#090");
		$("#nextButton").show();	// if nextButton exists, show it so student can proceed to next page
	}
}

function numberTrue(theArray) {
	var result = 0;
	theArray.forEach(function(element) {if (element) result++;});
	return result;
}

function checkAnswers() {
	var scoreArray = new Array();
	var studentAnswers = new Array();
	if (answerTerms === undefined || answerTerms.length == 0) {
		answerTerms = new Array();
		for (var i=0; i<answerTermsEncoded.length; i++) {
			var ate = answerTermsEncoded[i];
			var j = parseInt(ate.charAt(0)) + parseInt(ate.charAt(ate.length-1)) - 1;
			answerTerms[i] = autoCompleteTerms[j];
		}
	}
	$("input").each(function(index) {
		//console.log($(this).val());
		studentAnswers[index] = $(this).val();
		scoreArray.push(studentAnswers[index].toLowerCase() == answerTerms[index].toLowerCase());
	});
	/* log answers */
	if (typeof logResponsesToDashboard === 'undefined')
		logResponsesToDashboard = false;
	if (logResponsesToDashboard)
		logSubmission(answerTerms,studentAnswers);
	// return true/false array
	return scoreArray;
}

function logSubmission(answers,sAnswers) {
	// submit to server
	if (typeof studentId === 'undefined' || studentId == "")
		var studentId = prompt("Please enter your student ID","")
	// todo: verify that we got a valid id above
	if (typeof quizpageNumber === 'undefined')
		quizpageNumber = 0;
	quizpageTextSummary = answers.join(", ");
	console.log(studentId);
	console.log(quizpageNumber);
	console.log(questionType);
	console.log(quizpageTextSummary);
	console.log(sAnswers);
	var request = $.ajax({
		type: 'POST',
		url: 'LogResponse.php',
		data: {	si : studentId,		//todo: get student id from env var
				qn : quizpageNumber,
				qt : questionType,
				qs : quizpageTextSummary,
				sa : sAnswers
		},
		dataType: 'json'
	});
	request.done(function(msg) {
		console.log("Submission successful: ");
	});
	request.fail(function(jqXHR, textStatus) {
		console.log("The submission failed: "+textStatus);
	});
}