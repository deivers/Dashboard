function init() {
	// style the Submit button and bind it to checkAnswers()
	setUpSubmitButton("hide");
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
var logResponsesToDashboard;
var nextPageUrl;
var completed = false;

function loadTeacherParams() {
	correctNames = loadStageParam("config-correctButtonNames","array");
	allNames = $(".answer-button").edgeElementNames();
	var hoverParam = loadStageParam("config-revealButtonsOnHover","boolean");
	if (!hoverParam)
		hoverOpacity = 0;
	logResponsesToDashboard = loadStageParam("config-logResponsesToDashboard","boolean");
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
	// console.log("the student selected number: ", selectedButtonIndex)////
	logResponse(nameOfClickedButton);

	if (correctNames.contains(nameOfClickedButton)) {
		$(which).animate({"opacity": 1, "background-color": correctColor}, 300);
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
		var logSuccess = logSubmission(dataVersionNumber,"Locator",questionText,allNames,[thisChoice],correctNames);
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
