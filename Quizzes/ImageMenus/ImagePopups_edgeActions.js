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
         console.log("creation complete fn");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         {	// Editable section //
         	var logResponsesToDashboard = true;
         	var questionNumber = 1;
         	var questionTextSummary = "short description of what is in this quiz"
         	// end if editable section //
         }
         
         console.log("composition ready");
         var textFields = sym.$(".textSource");
         console.log("number of fields: "+textFields.length);
         var texts = [];
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
         
         sym.checkStudentAnswers = function() {
         	console.log("checking answers");
         	// implicit args: answerKey, textForMenus
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
         		logStudentResponses(answerTexts);
         		// clear any previous marks
         		$(answerWidgets).parent().css({"border":"0px"});
         		// mark wrong answers
         		$(wrong).parent().css({"border":"3px solid red"});
         		if (wrong.length > 0)
         			alert("Please keep trying.");
         		else
         			alert("All correct!");
         	} else
         			alert("You must complete the quiz before answers will be checked.");
         }
         
         /**
          * Randomize array element order in-place.
          * Using Fisher-Yates shuffle algorithm.
          */
         function shuffleArray(array) {
             for (var i = array.length - 1; i > 0; i--) {
                 var j = Math.floor(Math.random() * (i + 1));
                 var temp = array[i];
                 array[i] = array[j];
                 array[j] = temp;
             }
             return array;
         }
         
         function logStudentResponses(list) {
         	if (typeof logResponsesToDashboard === 'undefined')
         		logResponsesToDashboard = false;
         	if (logResponsesToDashboard) {
         		// submit to server
         		if (typeof studentId === 'undefined' || studentId == "")
         			var studentId = prompt("Please enter your student ID","")
         		// todo: verify that we got a valid id above
         		if (typeof questionNumber === 'undefined')
         			var questionNumber = 0;
         		if (typeof questionType === 'undefined')
         			var questionType = "Image Labeler";
         		if (typeof questionTextSummary === 'undefined')
         			var questionTextSummary = "Question text summary isn't defined";
         		var request = $.ajax({
         			type: 'POST',
         			url: 'LogResponse.php',
         			data: {	si : studentId,		//todo: get student id from env var
         					qn : questionNumber,
         					qt : questionType,
         					qs : questionTextSummary,
         					sa : list
         			},
         			dataType: 'json'
         		});
         		request.done(function(msg) {
         			console.log("Submission successful");
         		});
         		request.fail(function(jqXHR, textStatus) {
         			console.log("The submission failed: "+textStatus);
         		});
         	}
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SubmitAnswersButton}", "click", function(sym, e) {
         sym.getComposition().getStage().checkStudentAnswers();

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

})(jQuery, AdobeEdge, "EDGE-749678393");