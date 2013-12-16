// Define the following in the html file:
//	integer minNumChars
//	boolean logResponsesToDashboard (defaults to false)
//	integer quizpageNumber (required if the above is true)
//	nextPageUrl

// Note: we dont use jQuery autocomplete because we need the custom behavior of only showing completion when the characters entered have only one match, only in a particular list
// Another reason is that we need (the option) to hide the candidate autocomplete terms from prying eyes

var version = "1.0 November 2013";
var questionType = "Short Answer";
var autoCompleteTerms;
var answerTerms = [];
$(function() {
	$("input").attr("autocomplete", "off");
	$("input").keyup(function(event){handleKeyup(event);});
	$("#submitButton").click(submitButtonTapped);
	$("#resetButton").click(function(){resetQuiz()});
	$("#nextButton").click(function(){window.open(nextPageUrl,"_self")})
		.hide();      // this will be revealed when the quiz is correctly completed
	$("body").append(showMetaInfo(version));
	extract();
});

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

function extract() {
	var termsString = $("#autoCompleteTerms").html().trim();
	autoCompleteTerms = termsString.split("|");
	//autoCompleteTerms = autoCompleteTerms.map(function(str){str.trim()});	// should work...
	//autoCompleteTerms = autoCompleteTerms.forEach(function(str){str.trim()});	// should work...
	for (var i=0; i<autoCompleteTerms.length; i++) {
		autoCompleteTerms[i] = autoCompleteTerms[i].trim();
	}
	$("#autoCompleteTerms").remove();
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
		$("#submitButton").hide();
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
	$("input").each(function(index) {
		//console.log($(this).val());
		studentAnswers[index] = $(this).val();
		scoreArray.push(studentAnswers[index].toLowerCase() == autoCompleteTerms[index].toLowerCase());
	});
	/* log answers */
	if (typeof logResponsesToDashboard === 'undefined')
		logResponsesToDashboard = false;
	if (logResponsesToDashboard)
		logSubmission(quizpageNumber,autoCompleteTerms,studentAnswers);
	// return true/false array
	return scoreArray;
}

function logSubmission(qNum,answers,sAnswers) {
	// submit to server
	if (typeof studentId === 'undefined' || studentId == "")
		var studentId = prompt("Please enter your student ID","")
	// todo: get id from the environment variable
	// todo: verify that we got a unique valid id above, or create one from the ip address?
	if (typeof qNum === 'undefined') {
		qNum = 0;
		console.log("Warning: quizpageNumber not found; defaulting to 0");
	}
	quizpageTextSummary = answers.join(", ");
	var request = $.ajax({
		type: 'POST',
		url: 'LogResponse.php',
		data: {	si : studentId,		//todo: get student id from env var
				qn : qNum,
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

function resetQuiz() {
	location.reload();
}
