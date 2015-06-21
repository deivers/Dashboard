var rejectWrongAnswers;		// false increases difficulty
var requireCompletion;			// true increases difficulty
var introAnimation;				// helps convey to user that drag elements are in fact draggable
var nextPageUrl;				 // either a relative url: "../folder/filename.html" or an absolute url: "https://www.dictionary.com"
var logResponsesToDashboard;

function getTeacherParams() {
	rejectWrongAnswers = loadStageParam("config-rejectWrongAnswers", "boolean");
	requireCompletion = loadStageParam("config-requireCompletion", "boolean");
	introAnimation = loadStageParam("config-introAnimation", "boolean");
	nextPageUrl = loadStageParam("config-nextPageUrl");
	logResponsesToDashboard = loadStageParam("config-logResponsesToDashboard","boolean");
}

function init() {
	getTeacherParams();
	var dataVersionNumber = 3;
	var myLeft, myTop;
	var dragElements = $('.dragTab').sort(sortElementByPosition); // assume these are positioned in the correct order
	var targetElements = $('.dropZone').sort(sortElementByPosition);
	// var tempsave_dragElements = dragElements.clone();
	var shuffleMapping = shuffleArray(arrayFactory(dragElements.length,1,0));
	// collect the original positions in an array
	var originalPositions = [];
	dragElements.each(function(i, el) {
		originalPositions[i] = $(el).parent().position();
	});
	// set the shuffled x-y positions
	dragElements.each(function(i, el) {
		$(dragElements[shuffleMapping[i]]).parent().css("left", originalPositions[i].left);
		$(dragElements[shuffleMapping[i]]).parent().css("top", originalPositions[i].top);
	});
	
	// targetList.forEach(function(targetString, i) {
	// 	targetList[i] = "#Stage_" + targetString;
	// });
	// answerList.forEach(function(answerString, i) {
	// 	answerList[i] = "#Stage_" + answerString;
	// });

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

	dragElements.each(function(i, dragEl) {
		myLeft = $(dragEl).position().left;
		myTop = $(dragEl).position().top;
		///console.log("myLeft:"+myLeft+"  myTop:"+myTop);///
		$(dragEl).data('originalLeft',myLeft);
		$(dragEl).data('originalTop',myTop);
		if (exists(introAnimation)) {
			// prep for intro
			$(dragEl).addClass('dragging');
			$(dragEl).css({"left": $(dragEl).data('originalLeft')+700, "opacity":1});
			$(dragEl).children().css({"opacity":1});
			// intro
			$(dragEl).animate(
				{	left: $(this).data('originalLeft'),
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
			$(dragEl).css({"opacity":1});
			$(dragEl).children().css({"opacity":1});
		}
	});

	// gather the questions (if textual)
	var questionTextArray = $(".qText").htmlList() || [];
	var answerTextArray = $(".aText").htmlList() || []; //TODO verify order//

	checkAnswers = function() {
		///console.log("checkAnswers function");
		// variables
		var allCorrect = true;
		var saIndexes = [];
		// flags
		var rejectOption = (typeof rejectWrongAnswers === 'undefined' || rejectWrongAnswers);
		var requireOption = (typeof requireCompletion === 'undefined' || requireCompletion);
		var isQuizComplete = isComplete();
		// check answers
		for (var i=0; i<Math.min(targetElements.length, dragElements.length); i++) {
			if (!isWithin(dragElements[i],targetElements[i])) { // note: no shuffleMapping here
				allCorrect = false;
				if (rejectOption && (requireOption && isQuizComplete)) {
					$(dragElements[i]).animate({
						"left": $(dragElements[i]).data('originalLeft'),
						"top": $(dragElements[i]).data('originalTop')
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
		for (var j=targetElements.length; j<dragElements.length; j++)
			if (rejectOption && (requireOption && isQuizComplete))
				$(dragElements[i]).animate({
					"left": $(dragElements[i]).data('originalLeft'),
					"top": $(dragElements[i]).data('originalTop')
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
				var logSuccess = logSubmission(dataVersionNumber,"Edge Matchup",questionTextArray.join(','),answerTextArray.join(','),saIndexes,arrayFactory(dragElements.length,1,0));
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
		for (var i=0; i<dragElements.length; i++)
			if (isAnswered(dragElements[shuffleMapping[i]]))
				nAnswered++;
		return (nAnswered == targetElements.length);
	}

	function isAnswered(a) {
		// assume targets are aligned in a column
		var buffer = 4;
		var targetCenterX = $(targetElements[0]).offset().left + $(targetElements[0]).width()/2;	// it would be more efficient to pull this out of the loop
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

}

