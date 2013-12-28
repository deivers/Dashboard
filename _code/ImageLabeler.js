var texts = [];
// collect all possible menu options
var textFields = $(".textSource");
console.log("number of fields: "+textFields.length);
for (var i=0; i<textFields.length; i++) {
	texts[i] = $(textFields[i]).html();
	//console.log("text found at position "+i+": "+texts[i]);
}
// randomize the menu options
var textForMenus = texts.slice(0);	// duplicate the array
shuffleArray(textForMenus);
var optionString = "<option>?</option>";
for (var i=0; i<textFields.length; i++) {
	optionString += "<option>"+textForMenus[i]+"</option>";
}
// insert the menus into the DOM
//todo: but don't use textFields that are off stage left
var j = 0;
var answerKey = [];
for (var i=0; i<textFields.length; i++) {
	if ($(textFields[i]).position().left < -10) {
		;//console.log("#"+i+" is off stage left");
	} else {
		answerKey[j] = $(textFields[i]).html();
		$(textFields[i]).html("");
		$("<select id="+j+" class='menu'>"+optionString+"</select>").appendTo($(textFields[i]));
		j++;
	}
}
$(".textSource").css({"opacity": 1});

checkStudentAnswers = function() {
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
			/////$(".SubmitAnswersButton")[0].css({"opacity":0,"left":-1000});
			//if (typeof nextPageUrl !== 'undefined' && nextPageUrl != "")
			//	$("NextPageButton")[0].getSymbolElement().css({"opacity":1});
		}
	} else
		alert("You must complete the quiz before answers will be checked.");
}

goNextPage = function() {
	console.log(">>> "+nextPageUrl);
	if (typeof nextPageUrl !== 'undefined' && nextPageUrl != "")
		window.open(nextPageUrl, "_self");
}
