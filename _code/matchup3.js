// Define the following in the html file:
//   integer quizpageNumber
//   string qTextSummary
//   string shuffleWhich
//   boolean rejectWrongAnswers (defaults to true)
//   boolean requireCompletion (defaults to true)
//   boolean logResponsesToDashboard (defaults to false)
//   string nextPageUrl

var questionType = "MatchUp";
var version = "1.2 November 2013";
var rejectOption = (typeof rejectWrongAnswers === 'undefined' || rejectWrongAnswers);
var requireOption = (typeof requireCompletion === 'undefined' || requireCompletion);
var isQuizComplete;
var dragList;
var zoneList;
$(function() {
	dragList = $(".dragTab");
	zoneList = $(".dropZone");
	// shuffle
	if (typeof shuffleWhich === 'undefined' || shuffleWhich == "draggables")
		shuffleDivs("#choices",".dragGroup");
	else
		shuffleDivs("#questions",".zoneGroup");
	// set up draggables
	var dragList2 = $(".dragTab");
	for (var i=0; i<dragList.length; i++) {
		dragElement = dragList[i];
		$(dragElement).draggable({
			start: function(event, ui) {
				$(this).addClass("dragging");
			},
			stop: function(event, ui) {
				$(this).removeClass("dragging");
			},
			stack: ".dragTab",
		});
		$(dragElement).addClass("dragging");
		$(dragElement).css({opacity : 0});		// initial
		$(dragList2[i]).animate(
			{opacity: 1.0},		// final
			{
				duration: 300*i + 500,
				easing: 'linear',
				complete: function() { // the callback to remove the shadow
					$(this).removeClass("dragging");
				}
			}
		);
	}
	// set up drop zones
	for (var j=0; j<zoneList.length; j++) {
		$(zoneList[j]).droppable({
			accept: ".dragTab",
			hoverClass: "dropHover",
			tolerance: "intersect",
			drop: function(event, ui) {
				$(ui.draggable).position({   // change to 'this'?
					my: "center",
					at: "center",
					of: this
				});
			}
		});
	}
	$("#submitButton").click(function(){checkAnswers()});
	$("#resetButton").click(function(){resetQuiz()});
	$("#nextButton").click(function(){window.open(nextPageUrl,"_self")})
		.hide();      // this will be revealed when the quiz is correctly completed
	$("body").append(showMetaInfo(version));
});

function resetQuiz() {
	location.reload();
}

function checkAnswers() {
	var studentList = [];
	isQuizComplete = isComplete();
	if (requireOption && !isQuizComplete) {
		alert("You must complete the quiz before answers will be checked.");
		return;
	}
	var allCorrect = true;
	var correctButIncomplete = true;
	var ak = [];
	for (var i=0; i<zoneList.length; i++) { // for each zone
		ak[i] = i;
		studentList[i] = -1; // in case no draggable found in this zone
		for (var j=0; j<dragList.length; j++) {
			if (isWithin(dragList[j], zoneList[i])) {
				studentList[i] = j;
				if (i != j)
					correctButIncomplete = false;
				break;
			}
		}
		if (studentList[i] != i)
			allCorrect = false;
	}
	// log answers //
	if (typeof logResponsesToDashboard === 'undefined')
		logResponsesToDashboard = false;
	if (logResponsesToDashboard) {
		if (shuffleWhich == "draggables")
			questionType = "Matchup with the answers shuffled";
		else
			questionType = "Matchup with the questions shuffled";
		var aDetailedList = [];
		$(dragList).each(function(index) {
			aDetailedList.push($(this).html());
		});
		var logSuccess = logSubmission(quizpageNumber,questionType,qTextSummary,aDetailedList,studentList,ak);
		if (logSuccess == false) {
			alert("You must provide a valid student ID for answers to be checked.");
			return;
		}
	}
	// reject wrong answers
	var parentDiv;
	if ((!(requireOption && !isQuizComplete) && rejectOption) || allCorrect) {
		for (var i=0; i<zoneList.length; i++) { // for each zone
			if (studentList[i] != i) {
				$(dragList[studentList[i]]).removeClass("correct");
				parentDiv = $(dragList[studentList[i]]).parent();
				$(dragList[studentList[i]]).animate({left: 0, top: 0}, // move wrong draggables back to original position
				{
					duration: 500,
					easing: 'easeInOutCubic',
				});
			} else
				$(dragList[studentList[i]]).addClass("correct",400);
		}
	}
	// give feedback to student
	if (allCorrect) {
		setTimeout(function(){alert("CORRECT!\n\nIf you want to do it again, tap Reset.");}, 600);		// make sure the tabs are moved before the alert shows
		$("#submitButton").hide();
		$("#nextButton").show();	// if nextButton exists, show it so student can proceed to next page
	} else if (rejectOption) {
		if (correctButIncomplete)
			setTimeout(function(){alert("So far so good...");}, 600);		// make sure the tabs are moved before the alert shows
		else
			setTimeout(function(){alert("Please keep trying...");}, 600);		// make sure the tabs are moved before the alert shows
	} else
		alert("One or more of your answers are incorrect.  Please try again...");
}

function isComplete() {
	var nAnswered = 0;
	for (var i=0; i<dragList.length; i++)
		if (isAnswered(dragList[i]))
			nAnswered++;
	return (nAnswered == zoneList.length);
}

function isAnswered(a) {
	// assume targets are aligned in a column
	var buffer = 2;
	var targetCenterX = $(zoneList[0]).offset().left + $(zoneList[0]).width()/2;	// it would be more efficient to pull this out of the loop, but keep it here for readability
	var answerCenterX = $(a).offset().left + $(a).width()/2;
	return (targetCenterX-buffer < answerCenterX && answerCenterX < targetCenterX+buffer);
}

function isWithin(a, b) {
	// compare centers
	var buffer = 10;
	var aCenterH = $(a).offset().left + $(a).width()/2;
	var aCenterV = $(a).offset().top + $(a).height()/2;
	var bCenterH = $(b).offset().left + $(b).width()/2;
	var bCenterV = $(b).offset().top + $(b).height()/2;
	return (aCenterH-buffer < bCenterH
		 && bCenterH < aCenterH+buffer
		 && aCenterV-buffer < bCenterV
		 && bCenterV < aCenterV+buffer
	);
}
