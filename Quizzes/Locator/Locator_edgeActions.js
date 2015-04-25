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
         
         
         yepnope ({
         	nope: [
         				'../../_code/common.css',
         				'../../_code/common.js',
         				'../../_code/Locator.js'
         	],
         	complete: function() {
         		init()
         	}
          });
         // see in the library scripts:  https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js
         // alternate:  https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRectCopy}", "click", function(sym, e) {
         answerButtonClicked(e.target);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRectCopy}", "mouseover", function(sym, e) {
         answerButtonOver(e.target);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRectCopy}", "mouseout", function(sym, e) {
         answerButtonOut(e.target);

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

      Symbol.bindElementAction(compId, symbolName, "${RoundRectCopy3}", "click", function(sym, e) {
         answerButtonClicked(e.target);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRectCopy3}", "mouseover", function(sym, e) {
         answerButtonOver(e.target);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRectCopy3}", "mouseout", function(sym, e) {
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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-152311472");