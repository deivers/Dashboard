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
         // insert code for mouse click here
         
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'Hotspot'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Ellipse}", "click", function(sym, e) {
         hotspotClick(e.target);
         
         sym.$("checkmark_outlined2").css({"opacity": "inherit", "z-index": 3});
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_checkmark_outlined2}", "click", function(sym, e) {
         sym.$("Ellipse").click();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.getSymbolElement().css({opacity: 0});
         sym.$("checkmark_outlined2").css({"opacity": 0, "z-index": -1});
         

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