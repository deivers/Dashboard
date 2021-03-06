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
         		'../../../_code/common.css',
         		"../../../_code/dragDrop.css",
         		"../../../_code/common.js",
         		"../../../_code/EdgeMatchup.js"
         	], complete: function() {init()}
         });

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
         // end if editable section //
         
         // note: the above variables are intentionally global

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-86546566");
