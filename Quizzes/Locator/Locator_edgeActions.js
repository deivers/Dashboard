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
         console.log("Click handler in compositionReady");
         
         console.log($(".answer-button").length)////
         
         var thresholdOpacity = 0.7;
         
         sym.answerButtonClicked = function(which) {
         	// toggle-off all the answer buttons
         	$(".answer-button").css({"opacity": 0});
         	// toggle-on the clicked answer button
         	$(which).css({"opacity": 0.8});
         
         }
         
         sym.answerButtonOver = function(which) {
         	console.log("answerButtonOver")////
         	if ($(which).css("opacity") == 0)
         		$(which).css({"opacity": 0.6});
         }
         
         sym.answerButtonOut = function(which) {
         	console.log("answerButtonOut")////
         	if ($(which).css("opacity") < 0.7)
         		$(which).css({"opacity": 0});
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect}", "click", function(sym, e) {
         sym.answerButtonClicked(e.target);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect}", "mouseover", function(sym, e) {
         sym.answerButtonOver(e.target);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect}", "mouseout", function(sym, e) {
         sym.answerButtonOut(e.target);

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // set all answer buttons to 0 opacity before displaying anything
         $(".answer-button").css({"opacity": 0});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRectCopy}", "click", function(sym, e) {
         sym.answerButtonClicked(e.target);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRectCopy}", "mouseover", function(sym, e) {
         sym.answerButtonOver(e.target);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRectCopy}", "mouseout", function(sym, e) {
         sym.answerButtonOut(e.target);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRectCopy2}", "click", function(sym, e) {
         sym.answerButtonClicked(e.target);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRectCopy2}", "mouseover", function(sym, e) {
         sym.answerButtonOver(e.target);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRectCopy2}", "mouseout", function(sym, e) {
         sym.answerButtonOut(e.target);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-152311472");