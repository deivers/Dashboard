function init() {
	// style the Submit button and bind it to checkAnswers()
	setUpSubmitButton("hide");
	$('#Stage').append(showMetaInfo("2.0 July 2015"));
	loadTeacherParams();
}

var dataVersionNumber = 3;
var hoverOpacity = 0.5;
var thresholdOpacity = 0.7; //TODO eliminate
var selectedOpacity = 0.9; //TODO eliminate
var existingColor, existingAchannel;
var wrongColor;
var correctColor;
var correctNames;
var allNames;
var clickParam;
var logResponsesToDashboard;
var pointsOnFirstTry, pointsOnLastTry;
var nextPageUrl;
var completed = false;

function loadTeacherParams() {
	correctNames = loadStageParam("config-correctButtonNames","array");
	allNames = $(".answer-button").edgeElementNames();
	var hoverParam = loadStageParam("config-revealButtonsOnHover","boolean");
	if (!hoverParam)
		hoverOpacity = 0;
	clickParam = loadStageParam("config-colorAnimationOnClick","boolean");
	if (!clickParam)
		selectedOpacity = 0;
	logResponsesToDashboard = loadStageParam("config-logResponsesToDashboard","boolean");
	pointsOnFirstTry = loadStageParam("config-pointsOnFirstTry","integer",0);
	pointsOnLastTry = loadStageParam("config-pointsOnLastTry","integer",0);
	nextPageUrl = loadStageParam("config-nextPageUrl");
}

function answerButtonClicked(which) {
	if (completed)
		return;
	// toggle-off all the answer buttons
	$(".answer-button").css({"opacity": 0});
	// toggle-on the clicked answer button
	$(which).css({"opacity": selectedOpacity});
	if (typeof existingColor === "undefined") {
		existingColor = $(which).css("background-color");
		// assume the above is of the form "rgba(###, ###, ###, ###)"
	    existingAchannel = existingColor.slice(existingColor.lastIndexOf(',')+1, existingColor.length-1).trim(); // look between the last , and the )
		wrongColor = "rgba(255, 0, 0, "+ existingAchannel +")";
		correctColor = "rgba(0, 255, 0, "+ existingAchannel +")";
	}
	// console.log("checking answers...")////
	var nameOfClickedButton = $(which).edgeElementName();
	logResponse(nameOfClickedButton);

	if (correctNames.contains(nameOfClickedButton)) {
		if (clickParam) {
			// highlight all the correct buttons
			correctNames.forEach(function(name) {
				$("#Stage_"+name).animate({"opacity": 1, "background-color": correctColor}, 300);
			});
		}
		alert("Correct!");
		completed = true;
		setUpNextButton();
	} else { // incorrect
		$(which)
			.animate({"background-color": wrongColor}, 300)
			.animate({"opacity": 0}, 2000, function(){
				$(this).css({"background-color": existingColor});
			});
		alert("Incorrect, please try again");
	} 
}

function answerButtonOver(which) {
	// console.log("answerButtonOver")////
	if ($(which).isNotSelected())
		$(which).css({"opacity": hoverOpacity});
}

function answerButtonOut(which) {
	// console.log("answerButtonOut")////
	if ($(which).isNotSelected())
		$(which).css({"opacity": 0});
}

function logResponse(thisChoice) {
	// log answers //
	if (typeof logResponsesToDashboard === 'undefined')
		logResponsesToDashboard = false;
	if (logResponsesToDashboard) {
		var questionText = $(".qText")[0].textContent;
		var ptArray = [pointsOnFirstTry,0,pointsOnLastTry];
		var logSuccess = logSubmission(dataVersionNumber,"Locator",questionText,allNames,[thisChoice],correctNames,ptArray);
		// if (logSuccess == false) {
		// 	alert("You must provide a valid student ID for answers to be checked.");
		// 	return;
		// }
	}
}

jQuery.fn.extend({
  isSelected: function() {
	return this.css("opacity") > thresholdOpacity;
  },
  isNotSelected: function() {
	return this.css("opacity") < thresholdOpacity;
  }
});
