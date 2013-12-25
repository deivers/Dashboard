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
         				'../../_code/jquery.fancybox.css',
         				'../../_code/jquery.fancybox.pack.js',
         				'../../_code/Hotspots.js',
         
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

      Symbol.bindElementAction(compId, symbolName, "${_HotspotEllipse}", "click", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_HotspotEllipse}", "mousedown", function(sym, e) {
         console.log("Mousedown on this particular hotspot");
         hotspotUrlToOpen = "http://en.wikipedia.org/Mexico";
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Hotspot'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Ellipse}", "click", function(sym, e) {
         console.log("Click handler in hotspot symbol");
         hotspotClick(e.target, hotspotUrlToOpen);
         // when the user returns from the modal fancybox, we want the checkmark to be visible
         sym.$("checkmark_outlined2").delay(2000).animate({"opacity": "inherit", "z-index": 3});
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_checkmark_outlined2}", "click", function(sym, e) {
         sym.$("Ellipse").click();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getSymbolElement().css({opacity: 0}); // initially hide self
         sym.$("checkmark_outlined2").css({"opacity": 0, "z-index": -1});  // initially hide the checkmark
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ellipse}", "mouseover", function(sym, e) {
         hotspotOver(e.target);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Ellipse}", "mouseout", function(sym, e) {
         hotspotOut(e.target);

      });
      //Edge binding end

   })("HotspotEllipse");
   //Edge symbol end:'HotspotEllipse'

})(jQuery, AdobeEdge, "EDGE-465432216");