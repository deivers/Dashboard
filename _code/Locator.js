function init() {
	// console.log("init fn")////
	// style the Submit button and bind it to checkAnswers()
	setUpSubmitButton();
}


var overOpacity = 0.6;
var thresholdOpacity = 0.7;
var selectedOpacity = 0.8;
var existingColor;
var wrongColor = "#d22";
var correctColor = "#0d0";

answerButtonClicked = function(which) {
	// toggle-off all the answer buttons
	$(".answer-button").css({"opacity": 0});
	// toggle-on the clicked answer button
	$(which).css({"opacity": selectedOpacity});
	existingColor = $(which).css("background-color");
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
	var selectedButtonIndex, answerIndex;
	$(".answer-button").each(function(index){
		if ($(this).css("opacity") > thresholdOpacity)
			selectedButtonIndex = index;
	});

	// console.log("the student selected number: ", selectedButtonIndex)////
	$(".answer-button").each(function(index){
		if ($(this).css("overflow") != "visible")
			answerIndex = index;
	});
	if (selectedButtonIndex == answerIndex)
		$(".answer-button").eq(selectedButtonIndex).css({"background-color": correctColor});
	else {
		$(".answer-button").eq(selectedButtonIndex)
			.css({"background-color": wrongColor})
			.animate({"opacity":0}, 2000, function(){
				$(this).css({"background-color": existingColor});
			});

	}

}

