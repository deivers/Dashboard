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
      //todo: onload, uncheck all boxes
      //todo: function to determine which boxes are checked
      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // initially uncheck all checkboxes
         var checkboxes = sym.getComposition().getSymbols("Checkbox");
         for (var i=0; i<checkboxes.length; i++) {
         	checkboxes[i].uncheck();
         }
         // initially hide all the feedback
         var feedbackBoxes = sym.$(".feedback");
         for (var i=0; i<feedbackBoxes.length; i++) {
         	$(feedbackBoxes[i]).css({"opacity":0});
         }
         // initially hide the Next Page button
         sym.getComposition().getSymbols("NextPageButton")[0].getSymbolElement().css({"opacity":0});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_checkAnswers}", "click", function(sym, e) {
         sym.getComposition().getStage().checkAnswers();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var quizpageNumber = 1;
         var questionSummaryText = "Identify granite out of 4 sample images";
         var logResponsesToDashboard = true;
         var nextPageUrl = "../folder/filename.html";
         
         var checkboxes = sym.getComposition().getSymbols("Checkbox");
         // note: no guarantee on the order of the retrieved checkboxes, so sort by position
         checkboxes.sort(sortSymbolByPosition);
         var feedbackBoxes = sym.$(".feedback");
         feedbackBoxes.sort(sortElementByPosition);
         
         sym.checkAnswers = function() {
         	var questionType;
         	console.log("checking answers...");
         	var allCorrect = false;
         	var studentChoices = arrayOfCheckmarkedChoices();
         	// flags
         	var isQuizComplete = (studentChoices.length > 0);
         	// check answers
         	var cc = new Array();
         	for (var i=0; i<checkboxes.length; i++) {
         		if (checkboxes[i].getSymbolElement().css("opacity") < 1.0)
         			cc.push(i);
         	}
         	if (cc.length > 1)
         		questionType = "Multiple Select";
         	else
         		questionType = "Multiple Choice";
         	allCorrect = areArraysTheSame(studentChoices,cc);
         	// respond to student
         	if (!isQuizComplete)
         		alert("You must mark at least one checkbox before submitting.");
         	else {
         		logStudentResponses(quizpageNumber,studentChoices,questionType,cc);
         		if (allCorrect) {
         			alert("CORRECT!");
         			sym.getComposition().getSymbols("SubmitAnswersButton")[0].getSymbolElement().css({"opacity":0,"left":-1000});
         			sym.getComposition().getSymbols("NextPageButton")[0].getSymbolElement().css({"opacity":1});
         		} else {
         			alert("One or more of your selections are incorrect.  Please try again...");
         			for (var i=0; i<checkboxes.length; i++) {
         				checkboxes[i].uncheck();
         			}
         		}
         		// reveal feedback, if any
         		for (var i=0; i<studentChoices.length; i++) {
         			// for each checkbox checked, if there is a feedbackBox, then show it
         			if (studentChoices[i] < feedbackBoxes.length) // insure we don't exceed the array size
         				$(feedbackBoxes[studentChoices[i]]).animate({opacity: 1.0});
         		}
         	}
         }
         
         function arrayOfCheckmarkedChoices() {
         	// checkbox numbering starts at 0
         	var arrayOfChoices = new Array();
         	for (var i=0; i<checkboxes.length; i++) {
         		if (checkboxes[i].isChecked())
         			arrayOfChoices.push(i);
         	}
         	return arrayOfChoices;
         }
         
         function areArraysTheSame(a,b) {
         	var result = true;
         	a.forEach(function(elementInA) {
         		if (b.indexOf(elementInA) == -1) // not found
         			result = false;
         	});
         	return result;
         }
         
         function logStudentResponses(qNum, list, qType, k) {
         	if (typeof logResponsesToDashboard === 'undefined')
         		logResponsesToDashboard = false;
         	if (logResponsesToDashboard) {
         		// submit to server
         		if (typeof studentId === 'undefined' || studentId == "")
         			var studentId = prompt("Please enter your student ID","")
         		// todo: verify that we got a valid id above
         		if (typeof qNum === 'undefined') {
         			qNum = 0;
         			console.log("Warning: quizpageNumber not found; defaulting to 0");
         		}
         		if (typeof questionTextSummary === 'undefined')
         			var questionTextSummary = "Question text summary isn't defined";
         		var request = $.ajax({
         			type: 'POST',
         			url: 'LogResponse.php',
         			data: {	si : studentId,		//todo: get student id from env var
         					qn : qNum,
         					qt : qType,
         					qs : questionTextSummary,
         					sa : list,
         					ak : k
         			},
         			dataType: 'json'
         		});
         		request.done(function(msg) {
         			console.log("Submission successful");
         		});
         		request.fail(function(jqXHR, textStatus) {
         			console.log("The submission failed: "+textStatus);
         		});
         	}
         }
         
         sym.goNextPage = function() {
         	console.log(">>>"+nextPageUrl);
         	window.open(nextPageUrl, "_blank");
         }
         
         // sort by position (works whether the elements are in columns or rows)
         function sortSymbolByPosition(a, b) {
         	var aOffset = a.getSymbolElement().offset();
         	var bOffset = b.getSymbolElement().offset();
            return aOffset.top + aOffset.left - bOffset.top - bOffset.left;
         }
         
         // sort by position (works whether the elements are in columns or rows)
         function sortElementByPosition(a, b) {
         	var aOffset = $(a).offset();
         	var bOffset = $(b).offset();
            return aOffset.top + aOffset.left - bOffset.top - bOffset.left;
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Feedback1Copy3}", "click", function(sym, e) {
         if (sym.$(e.target).css("opacity") > 0.1)  // if feedback is visible and the user clicked on it
         	window.open("http://en.wikipedia.org/wiki/Granite", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_NextPageButton}", "click", function(sym, e) {
         sym.getComposition().getStage().goNextPage();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Checkbox'
   (function(symbolName) {   
         

      Symbol.bindElementAction(compId, symbolName, "${_box_rounded}", "click", function(sym, e) {
         sym.$("checkmark").css({opacity: 1, "z-index": 1});
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_checkmark}", "click", function(sym, e) {
         sym.$("checkmark").css({opacity: 0, "z-index": -1});
         
         

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.uncheck = function() {
         	sym.$("checkmark").css({opacity: 0, "z-index": -1});
         }
         
         sym.isChecked = function() {
         	return (sym.$("checkmark").css("opacity") == 1);
         }

      });
      //Edge binding end

   })("Checkbox");
   //Edge symbol end:'Checkbox'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'checkAnswers'
   (function(symbolName) {   
   
      

   })("SubmitAnswersButton");
   //Edge symbol end:'SubmitAnswersButton'

   //=========================================================

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'copyrightButton'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_RoundRect2}", "click", function(sym, e) {
         window.open("http://harvest.cals.ncsu.edu/biology", "_blank");

      });
      //Edge binding end

   })("copyrightButton");
   //Edge symbol end:'copyrightButton'

   //=========================================================
   
   //Edge symbol: 'CopyrightAndCredits'
   (function(symbolName) {   
   
   })("CopyrightAndCredits");
   //Edge symbol end:'CopyrightAndCredits'

   //=========================================================
   
   //Edge symbol: 'codeByButton'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_RoundRect}", "click", function(sym, e) {
         window.open("http://www.onetimesoftware.com", "_blank");

      });
      //Edge binding end

   })("codeByButton");
   //Edge symbol end:'codeByButton'
   
   //Edge symbol: 'SubmitAnswersButton_1'
   (function(symbolName) {   
         

      })("NextPageButton");
   //Edge symbol end:'NextPageButton'

})(jQuery, AdobeEdge, "EDGE-276373753");