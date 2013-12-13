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
         var head = document.getElementsByTagName('head')[0];
         // the following lines create: <link href="DragDrop.css" rel="stylesheet" type="text/css">
         var styleSheet = document.createElement('link');
         styleSheet.type = 'text/css';
         styleSheet.rel = 'stylesheet';
         styleSheet.href = 'DragDrop.css';
         head.appendChild(styleSheet);
         // the following lines create: <script src='jquery-ui-touch-combo.js'></script>
         var script = document.createElement('script');
         script.src = 'jquery-ui-touch-combo.js';
         script.onload = function() {
         
         	// Guidelines //
         	//   - make sure the drag elements are listed in sequential order in the Elements panel
         	//   - it's ok to have more drag elements than drop zones, but not vise versa
         	//   - name the hints on the left: "qHint1", "qHint2", etc. corresponding to each zone
         	//   - name the hints on the right: "dragHint1", "dragHint2", etc. corresponding to each draggable
         	//   - hints are optional - just delete the text if you don't want to use a hint
         	var targetList = ["zone1","zone2"];			// must be in sequential order
         	var answerList = ["drag2","drag1"];			// answer key - order these to match the correct zone
         													// list all the drags even if you have more drags than zones
         	var rejectWrongAnswers = true;		// false increases difficulty
         	var requireCompletion = true;			// true increases difficulty
         	var introAnimation = true;				// helps convey to user that drag elements are in fact draggable
         	var logResponsesToDashboard = true;
         	var questionNumber = 1;
         	var questionTextSummary = "short description of what is in this quiz"
         	// end if editable section //
         
         	var myLeft, myTop;
         	dragElements = sym.$('.dragTab');
         	///console.log(dragElements.length);
         	for (var i=0; i<dragElements.length; i++) {
         		dragElement = sym.$(dragElements[i]);
         		myLeft = dragElement.position().left;
         		myTop = dragElement.position().top;
         		///console.log("myLeft:"+myLeft+"  myTop:"+myTop);///
         		dragElement.data('originalLeft',myLeft);
         		dragElement.data('originalTop',myTop);
         		dragElement.draggable({
         			start: function( event, ui ) {
         				$(this).addClass('dragging');
         			},
         			stop: function( event, ui ) {
         				$(this).removeClass('dragging');
         			}
         		});
         		if (introAnimation) {
         			// prep for intro
         			dragElement.addClass('dragging');
         			dragElement.css({"left": dragElement.data('originalLeft')+700, "opacity":1});
         			dragElement.children().css({"opacity":1});
         			// intro
         			dragElement.animate(
         				{	left: dragElement.data('originalLeft'),
         					opacity: 1.0
         				},
         				{	duration: 300*(dragElements.length-i) + 500,
         					easing: 'easeOutCubic',
         					complete: function() { // the callback to get back to normal
         						$(this).removeClass('dragging');
         					}
         				}
         			);
         		} else {
         			dragElement.css({"opacity":1});
         			dragElement.children().css({"opacity":1});
         		}
         	}
         
         	for (var j=0; j<targetList.length; j++) {
         		///console.log(sym.$(targetList[j]));
         		sym.$(targetList[j]).droppable({
         			accept: '.dragTab',
         			hoverClass: 'dropHover',
         			drop: function( event, ui ) {
         				ui.draggable.position({
         					my: 'center',
         					at: 'center',
         					of: this
         				});
         			}
         		});
         	}
         
         	sym.checkAnswers = function() {
         		///console.log("checkAnswers function");
         		// variables
         		var allCorrect = true;
         		// flags
         		var rejectOption = (typeof rejectWrongAnswers === 'undefined' || rejectWrongAnswers);
         		var requireOption = (typeof requireCompletion === 'undefined' || requireCompletion);
         		var isQuizComplete = isComplete();
         		// check answers
         		for (var i=0; i<Math.min(targetList.length, answerList.length); i++) {
         			if (!isWithin(answerList[i],targetList[i])) {
         				allCorrect = false;
         				if (rejectOption && (requireOption && isQuizComplete)) {
         					sym.$(answerList[i]).animate({
         						"left": sym.$(answerList[i]).data('originalLeft'),
         						"top": sym.$(answerList[i]).data('originalTop')
         					},{
         						duration: 400,
         						easing: 'easeInOutCubic'
         					});
         					if (!(typeof sym.$("qHint"+(i+1)) === 'undefined'))
         						sym.$("qHint"+(i+1)).css({"opacity":"1"});		// reveal hint if it exists and if zone was wrong
         					if (!(typeof sym.$("dragHint"+(i+1)) === 'undefined'))
         						sym.$("dragHint"+(i+1)).css({"opacity":"1"});		// reveal hint if it exists and if draggable was wrong
         				}
         			} else { // hide the hint when the answer is correct
         				if (!(typeof sym.$("qHint"+(i+1)) === 'undefined'))
         					sym.$("qHint"+(i+1)).css({"opacity":"0"});		// hide hint if it exists
         				if (!(typeof sym.$("dragHint"+(i+1)) === 'undefined'))
         					sym.$("dragHint"+(i+1)).css({"opacity":"0"});		// hide hint if it exists
         			}
         		}
         		// if more answers than targets...
         		for (var j=targetList.length; j<answerList.length; j++)
         			if (rejectOption && (requireOption && isQuizComplete))
         				sym.$(answerList[i]).animate({
         					"left": sym.$(answerList[i]).data('originalLeft'),
         					"top": sym.$(answerList[i]).data('originalTop')
         				},{
         				duration: 400,
         				easing: 'easeInOutCubic'
         				});
         		// respond to student
         		if (requireOption && !isQuizComplete)
         			alert("You must complete the quiz before answers will be checked.");
         		else if (allCorrect)
         			alert("CORRECT!");
         		else if (rejectOption)
         			setTimeout(function() {alert("Keep trying...");}, 500);///alert("Please keep trying...");	// caution: this tends to disrupt the animation
         		else
         			alert("One or more of your answers are incorrect.  Please try again...");
         	}
         
         	function isComplete() {
         		var nAnswered = 0;
         		for (var i=0; i<answerList.length; i++)
         			if (isAnswered(answerList[i]))
         				nAnswered++;
         		return (nAnswered == targetList.length);
         	}
         
         	function isAnswered(a) {
         		// assume targets are aligned in a column
         		var buffer = 4;
         		var targetCenterX = sym.$(targetList[0]).offset().left + sym.$(targetList[0]).width()/2;	// it would be more efficient to pull this out of the loop
         		var answerCenterX = sym.$(a).offset().left + sym.$(a).width()/2;
         		return (targetCenterX-buffer < answerCenterX && answerCenterX < targetCenterX+buffer);
         	}
         
         	function isWithin(a, b) {
         		// compare centers
         		var buffer = 10;
         		var aCenterH = sym.$(a).offset().left + sym.$(a).width()/2;
         		var aCenterV = sym.$(a).offset().top + sym.$(a).height()/2;
         		var bCenterH = sym.$(b).offset().left + sym.$(b).width()/2;
         		var bCenterV = sym.$(b).offset().top + sym.$(b).height()/2;
         		return (aCenterH-buffer < bCenterH && bCenterH < aCenterH+buffer && aCenterV-buffer < bCenterV && bCenterV < aCenterV+buffer);
         	}
         
         	function logStudentResponses(list) {
         		if (typeof logResponsesToDashboard === 'undefined')
         			logResponsesToDashboard = false;
         		if (logResponsesToDashboard) {
         			// submit to server
         			if (typeof studentId === 'undefined' || studentId == "")
         				var studentId = prompt("Please enter your student ID","")
         			// todo: verify that we got a valid id above
         			if (typeof questionNumber === 'undefined')
         				var questionNumber = 0;
         			var questionType;
         			//if (shuffleWhich == "draggables")
         			//	questionType = "Edge Matchup with the answers shuffled";
         			//else
         			//	questionType = "Edge Matchup with the questions shuffled";
         			questionType = "Edge Matchup";
         			if (typeof questionTextSummary === 'undefined')
         				var questionTextSummary = "Question text summary isn't defined";
         			var request = $.ajax({
         				type: 'POST',
         				url: 'LogResponse.php',
         				data: {	si : studentId,		//todo: get student id from env var
         						qn : questionNumber,
         						qt : questionType,
         						qs : questionTextSummary,
         						sa : list
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
         }
         head.appendChild(script);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_checkAnswersButton}", "click", function(sym, e) {
         ///console.log("check answers button clicked");
         sym.getComposition().getStage().checkAnswers();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_resetButton3}", "click", function(sym, e) {
///console.log("reset button");
window.location.reload();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'checkAnswers'
   (function(symbolName) {   
   
      

   })("checkAnswers");
   //Edge symbol end:'checkAnswers'

   //=========================================================
   
   //Edge symbol: 'resetButton'
   (function(symbolName) {   
   
      

   })("resetButton");
   //Edge symbol end:'resetButton'

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

})(jQuery, AdobeEdge, "EDGE-86546566");