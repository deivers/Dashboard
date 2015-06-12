function init() {
	// console.log("init fn")////
	// style the Submit button and bind it to checkAnswers()
	loadTeacherParams();
	setUpSubmitButton();
}


var hoverOpacity = 0.5;
var thresholdOpacity = 0.7;
var selectedOpacity = 0.9;
var existingColor, existingAchannel;
var wrongColor;
var correctColor;

var nextPageUrl;

loadTeacherParams = function() {
	var hoverParam = loadStageParam("config-revealButtonsOnHover");
	nextPageUrl = loadStageParam("config-nextPageUrl");

	if (!hoverParam)
		hoverOpacity = 0;
}

answerButtonClicked = function(which) {
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
	// console.log("checking answers...")////
	var selectedButtonIndex, answerIndex;
	$(".answer-button").each(function(index){
		if ($(this).isSelected())
			selectedButtonIndex = index;
	});
	// console.log("the student selected number: ", selectedButtonIndex)////
	$(".answer-button").each(function(index){
		if ($(this).css("overflow") != "visible")
			answerIndex = index;
	});
	if (selectedButtonIndex == answerIndex) {
		$(".answer-button").eq(selectedButtonIndex)
			.animate({"opacity": 1, "background-color": correctColor}, 300);
		setUpNextButton();
	} else {
		$(".answer-button").eq(selectedButtonIndex)
			.animate({"background-color": wrongColor}, 300)
			.animate({"opacity": 0}, 2000, function(){
				$(this).css({"background-color": existingColor});
			});
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
