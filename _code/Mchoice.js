// globals
var checkboxes = $(".checkbox");
var feedbackBoxes = $(".feedback");
//
var logResponsesToDashboard;
var pointsOnFirstTry;
var pointsOnLastTry;
var nextPageUrl;
var qTextSummary = $(".qText").html();
var dataVersionNumber = 3;
// globals defined elsewhere but needed herein

function init() {
	loadTeacherParams();
	// note: no guarantee on the order of the retrieved checkboxes, so sort by position; same for feedbackBoxes
	checkboxes.sort(sortElementByPosition);
	feedbackBoxes.sort(sortElementByPosition);
	setUpSubmitButton();
	setUpResetButton();
	$('#Stage').append(showMetaInfo("2.0 July 2015"));	
}

loadTeacherParams = function() {
	logResponsesToDashboard = loadStageParam("config-logResponsesToDashboard","boolean");
	pointsOnFirstTry = loadStageParam("config-pointsOnFirstTry","integer",0);
	pointsOnLastTry = loadStageParam("config-pointsOnLastTry","integer",0);
	nextPageUrl = loadStageParam("config-nextPageUrl");
}

checkAnswers = function() {
	var questionType;
	console.log("checking answers...");
	var allCorrect = false;
	var studentChoices = arrayOfCheckmarkedChoices();
	// flags
	var isQuizComplete = (studentChoices.length > 0);
	// check answers
	var cc = new Array();
	for (var i=0; i<checkboxes.length; i++) {
		if ($(checkboxes[i]).css("opacity") < 1.0)
			cc.push(i);
	}
	if (cc.length > 1)
		questionType = "Multiple Select";
	else
		questionType = "Multiple Choice";
	allCorrect = areArraysTheSame(studentChoices,cc);
	// respond to student
	if (!isQuizComplete)
		alert("You must mark at least one checkbox before submitting.");
	else {
		// log answers //
		if (typeof logResponsesToDashboard === 'undefined')
			logResponsesToDashboard = false;
		if (logResponsesToDashboard) {
			var logSuccess = logSubmission(dataVersionNumber,questionType,qTextSummary," ",studentChoices,cc,[pointsOnFirstTry,0,pointsOnLastTry]);
			if (logSuccess == false) {
				alert("You must provide a valid student ID for answers to be checked.");
				return;
			}
		}
		// score
		if (allCorrect) {
			alert("CORRECT!");
			setUpNextButton();
		} else {
			alert("One or more of your selections are incorrect.  Please try again...");
			for (var i=0; i<checkboxes.length; i++) {
				$(checkboxes[i]).uncheck();
			}
		}
		// reveal feedback, if any
		for (var i=0; i<studentChoices.length; i++) {
			// for each checkbox checked, if there is a feedbackBox, then show it
			if (studentChoices[i] < feedbackBoxes.length) // insure we don't exceed the array size
				$(feedbackBoxes[studentChoices[i]]).animate({opacity: 1.0});
		}
	}
}

function arrayOfCheckmarkedChoices() {
	// checkbox numbering starts at 0
	var arrayOfChoices = new Array();
	for (var i=0; i<checkboxes.length; i++) {
		if ($(checkboxes[i]).isChecked())
			arrayOfChoices.push(i);
	}
	return arrayOfChoices;
}


jQuery.fn.extend({
  isChecked: function() {
	return this.children().last().css("opacity") == 1;
  },
  uncheck: function() {
    this.children().last().css({"opacity":0, "z-index":-1});
  }
});
