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
         				'../../../_code/common.css',
         				'../../../_code/common.js',
         				'../../../_code/Mchoice.js'
         	], complete: function() {init()}
          });

      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         

      });
      //Edge binding end
      
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${Feedback1}", "click", function(sym, e) {
         //if (sym.$(e.target).css("opacity") > 0.1)  // if feedback is visible and the user clicked on it
         //	window.open("http://en.wikipedia.org/wiki/Granite", "_self");
         

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Checkbox'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${box_rounded}", "click", function(sym, e) {
         sym.$("checkmark").css({opacity: 1, "z-index": 1});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${checkmark}", "click", function(sym, e) {
         sym.$("checkmark").css({opacity: 0, "z-index": -1});
         
         

      });
      //Edge binding end

   })("Checkbox");
   //Edge symbol end:'Checkbox'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-749678393");
