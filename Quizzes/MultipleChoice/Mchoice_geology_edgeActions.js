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
      //todo: onload, uncheck all boxes
      //todo: function to determine which boxes are checked
      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // initially uncheck all checkboxes
         var checkboxes = sym.getComposition().getSymbols("Checkbox");
         for (var i=0; i<checkboxes.length; i++) {
         	checkboxes[i].$("checkmark").css({opacity: 0, "z-index": -1});
         }
         // initially hide all feedback
         var feedbackBoxes = sym.$(".feedback");
         for (var i=0; i<feedbackBoxes.length; i++) {
         	$(feedbackBoxes[i]).css({"opacity":0});
         }
         
         yepnope ({
         	nope: [
         				'../../_code/common.css',
         				'../../_code/common.js',
         				'../../_code/Mchoice.js'
         	], complete: function() {init()}
          });

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // instructor editable section //
         	qTextSummary = "Identify granite out of 4 sample images";
         	logResponsesToDashboard = false;	// true if you want to use the Dashboard
         	quizpageNumber = 1;					// required if the above is true; must be unique across quiz-pages in this folder
         	nextPageUrl = "../MatchupLateral/MatchupLateral.html"; // either a relative url: "../folder/filename.html" or an absolute url: "https://www.dictionary.com"
         // end of editable section //
         // the above are intentionally global
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Feedback1Copy3}", "click", function(sym, e) {
         if (sym.$(e.target).css("opacity") > 0.1)  // if feedback is visible and the user clicked on it
         	window.open("http://en.wikipedia.org/wiki/Granite", "_self");

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Checkbox'
   (function(symbolName) {   
         

      Symbol.bindElementAction(compId, symbolName, "${_box_rounded}", "click", function(sym, e) {
         sym.$("checkmark").css({opacity: 1, "z-index": 1});
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_checkmark}", "click", function(sym, e) {
         sym.$("checkmark").css({opacity: 0, "z-index": -1});
         
         

      });
      //Edge binding end

      

   })("Checkbox");
   //Edge symbol end:'Checkbox'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'copyrightButton'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_RoundRect2}", "click", function(sym, e) {
         window.open("http://harvest.cals.ncsu.edu/biology", "_blank");

      });
      //Edge binding end

   })("copyrightButton");
   //Edge symbol end:'copyrightButton'

   //=========================================================
   
   //Edge symbol: 'CopyrightAndCredits'
   (function(symbolName) {   
   
   })("CopyrightAndCredits");
   //Edge symbol end:'CopyrightAndCredits'

   //=========================================================
   
   //Edge symbol: 'codeByButton'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_RoundRect}", "click", function(sym, e) {
         window.open("http://www.onetimesoftware.com", "_blank");

      });
      //Edge binding end

   })("codeByButton");
   //Edge symbol end:'codeByButton'

})(jQuery, AdobeEdge, "EDGE-276373753");