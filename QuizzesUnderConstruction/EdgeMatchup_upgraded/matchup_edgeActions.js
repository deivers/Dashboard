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
         // load external files
         yepnope({
         	load: [
         		'../../_code/common.css',
         		"DragDrop.css",
         		"../../_code/common.js",
         		"../../_code/EdgeMatchup.js"
         	], complete: function() {init()}
         });

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${resetButton3}", "click", function(sym, e) {
///console.log("reset button");
window.location.reload();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // Guidelines //
         //   - make sure the drag elements are listed in sequential order in the Elements panel
         //   - it's ok to have more drag elements than drop zones, but not vise versa
         //   - name the hints on the left: "qHint1", "qHint2", etc. corresponding to each zone
         //   - name the hints on the right: "dragHint1", "dragHint2", etc. corresponding to each draggable
         //   - hints are optional - just delete the text if you don't want to use a hint
         	targetList = ["zone1","zone2"];			// must be in sequential order
         	answerList = ["drag2","drag1"];			// answer key - order these to match the correct zone
         												// list all the drags even if you have more drags than zones
         	rejectWrongAnswers = true;		// false increases difficulty
         	requireCompletion = true;			// true increases difficulty
         	introAnimation = true;				// helps convey to user that drag elements are in fact draggable
         	nextPageUrl = "../ImageLabeler-shortanswer/ImageLabeler.html"; // either a relative url: "../folder/filename.html" or an absolute url: "https://www.dictionary.com"
         	logResponsesToDashboard = true;
         	quizpageNumber = 1;
         	qTextSummary = "short description of what is in this quiz"
         // end if editable section //
         
         // note: the above variables are intentionally global

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'checkAnswers'
   (function(symbolName) {   
   
      

   })("checkAnswers");
   //Edge symbol end:'checkAnswers'

   //=========================================================
   
   //Edge symbol: 'resetButton'
   (function(symbolName) {   
   
      

   })("resetButton");
   //Edge symbol end:'resetButton'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'copyrightButton'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${RoundRect2}", "click", function(sym, e) {
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
   
      Symbol.bindElementAction(compId, symbolName, "${RoundRect}", "click", function(sym, e) {
         window.open("http://www.onetimesoftware.com", "_blank");

      });
      //Edge binding end

   })("codeByButton");
   //Edge symbol end:'codeByButton'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-86546566");
