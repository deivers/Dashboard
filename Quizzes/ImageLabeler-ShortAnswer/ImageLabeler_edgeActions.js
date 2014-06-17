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
         // make sure the text boxes aren't visible while page loads
         sym.$(".textSource").css({"opacity": 0});
      
         // load external files
         yepnope({
         	load: [
         		'../../_code/common.css',
         		"../../_code/ImagePopups.css",
         		"../../_code/common.js",
         		"../../_code/ImageLabeler.js"
         	], complete: function() {init()}
         });
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // instructor editable section //
         	imageLabelerType = "menus";      // "menus" or "shortAnswer"
         	showWrongAnswers = true;			// false increases difficulty
         	nextPageUrl = "../folder/filename.html"; // either a relative url: "../folder/filename.html" or an absolute url: "https://www.dictionary.com"
         // stop here if you are not using the Dashboard feature
         	logResponsesToDashboard = false;	// true if you want to use the Dashboard
         	quizpageNumber = 1;					// required if the above is true; must be unique across quiz-pages in this folder
         	qTextSummary = "";					// short description of what is in this quiz for the purpose of the dashboard
         // end of editable section //
         // Note: the above parameters are intentionally global
         
         // If you add any answer boxes or decoy boxes to the stage, set the Class of each to "textSource"
         // and make the width of all boxes wide enough to show the longest answer

      });
      //Edge binding end
      
      
      
      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

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

})(jQuery, AdobeEdge, "EDGE-749678393");
