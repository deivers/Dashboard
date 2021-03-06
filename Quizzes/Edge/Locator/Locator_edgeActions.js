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

      Symbol.bindElementAction(compId, symbolName, "${B1}", "click", function(sym, e) {
         answerButtonClicked(e.target);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${B1}", "mouseover", function(sym, e) {
         answerButtonOver(e.target);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${B1}", "mouseout", function(sym, e) {
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

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${left}", "click", function(sym, e) {
         answerButtonClicked(e.target);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${left}", "mouseover", function(sym, e) {
         answerButtonOver(e.target);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${left}", "mouseout", function(sym, e) {
         answerButtonOut(e.target);

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${B2}", "click", function(sym, e) {
         answerButtonClicked(e.target);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${B2}", "mouseover", function(sym, e) {
         answerButtonOver(e.target);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${B2}", "mouseout", function(sym, e) {
         answerButtonOut(e.target);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${right}", "click", function(sym, e) {
         answerButtonClicked(e.target);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${right}", "mouseover", function(sym, e) {
         answerButtonOver(e.target);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${right}", "mouseout", function(sym, e) {
         answerButtonOut(e.target);

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-152311472");