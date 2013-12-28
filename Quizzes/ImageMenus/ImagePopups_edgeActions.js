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
         // make sure the text boxes aren't visible while page loads
         sym.$(".textSource").css({"opacity": 0});
         
         // load external files
         yepnope({
         	load: [
         		'../../_code/common.css',
         		"../../_code/ImagePopups.css",
         		"../../_code/common.js",
         		"../../_code/ImageLabeler.js"
         	]
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // instructor editable section //
         	questionType = "Image Labeler with Popup Menus";
         	qTextSummary = "";		// short description of what is in this quiz"
         	showWrongAnswers = true;		// false increases difficulty
         	logResponsesToDashboard = true;	// true if you want to use the Dashboard
         	quizpageNumber = 1;					// required if the above is true; must be unique across quiz-pages in this folder
         	nextPageUrl = "../folder/filename.html";
         // end of editable section //
         // the above are intentionally global
         
         console.log("composition ready");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_SubmitAnswersButton}", "click", function(sym, e) {
         checkStudentAnswers();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_NextPageButton}", "click", function(sym, e) {
         goNextPage();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'checkAnswers'
   (function(symbolName) {   
   
      

   })("SubmitAnswersButton");
   //Edge symbol end:'SubmitAnswersButton'

   //=========================================================
   
   //Edge symbol: 'SubmitAnswersButton_1'
   (function(symbolName) {   
         

      })("NextPageButton");
   //Edge symbol end:'NextPageButton'

})(jQuery, AdobeEdge, "EDGE-749678393");
