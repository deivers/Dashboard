var rejectWrongAnswers;		// false increases difficulty
var requireCompletion;			// true increases difficulty
var introAnimation;				// helps convey to user that drag elements are in fact draggable
var nextPageUrl;				 // either a relative url: "../folder/filename.html" or an absolute url: "https://www.dictionary.com"
var logResponsesToDashboard;
var qTextSummary;

function getTeacherParams() {
	rejectWrongAnswers = loadStageParam("config-rejectWrongAnswers");
	requireCompletion = loadStageParam("config-requireCompletion");
	introAnimation = loadStageParam("config-introAnimation");
	nextPageUrl = loadStageParam("config-nextPageUrl");
	logResponsesToDashboard = loadStageParam("config-logResponsesToDashboard","boolean");
	qTextSummary = "Matchup quiz"
}

function init() {
	getTeacherParams();
	var dataVersionNumber = 3;
	var myLeft, myTop;
	dragElements = $('.dragTab');
	targetList.forEach(function(targetString, i) {
		targetList[i] = "#Stage_" + targetString;
	});
	answerList.forEach(function(answerString, i) {
		answerList[i] = "#Stage_" + answerString;
	});

	setUpSubmitButton();
	
	// set up dragging
	dragElements.draggable({
		start: function( event, ui ) {
			$(this).addClass('dragging');
			$(this).parent().zIndex(100);
		},
		stop: function( event, ui ) {
			$(this).removeClass('dragging');
			$(this).parent().zIndex(1);
		}
	});

	// set up dropping
	$(".dropZone").droppable({
		accept: '.dragTab',
		hoverClass: 'dropHover',
		drop: function( event, ui ) {
			ui.draggable.position({
				my: 'center',
				at: 'center',
				of: this
			});
		}
	});

	dragElements.each(function(i, el) {
		myLeft = $(this).position().left;
		myTop = $(this).position().top;
		dragElement = $(this);
		myLeft = dragElement.position().left;
		myTop = dragElement.position().top;
		///console.log("myLeft:"+myLeft+"  myTop:"+myTop);///
		dragElement.data('originalLeft',myLeft);
		dragElement.data('originalTop',myTop);
		if (exists(introAnimation)) {
			// prep for intro
			dragElement.addClass('dragging');
			dragElement.css({"left": dragElement.data('originalLeft')+700, "opacity":1});
			dragElement.children().css({"opacity":1});
			// intro
			dragElement.animate(
				{	left: dragElement.data('originalLeft'),
					opacity: 1.0
				},
				{	duration: 300*(dragElements.length-i) + 500,
					easing: 'easeOutCubic',
					complete: function() { // the callback to get back to normal
						$(this).removeClass('dragging');
					}
				}
			);
		} else {
			dragElement.css({"opacity":1});
			dragElement.children().css({"opacity":1});
		}
	});

	checkAnswers = function() {
		///console.log("checkAnswers function");
		// variables
		var allCorrect = true;
		// flags
		var rejectOption = (typeof rejectWrongAnswers === 'undefined' || rejectWrongAnswers);
		var requireOption = (typeof requireCompletion === 'undefined' || requireCompletion);
		var isQuizComplete = isComplete();
		// check answers
		for (var i=0; i<Math.min(targetList.length, answerList.length); i++) {
			if (!isWithin(answerList[i],targetList[i])) {
				allCorrect = false;
				if (rejectOption && (requireOption && isQuizComplete)) {
					$(answerList[i]).animate({
						"left": $(answerList[i]).data('originalLeft'),
						"top": $(answerList[i]).data('originalTop')
					},{
						duration: 400,
						easing: 'easeInOutCubic'
					});
					if (!(typeof $("qHint"+(i+1)) === 'undefined'))
						$("qHint"+(i+1)).css({"opacity":"1"});		// reveal hint if it exists and if zone was wrong
					if (!(typeof $("dragHint"+(i+1)) === 'undefined'))
						$("dragHint"+(i+1)).css({"opacity":"1"});		// reveal hint if it exists and if draggable was wrong
				}
			} else { // hide the hint when the answer is correct
				if (!(typeof $("qHint"+(i+1)) === 'undefined'))
					$("qHint"+(i+1)).css({"opacity":"0"});		// hide hint if it exists
				if (!(typeof $("dragHint"+(i+1)) === 'undefined'))
					$("dragHint"+(i+1)).css({"opacity":"0"});		// hide hint if it exists
			}
		}
		// if more answers than targets...
		for (var j=targetList.length; j<answerList.length; j++)
			if (rejectOption && (requireOption && isQuizComplete))
				$(answerList[i]).animate({
					"left": $(answerList[i]).data('originalLeft'),
					"top": $(answerList[i]).data('originalTop')
				},{
					duration: 400,
					easing: 'easeInOutCubic'
				});
		// respond to student
		if (requireOption && !isQuizComplete)
			alert("You must complete the quiz before answers will be checked.");
		else {
			// log answers //
			if (typeof logResponsesToDashboard === 'undefined')
				logResponsesToDashboard = false;
			if (logResponsesToDashboard) {
				var logSuccess = logSubmission(dataVersionNumber,"Edge Matchup",qTextSummary," ",studentChoices,cc);
				if (logSuccess == false) {
					alert("You must provide a valid student ID for answers to be checked.");
					return;
				}
			}
			if (allCorrect) {
				alert("CORRECT!");
				setUpNextButton();
			} else if (rejectOption)
				setTimeout(function() {alert("Keep trying...");}, 500);///alert("Please keep trying...");	// caution: this tends to disrupt the animation
			else
				alert("One or more of your answers are incorrect.  Please try again...");
		}
	}

	function isComplete() {
		var nAnswered = 0;
		for (var i=0; i<answerList.length; i++)
			if (isAnswered(answerList[i]))
				nAnswered++;
		return (nAnswered == targetList.length);
	}

	function isAnswered(a) {
		// assume targets are aligned in a column
		var buffer = 4;
		var targetCenterX = $(targetList[0]).offset().left + $(targetList[0]).width()/2;	// it would be more efficient to pull this out of the loop
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
		return (aCenterH-buffer < bCenterH && bCenterH < aCenterH+buffer && aCenterV-buffer < bCenterV && bCenterV < aCenterV+buffer);
	}

//??? why don't I use the one in common.js ???//
	function logStudentResponses(list) {
		if (typeof logResponsesToDashboard === 'undefined')
			logResponsesToDashboard = false;
		if (logResponsesToDashboard) {
			// submit to server
			if (typeof studentId === 'undefined' || studentId == "")
				var studentId = prompt("Please enter your student ID","")
			// todo: verify that we got a valid id above
			var questionType;
			//if (shuffleWhich == "draggables")
			//	questionType = "Edge Matchup with the answers shuffled";
			//else
			//	questionType = "Edge Matchup with the questions shuffled";
			questionType = "Edge Matchup";
			if (typeof qTextSummary === 'undefined')
				var qTextSummary = "Question text summary isn't defined";
			var request = $.ajax({
				type: 'POST',
				url: 'LogResponse.php',
				data: {	si : studentId,		//todo: get student id from env var
						qn : dataVersionNumber,
						qt : questionType,
						qs : qTextSummary,
						sa : list
				},
				dataType: 'json'
			});
			request.done(function(msg) {
				console.log("Submission successful");
			});
			request.fail(function(jqXHR, textStatus) {
				console.log("The submission failed: "+textStatus);
			});
		}
	}
}

