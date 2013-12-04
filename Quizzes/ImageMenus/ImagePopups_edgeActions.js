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
         	// which index did the student pick?
         	for (var j=0; j<answerWidgets.length; j++) {
         		//console.log($(answerWidgets[j]).val());
         		if ($(answerWidgets[j]).val() != texts[j]) {
         			// this one is incorrect
         			wrong[k++] = answerWidgets[j];
         		}
         		//var index = $.inArray($(answerWidgets[j]).val(), textForMenus); // is there an easier way to get the selected index?
         		//console.log(index);
         	}
         	// clear any previous marks
         	$(answerWidgets).parent().css({"border":"0px"});
         	// mark wrong answers
         	$(wrong).parent().css({"border":"3px solid red"});
         	if (wrong.length > 0)
         		alert("Please keep trying.");
         	else
         		alert("All correct!");
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