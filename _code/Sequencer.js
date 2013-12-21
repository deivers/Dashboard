var questionType = "Sequencer";
var version = "1.0 December 2013";
var rejectOption = (typeof rejectWrongAnswers === 'undefined' || rejectWrongAnswers);
var dragList;
var allList;
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
	var nCorrect = 0;
	for (var i=0; i<allList.length; i++) {
		if (allList[i] != $(".draggable")[i]) {
			allCorrect = false;
			break;
		}
		nCorrect++;
	}
	// log answers //
	if (typeof logResponsesToDashboard === 'undefined')
		logResponsesToDashboard = false;
	if (logResponsesToDashboard) {
		var aDetailedList = [];
		$(allList).each(function(index) {
			aDetailedList.push($(this).html());
		});
		var saList = convertToIndexes($(".draggable"),allList);
		var akList = arrayFactory(allList.length);
		var logSuccess = logSubmission(quizpageNumber,questionType,qTextSummary,aDetailedList,saList,akList);
		if (logSuccess == false) {
			alert("You must provide a valid student ID for answers to be checked.");
			return;
		}
	}
	// give feedback to student
	if (allCorrect) {
		$(".draggable").addClass("correct", 400);
		setTimeout(function() {alert("CORRECT!\n\nIf you want to do it again, tap Reset.");}, 600);		// make sure the animation is finished before the alert shows
		$("#submitButton").hide();
		$("#nextButton").show();	// if nextButton exists, show it so student can proceed to next page
	} else {
		if (showWrongAnswers)
			addClassToDraggables(0,nCorrect,"correct",400);
		else
			setTimeout(function() {alert("One or more of the items is out of order.  Please try again...");}, 600);		// make sure the animation is finished before the alert shows
	}
}

function resetQuiz() {
	location.reload();
}

function addClassToDraggables(start,stop,className,duration) {
	$(".draggable").each(function(index){
		if (start <= index && index < stop)
			$(this).addClass(className,duration);
		else
			$(this).removeClass(className,duration);
	});
}