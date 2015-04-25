function init() {
	// console.log("init fn")////
	// style the Submit button and bind it to checkAnswers()
	setUpSubmitButton();
}


var overOpacity = 0.5;
var thresholdOpacity = 0.7;
var selectedOpacity = 0.9;
var existingColor, existingAchannel;
var wrongColor;
var correctColor;

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

