// Define the following in the html file:
//   boolean rejectWrongAnswers (defaults to true)
//   boolean requireCompletion (defaults to true)
//   boolean logResponsesToDashboard (defaults to false)

var questionType = "MC";
var version = "1.2 November 2013";
var rejectOption = (typeof rejectWrongAnswers === 'undefined' || rejectWrongAnswers);
var requireOption = (typeof requireCompletion === 'undefined' || requireCompletion);
var isQuizComplete;
var studentList = [];
var dragList;
var zoneList;
var allList;
$(function() {
	dragList = $(".dragTab");
	zoneList = $(".dropZone");
	// shuffle
	if (shuffleWhich == "draggables") {
		allList = $(".dragParent");
		$("#choiceShelf").prepend(allList[allList.length-1]);
		for (var i=0; i<allList.length/2+1; i++)
			$("#choiceShelf").prepend(allList[Math.floor(Math.random()*allList.length)]);
		if ($("#choiceShelf").children()[0] == allList[0]) {
			// make sure the first is not first
			$("#choiceShelf").append(allList[0]);
		}
	} else {
		allList = $(".zoneGroup");
		$("#zoneShelf").prepend(allList[allList.length-1]);
		for (var i=0; i<allList.length/2+1; i++) {
			rndint = Math.floor(Math.random()*allList.length);
			$("#zoneShelf").prepend($(".zoneGroup")[rndint]);
		}
		if ($("#zoneShelf").children()[0] == allList[0]) {
			// make sure the first is not first
			$("#zoneShelf").append(allList[0]);
		}
	}
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
	$("#checkButton").click(function(){checkAnswers()});
	$("#resetButton").click(function(){resetQuiz()});
	showMetaInfo();
});

function showMetaInfo() {
	var copyrightText = "Copyright 2013";
	var createdByText = "";
	var versionText = "Version "+version+".";
	var centerNode = $("<center></center>");
	centerNode.append($("<span></span>").text(copyrightText+" "+createdByText+" "));
	centerNode.append($("<a href='http://www.onetimesoftware.com' target='_blank'></a>").text("One Time Software"));
	centerNode.append($("<span></span>").text(". "+versionText));
	centerNode.append("<br>");
	centerNode.append($("<span></span>").text("Free for academic use when displaying this notice."));
	centerNode.css({
		color: "gray",
		"font-size": "x-small"
	});
	$("body").append(centerNode);
}

function resetQuiz() {
	location.reload();
}

function checkAnswers() {
	isQuizComplete = isComplete();
	if (requireOption && !isQuizComplete) {
		alert("You must complete the quiz before answers will be checked.");
		return;
	}
	var allCorrect = true;
	var correctButIncomplete = true;
	for (var i=0; i<zoneList.length; i++) { // for each zone
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
	if (typeof logResponsesToDashboard === 'undefined')
		logResponsesToDashboard = false;
	if (logResponsesToDashboard) {
		// submit to server
		if (typeof studentId === 'undefined' || studentId == "")
			var studentId = prompt("Please enter your student ID","")
		// todo: verify that we got a valid id above
		if (typeof questionNumber === 'undefined')
			questionNumber = 0;
		if (shuffleWhich == "draggables")
			questionType = "Multiple Choice with the answers shuffled";
		else
			questionType = "Multiple Choice with the questions shuffled";
		if (typeof questionTextSummary === 'undefined')
			questionTextSummary = "Question text summary isn't defined";
		console.log(studentId);
		console.log(questionNumber);
		console.log(questionType);
		console.log(questionTextSummary);
		console.log(studentList);
		var request = $.ajax({
			type: 'POST',
			url: 'LogResponse.php',
			data: {	si : studentId,		//todo: get student id from env var
					qn : questionNumber,
					qt : questionType,
					qs : questionTextSummary,
					sa : studentList
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
	if (allCorrect)
		setTimeout(function(){alert("CORRECT!\n\nIf you want to do it again, tap Reset.");}, 600);		// make sure the tabs are moved before the alert shows
	else if (rejectOption) {
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