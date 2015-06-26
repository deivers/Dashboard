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
	if (typeof jQuery === "undefined") { // apparently the user is not connected to the internet
		var a = document.getElementsByClassName("dragTab");
		for (var i=a.length-1; i>=0; i--) {
			a[i].remove();
		}
		alert("You must be connected to the internet in order to access this quiz.");
		return;
	}
	getTeacherParams();
	var dataVersionNumber = 3;
	var myLeft, myTop;
	var dragElements = $('.dragTab').sort(sortElementByPosition); // assume these are initially positioned in the correct order (before the shuffle below)
	var targetElements = $('.dropZone').sort(sortElementByPosition);
	var qHintElements = $('.qHint').sort(sortElementByPosition); //TODO use this
	var aHintElements = $('.aHint').sort(sortElementByPosition); //TODO use this
	var shuffleMapping = shuffleArray(arrayFactory(dragElements.length,1,0));
	var shuffleInverse = [];
	shuffleMapping.forEach(function(el,i){
		shuffleInverse[shuffleMapping[i]] = i;
	});
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
	// same for the answer hints
	var originalHintPositions = [];
	aHintElements.each(function(i, el) {
		originalHintPositions[i] = $(el).position();
	});
	aHintElements.each(function(i, el) {
		$(aHintElements[shuffleMapping[i]]).css("left", originalHintPositions[i].left);
		$(aHintElements[shuffleMapping[i]]).css("top", originalHintPositions[i].top);
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

	dragElements.each(function(i, dragEl) {
		myLeft = $(dragEl).position().left;
		myTop = $(dragEl).position().top;
		
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
				{	duration: 300*shuffleInverse[i] + 500,
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
	var answerTextArray = $(dragElements).htmlList();

	checkAnswers = function() {
		///console.log("checkAnswers function");
		// variables
		var allCorrect = true;
		var saIndexes = [];
		var akIndexes = arrayFactory(dragElements.length,1,0);
		// config
		var rejectOption = rejectWrongAnswers;
		var requireOption = requireCompletion;

		// gather up the answer indexes and check if complete or not
		var nWithin = 0;
		for (var i=0; i<dragElements.length; i++) {
			for (var j=0; j<targetElements.length; j++) {
				if (isWithin(dragElements[i],targetElements[j])) {
					saIndexes[j] = i;
					nWithin++;
					break;
				}
			}
		}
		var isQuizComplete = (nWithin == targetElements.length);

		// check answers
		for (var i=0; i<targetElements.length; i++) {
			if (saIndexes[i] != i) {
				allCorrect = false;
				if (rejectOption && (requireOption && isQuizComplete)) {
					$(dragElements[i]).animate({
						"left": $(dragElements[i]).data('originalLeft'),
						"top": $(dragElements[i]).data('originalTop')
					},{
						duration: 400,
						easing: 'easeInOutCubic'
					});
					$(qHintElements[i]).css({"opacity":1});		// reveal question hint bec. the zone was wrong
					$(aHintElements[saIndexes[i]]).css({"opacity":1});		// reveal answer hint bec. draggable was wrong
				}
			} else { // hide the hint when the answer is correct
				$(qHintElements[i]).css({"opacity":0});
				$(aHintElements[saIndexes[i]]).css({"opacity":0});
			}
		}
		// if more answers than targets, then we may need to reject the extra draggables
		for (var j=targetElements.length; j<dragElements.length; j++) {
			if (rejectOption && (requireOption && isQuizComplete)) {
				$(dragElements[i]).animate({
					"left": $(dragElements[i]).data('originalLeft'),
					"top": $(dragElements[i]).data('originalTop')
				},{
					duration: 400,
					easing: 'easeInOutCubic'
				});
			}
			if (allCorrect) {
				$(aHintElements[i]).css({"opacity":0});
			}
		}
		// respond to student
		if (requireOption && !isQuizComplete)
			alert("You must complete the quiz before answers will be checked.");
		else {
			// log answers //
			if (typeof logResponsesToDashboard === 'undefined')
				logResponsesToDashboard = false;
			if (logResponsesToDashboard) {
				var logSuccess = logSubmission(dataVersionNumber,"Edge Matchup",questionTextArray.join(','),answerTextArray.join(','),saIndexes,akIndexes);
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

