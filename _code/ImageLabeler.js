// globals
var texts = [];
var textFields;
var questionType;
// globals defined elsewhere but needed herein
//	logResponsesToDashboard
//	quizpageNumber
//	qTextSummary
//	showWrongAnswers
//	nextPageUrl

function init() {
	// collect all possible answers
	textFields = $(".textSource");
	console.log("number of fields: "+textFields.length);
	for (var i=0; i<textFields.length; i++) {
		texts[i] = $(textFields[i]).html();
		//console.log("text found at position "+i+": "+texts[i]);
	}
	if (imageLabelerType !== 'undefined' && imageLabelerType == "menus") {
		questionType = "Image Labeler with Popup Menus";
		buildMenus();
	} else {
		questionType = "Image Labeler with Short Answer Boxes";
		//buildTextBoxes();
	}
	$(".textSource").css({"opacity": 1});	// it's now safe to reveal these
	setUpSubmitButton();
}

buildMenus = function() {
	// randomize
	var textForMenus = texts.slice(0);	// duplicate the array
	shuffleArray(textForMenus);
	var optionString = "<option>?</option>";
	for (var i=0; i<textFields.length; i++) {
		optionString += "<option>"+textForMenus[i]+"</option>";
	}
	var htmlPrefix = "<select id=";
	var htmlSuffix = " class='menu'>"+optionString+"</select>";
	insertIntoHtml(htmlPrefix,htmlSuffix);
}

buildTextBoxes = function() {
	var htmlPrefix = "<input type='text'";
	var htmlSuffix = " class='textBox' />";
}

insertIntoHtml = function(prefix,suffix) {
	// insert the menus into the DOM
	//todo: but don't use textFields that are off stage left
	var j = 0;
	var stageLeftEdge = $("#Stage").position().left;
	for (var i=0; i<textFields.length; i++) {
		if ($(textFields[i]).position().left < stageLeftEdge) {
			;//console.log("#"+i+" is off stage left");
		} else {
			$(textFields[i]).html("");
			$(prefix+j+suffix).appendTo($(textFields[i]));
			j++;
		}
	}
}

checkAnswers = function() {
	console.log("checking answers");
	var answerWidgets = $(".menu");
	var wrong = [];
	var k = 0;
	var answerTexts = [];
	var isComplete = true;
	// which index did the student pick?
	for (var j=0; j<answerWidgets.length; j++) {
		answerTexts.push($(answerWidgets[j]).val());
		thisText = $(answerWidgets[j]).val();
		if (thisText != texts[j]) {
			// this one is incorrect
			wrong[k++] = answerWidgets[j];
			if (thisText == "?" || thisText == "-" || thisText == "")
				isComplete = false;
		}
		//var index = $.inArray($(answerWidgets[j]).val(), textForMenus); // is there an easier way to get the selected index?
		//console.log(index);
	}
	if (isComplete) {
		// log answers //
		if (typeof logResponsesToDashboard === 'undefined')
			logResponsesToDashboard = false;
		if (logResponsesToDashboard) {
			var saArray = convertToIndexes(answerTexts,texts);
			var akArray = arrayFactory(answerTexts.length,1,0);
			//console.log(texts); console.log(saArray); console.log(akArray);
			var logSuccess = logSubmission(quizpageNumber,questionType,qTextSummary,texts,saArray,akArray);
			if (logSuccess == false) {
				alert("You must provide a valid student ID for answers to be checked.");
				return;
			}
		}
		// scoring //
		// clear any previous marks
		$(answerWidgets).parent().removeClass("incorrect");
		// mark wrong answers
		if (showWrongAnswers)
			$(wrong).parent().removeClass("correct").addClass("incorrect");
		if (wrong.length > 0)
			alert("Not all are correct.  Please try again.");
		else {
			$(answerWidgets).parent().addClass("correct");
			alert("All correct!");
			setUpNextButton();
		}
	} else
		alert("You must complete the quiz before answers will be checked.");
}

goNextPage = function() {
	console.log(">>> "+nextPageUrl);
	if (typeof nextPageUrl !== 'undefined' && nextPageUrl != "")
		window.open(nextPageUrl, "_self");
}
