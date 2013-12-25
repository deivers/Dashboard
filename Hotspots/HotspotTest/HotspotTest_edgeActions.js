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
         console.log("creation complete");
         
         yepnope ({
         	nope: [
                   'Hotspots.js',
         
          	], complete: init
          });
         
          function init() {
          	console.log("init function");
          }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         console.log("composition ready");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Hotspot'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Ellipse}", "click", function(sym, e) {
         hotspotOver(e.target);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_checkmark_outlined2}", "click", function(sym, e) {
         sym.$("Ellipse").click();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ellipse}", "mouseover", function(sym, e) {
         hotspotOver(e.target);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ellipse}", "mouseout", function(sym, e) {
         // if mouse location is within the bounds of the hotspot, then ignore it
         // this happens when the mouse crosses into an interior element, in this case the checkmark
         var elementLeft = sym.getSymbolElement().offset().left;
         var elementRight = sym.getSymbolElement().offset().left + sym.getSymbolElement().width();
         var elementTop = sym.getSymbolElement().offset().top;
         var elementBottom = sym.getSymbolElement().offset().top + sym.getSymbolElement().height();
         if (elementLeft < e.pageX && e.pageX < elementRight && elementTop < e.pageY && e.pageY < elementBottom)
         	return;
         hotspotOut(e.target);

      });
      //Edge binding end

   })("HotspotEllipse");
   //Edge symbol end:'HotspotEllipse'

})(jQuery, AdobeEdge, "EDGE-465432216");