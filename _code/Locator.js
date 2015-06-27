function init() {
	// style the Submit button and bind it to checkAnswers()
	setUpSubmitButton("hide");
	loadTeacherParams();
}

var hoverOpacity = 0.5;
var thresholdOpacity = 0.7; //TODO eliminate
var selectedOpacity = 0.9; //TODO eliminate
var existingColor, existingAchannel;
var wrongColor;
var correctColor;
var choiceHistory = [];
var correctNames;
var nextPageUrl;
var submitted = false;

loadTeacherParams = function() {
	correctNames = loadStageParam("config-correctButtonNames","array");
	var hoverParam = loadStageParam("config-revealButtonsOnHover","boolean");
	if (!hoverParam)
		hoverOpacity = 0;
	nextPageUrl = loadStageParam("config-nextPageUrl");
}

answerButtonClicked = function(which) {
	if (submitted)
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
	checkAnswers();
}

answerButtonOver = function(which) {
	// console.log("answerButtonOver")////
	if ($(which).isNotSelected())
		$(which).css({"opacity": hoverOpacity});
}

answerButtonOut = function(which) {
	// console.log("answerButtonOut")////
	if ($(which).isNotSelected())
		$(which).css({"opacity": 0});
}

function checkAnswers() {
	console.log("checking answers...")////
	var selectedButtonIndex, answerIndex;
	$(".answer-button").each(function(index){
		if ($(this).isSelected())
			selectedButtonIndex = index;
	});
	console.log("the student selected number: ", selectedButtonIndex)////
	$(".answer-button").each(function(index){
		var strippedId = $(this).attr('id').substr(6);
		if (correctNames.contains(strippedId))
			answerIndex = index;
	});
	if (selectedButtonIndex == answerIndex) { // correct
		$(".answer-button").eq(selectedButtonIndex)
			.animate({"opacity": 1, "background-color": correctColor}, 300);
		alert("correct!")//////////////////////temporary
		submitChoiceHistory(choiceHistory);
		submitted = true;
		setUpNextButton();
	} else { // incorrect
		$(".answer-button").eq(selectedButtonIndex)
			.animate({"background-color": wrongColor}, 300)
			.animate({"opacity": 0}, 2000, function(){
				$(this).css({"background-color": existingColor});
			});
		alert("Incorrect, please try again");
	} 
}

function submitChoiceHistory(arr) {
	// log answers //
	if (typeof logResponsesToDashboard === 'undefined')
		logResponsesToDashboard = false;
	if (logResponsesToDashboard) {
		var questionText = $(".qText").textContent;
		var logSuccess = logSubmission(dataVersionNumber,"Locator",questionText,correctNames,arr,answerIndex);
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
