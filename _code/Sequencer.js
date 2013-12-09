var questionType = "Sequencer";
var version = "1.0 November 2013";
var rejectOption = (typeof rejectWrongAnswers === 'undefined' || rejectWrongAnswers);
var studentList = [];
var dragList;
var allList;
var akList = [];
$('.draggable').draggable();
$(function() {
	$("#sortable1, #sortable2").sortable({
		connectWith: ".connectedSortable",
		start: function(event, ui) {
			$(ui.item).addClass("dragging");
		},
		stop: function(event, ui) {
			$(ui.item).removeClass("dragging correct");
		}
	}).disableSelection();

	// shuffle
	allList = $(".draggable");
	shuffleDivs("#sortable1",".draggable");
	dragList = $(".draggable");

	// set button handlers
	$("#submitButton").click(function(){checkAnswers()});
	$("#resetButton").click(function(){resetQuiz()});
	$("#nextButton").click(function(){window.open(nextPageUrl,"_self")})
		.hide();      // this will be revealed when the quiz is correctly completed
	$("body").append(showMetaInfo(version));
});

function checkAnswers() {
	var allCorrect = true;
	for (var i=0; i<allList.length; i++) {
		if (allList[i] != $(".draggable")[i]) {
			allCorrect = false;
			break;
		}
	}
	/* log answers */
	if (typeof logResponsesToDashboard === 'undefined')
		logResponsesToDashboard = false;
	if (logResponsesToDashboard) {
		$(".draggable").each(function(index) {
			studentList.push($(this).html());
		});
		$(allList).each(function(index) {
			akList.push($(this).html());
		});
		//console.log(akList);
		//console.log(studentList);
		logSubmission(akList,studentList);
	}
	// give feedback to student
	if (allCorrect) {
		$(".draggable").addClass("correct", 400);
		setTimeout(function() {alert("CORRECT!\n\nIf you want to do it again, tap Reset.");}, 600);		// make sure the tabs are moved before the alert shows
		$("#submitButton").hide();
		$("#nextButton").show();	// if nextButton exists, show it so student can proceed to next page
	} else {
		$(".draggable").removeClass("correct", 400);
		setTimeout(function() {alert("One or more of the items is out of order.  Please try again...");}, 600);		// make sure the tabs are moved before the alert shows
	}
}

function resetQuiz() {
	location.reload();
}

function logSubmission(answers,sAnswers) {
	// submit to server
	if (typeof studentId === 'undefined' || studentId == "")
		var studentId = prompt("Please enter your student ID","")
	// todo: get id from the environment variable
	// todo: verify that we got a unique valid id above, or create one from the ip address?
	if (typeof quizpageNumber === 'undefined')
		quizpageNumber = 0;
	quizpageTextSummary = answers.join(", ");
	//console.log(quizpageTextSummary);
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