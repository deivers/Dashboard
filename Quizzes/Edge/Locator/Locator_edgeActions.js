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
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         console.log($(".answer-button").length)////
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect}", "click", function(sym, e) {
         answerButtonClicked(e.target);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect}", "mouseover", function(sym, e) {
         answerButtonOver(e.target);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect}", "mouseout", function(sym, e) {
         answerButtonOut(e.target);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // set all answer buttons to 0 opacity before displaying anything
         $(".answer-button").css({"opacity": 0});
         $(".submit").css({"opacity": 0});
         
         yepnope ({
         	nope: [
         				'../../../_code/common.css',
         				'../../../_code/common.js',
         				'../../../_code/Locator.js',
         				'../../../_code/jquery.color-2.1.2.min.js'
         	],
         	complete: function() {
         		init()
         	}
          });
         // see in the library scripts:  https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
         // alternate:  https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${RoundRectCopy2}", "click", function(sym, e) {
         answerButtonClicked(e.target);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRectCopy2}", "mouseover", function(sym, e) {
         answerButtonOver(e.target);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRectCopy2}", "mouseout", function(sym, e) {
         answerButtonOut(e.target);

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${RoundRectCopy4}", "click", function(sym, e) {
         answerButtonClicked(e.target);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRectCopy4}", "mouseover", function(sym, e) {
         answerButtonOver(e.target);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRectCopy4}", "mouseout", function(sym, e) {
         answerButtonOut(e.target);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRectCopy5}", "click", function(sym, e) {
         answerButtonClicked(e.target);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRectCopy5}", "mouseover", function(sym, e) {
         answerButtonOver(e.target);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRectCopy5}", "mouseout", function(sym, e) {
         answerButtonOut(e.target);

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'resetButton'
   (function(symbolName) {   
   
   })("resetButton");
   //Edge symbol end:'resetButton'

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
   
   //Edge symbol: 'codeByButton'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${RoundRect}", "click", function(sym, e) {
         window.open("http://www.onetimesoftware.com", "_blank");

      });
      //Edge binding end

   })("codeByButton");
   //Edge symbol end:'codeByButton'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-152311472");