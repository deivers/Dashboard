function init() {
	// console.log("init fn")////
	// style the Submit button and bind it to checkAnswers()
	setUpSubmitButton();
}


var overOpacity = 0.6;
var thresholdOpacity = 0.7;
var selectedOpacity = 0.8;

answerButtonClicked = function(which) {
	// toggle-off all the answer buttons
	$(".answer-button").css({"opacity": 0});
	// toggle-on the clicked answer button
	$(which).css({"opacity": selectedOpacity});

}

answerButtonOver = function(which) {
	// console.log("answerButtonOver")////
	if ($(which).css("opacity") == 0)
		$(which).css({"opacity": overOpacity});
}

answerButtonOut = function(which) {
	// console.log("answerButtonOut")////
	if ($(which).css("opacity") < thresholdOpacity)
		$(which).css({"opacity": 0});
}


function checkAnswers() {
	console.log("checking answers...");
	var selectedButtonIndex;
	$(".answer-button").each(function(index){
		if ($(this).css("opacity") > thresholdOpacity)
			selectedButtonIndex = index;
	});

	console.log("the student selected number: ", selectedButtonIndex);

	
}

