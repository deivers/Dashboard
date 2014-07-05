// globals
var texts = [];
var textFields;
var questionType;
// globals defined elsewhere but needed herein
//	imageLabelerType
//	logResponsesToDashboard
//	quizpageNumber
//	qTextSummary
//	showWrongAnswers
//	nextPageUrl
// additional globals needed if ShortAnswer type
//	minNumChars

function init() {
	// collect all possible answers
	textFields = $(".textSource");
	// console.log("number of fields: "+textFields.length);
	buildTextsArray();
	if (typeof imageLabelerType !== 'undefined' && imageLabelerType == "menus") {
		questionType = "Image Labeler with Popup Menus";
		buildMenus();
	} else {
		questionType = "Image Labeler with Short Answer Boxes";
		buildTextBoxes();
	}
	$(".textSource").css({"opacity": 1});	// it's now safe to reveal these
	if (typeof minNumChars === 'undefined' || minNumChars < 1)
		var minNumChars = 3;
	setUpSubmitButton();
}

buildTextsArray = function() {
	var decoys = [];
	var decoyFields = $(".decoy");
	for (var i=0; i<decoyFields.length; i++)
		decoys.push($(decoyFields[i]).html());
	$(decoyFields).remove();
	textFields = $(".textSource");
	for (var i=0; i<textFields.length; i++)
		texts.push($(textFields[i]).html());
	for (var i=0; i<decoys.length; i++)
		texts.push(decoys[i]);
	console.log("number of fields: "+textFields.length);
	console.log(texts.length);
}

buildMenus = function() {
	// randomize
	var textForMenus = texts.slice(0);	// duplicate the array  // someone reported that this doesn't work on IE10...?
	shuffleArray(textForMenus);
	var optionString = "<option>?</option>";
	for (var i=0; i<textForMenus.length; i++) {
		optionString += "<option>"+textForMenus[i]+"</option>";
	}
	var htmlPrefix = "<select id=";
	var htmlSuffix = " class='menu'>"+optionString+"</select>";
	insertIntoHtml(htmlPrefix,htmlSuffix);
}

buildTextBoxes = function() {
	var htmlPrefix = "<input type='text' id=";
	var htmlSuffix = " class='textBox' style='width:96%;' />";
	insertIntoHtml(htmlPrefix,htmlSuffix);
	$(".textBox").attr("autocomplete", "off")
		.keyup(function(event){handleKeyup(event);});
	$("body").keydown(function(event){handleKeydownNotInInput(event);});
}

insertIntoHtml = function(prefix,suffix) {
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

function completeFragment(fragment) {
	//console.log("completeFragment function with arg: "+fragment);
	var length = fragment.length;
	var indexOfMatch = -1;
	var isMatchUnique = true;
	if (typeof minNumChars === 'undefined' || minNumChars < 1)
		minNumChars = 3;
	if (length < minNumChars)
		return ""; // no match yet
	for (var i=0; i<texts.length; i++) {
		if (fragment.toLowerCase() == texts[i].substring(0,length).toLowerCase()) {
			if (indexOfMatch >= 0)
				isMatchUnique = false;
			indexOfMatch = i;
		}
	}
	//console.log("index of match: "+indexOfMatch);
	return (indexOfMatch>=0 && isMatchUnique ? texts[indexOfMatch] : "");
}

function handleKeydownNotInInput(event) {
	if (event.keyCode == 9) { // tab key
		if (event.target.tagName != "BODY")
			return;
		event.preventDefault();
		// put focus on the first empty input field
		for (var i=0; i<textFields.length; i++) {
			var theInputField = $(textFields[i]).children()[0];
			if ($(theInputField).val() == "") {
				$(theInputField).focus(); // the actual input element
				break;
			}
		}
	}
}

function handleKeyup(event) {
	/* reset style */
	$(event.target).removeClass("incorrect correct");
	if ((event.keyCode == 8))
		return true; // allow default behavior of backspace
	/* check for an autocomplete match */
	var userTypedString = event.target.value;
	var completedString = completeFragment(userTypedString);
	if (completedString.length > 0) {
		event.target.value = completedString;
		event.target.blur();
		// var nextId = parseInt(event.target.id) + 1;
		// if (nextId < textFields.length)
		// 	$("#"+nextId).focus();
	}
}

checkAnswers = function() {
	console.log("checking answers");
	var wrong = [];
	var isComplete = true;
	var answerTexts = [];
	var answerWidgets = (typeof imageLabelerType !== 'undefined' && imageLabelerType == "menus") ? $(".menu") : $(".textBox");
	// collect student answers
	var k = 0;
	for (var j=0; j<answerWidgets.length; j++) {
		answerTexts.push($(answerWidgets[j]).val());
		thisText = $(answerWidgets[j]).val();
		if (thisText != texts[j]) {
			// this one is incorrect
			wrong[k++] = answerWidgets[j];
			if (thisText == "?" || thisText == "-" || thisText == "")
				isComplete = false;
		}
	}

	// local variables "passed in" to the following code
	//	isComplete
	//	answerTexts
	//	texts
	//	wrong

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
		if (typeof showWrongAnswers === 'undefined' || showWrongAnswers)
			$(wrong).parent().removeClass("correct").addClass("incorrect",500);
		if (wrong.length > 0)
			alert("Not all are correct.  Please try again.");
		else {
			$(answerWidgets).parent().addClass("correct",500);
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
