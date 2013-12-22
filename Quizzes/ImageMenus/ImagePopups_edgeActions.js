/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // initially hide the Next Page button
         sym.getComposition().getSymbols("NextPageButton")[0].getSymbolElement().css({"opacity":0});
         
         // make sure the text boxes aren't visible while page loads
         sym.$(".textSource").css({"opacity": 0});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // instructor editable section //
         	var questionType = "Image with Popup Menus";
         	var qTextSummary = "short description of what is in this quiz"
         	var showWrongAnswers = true;		// false increases difficulty
         	var logResponsesToDashboard = true;	// true if you want to use the Dashboard
         	var quizpageNumber = 1;					// required if the above is true; must be unique across quiz-pages in this folder
         	var nextPageUrl = "../folder/filename.html";
         // end of editable section //
         
         
         console.log("composition ready");
         var texts = [];
         // load external css file
         yepnope({
         	load: ["../../_code/ImagePopups.css", "../../_code/common.js"],
         	complete: init
         });
         
         function init() {
         	// collect all possible menu options
         	var textFields = sym.$(".textSource");
         	console.log("number of fields: "+textFields.length);
         	for (var i=0; i<textFields.length; i++) {
         		texts[i] = $(textFields[i]).html();
         		//console.log("text found at position "+i+": "+texts[i]);
         	}
         	// randomize the menu options
         	var textForMenus = texts.slice(0);
         	shuffleArray(textForMenus);
         	var optionString = "<option>?</option>";
         	for (var i=0; i<textFields.length; i++) {
         		optionString += "<option>"+textForMenus[i]+"</option>";
         	}
         	// insert the menus into the DOM
         	//todo: but don't populate textFields off stage left
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
         	sym.$(".textSource").css({"opacity": 1});
         }
         
         
         sym.checkStudentAnswers = function() {
         	console.log("checking answers");
         	var answerWidgets = sym.$(".menu");
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
         			sym.getComposition().getSymbols("SubmitAnswersButton")[0].getSymbolElement().css({"opacity":0,"left":-1000});
         			sym.getComposition().getSymbols("NextPageButton")[0].getSymbolElement().css({"opacity":1});
         		}
         	} else
         		alert("You must complete the quiz before answers will be checked.");
         }
         
         sym.goNextPage = function() {
         	console.log(">>> "+nextPageUrl);
         	window.open(nextPageUrl, "_blank");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SubmitAnswersButton}", "click", function(sym, e) {
         sym.getComposition().getStage().checkStudentAnswers();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_NextPageButton}", "click", function(sym, e) {
         sym.getComposition().getStage().goNextPage();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'checkAnswers'
   (function(symbolName) {   
   
      

   })("SubmitAnswersButton");
   //Edge symbol end:'SubmitAnswersButton'

   //=========================================================
   
   //Edge symbol: 'SubmitAnswersButton_1'
   (function(symbolName) {   
         

      })("NextPageButton");
   //Edge symbol end:'NextPageButton'

})(jQuery, AdobeEdge, "EDGE-749678393");
