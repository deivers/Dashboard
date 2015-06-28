function showMetaInfo(versionString) {
	var copyrightText = "Copyright 2014";
	var createdByText = "";
	var versionText = "Version "+versionString+".";
	var centerNode = $("<div style='text-align: center; margin-top: 20px'></div>");
	centerNode.append($("<span></span>").text(copyrightText+" "+createdByText+" "));
	centerNode.append($("<a href='http://www.onetimesoftware.com' target='_blank'></a>").text("One Time Software"));
	centerNode.append($("<span></span>").text(". "+versionText));
	centerNode.append("<br>");
	centerNode.append($("<span></span>").text("Free for academic use when displaying this notice."));
	centerNode.css({
		color: "gray",
		"font-size": "x-small"
	});
	return centerNode;
}

function loadStageParam(paramName,type) {
	var rawString = $("#Stage_"+paramName).html();
	if (type == "boolean")
		return (exists(rawString) && rawString.substring(0,1) == "t");
	if (!exists(rawString))
		return "";
	rawString = rawString.specialTrim();
	if (type == "int")
		return parseInt(rawString);
	if (type == "float")
		return parseFloat(rawString);
	if (type == "array") {
		var arr = rawString.split(",");
		return (arr.length > 1) ? arr : rawString.split(" ");
	}
	return rawString.specialTrim();
}

function logSubmission(vNum,qType,qSummary,aSummary,saArray,akArray) {
	console.log("Logging...");
	// if (typeof studentId === 'undefined' || studentId.length == 0) {
	// 	if (typeof Storage !== 'undefined') {
	// 		studentId = sessionStorage.dashboardStudentId;
	// 	}
	// 	if (typeof studentId === 'undefined' || studentId.length == 0) {
	// 		// todo: get id from the environment variable
	// 		studentId = prompt("Please enter your student ID","");			// intentionally global
	// 		// todo: verify that we got a unique valid id above, or create one from the ip address?
	// 		if (typeof Storage !== 'undefined' && typeof studentId !== 'undefined' && studentId.length > 0)
	// 			sessionStorage.dashboardStudentId = studentId;
	// 		else {
	// 			alert("You must provide a valid student ID in order to get credit for completing the quiz.");
	// 			return false;
	// 		}
	// 	}
	// }

	// validate incoming parameters
	if (typeof vNum === 'undefined') {
		vNum = 0;
		console.log("Warning: data version number not found; defaulting to 0");
	}
	if (typeof qSummary === 'undefined')
		qSummary = "question summary not defined";
	// submit to server
	var request = $.ajax({
		type: 'POST',
		url: 'LogResponse.php',  // in the original directory
		data: {	si : "", ///studentId,
				qn : vNum,
				qt : qType,
				qs : qSummary,
				ad : aSummary,
				sa : saArray,
				ak : akArray
		},
		dataType: 'json'
	});
	//if (jQuery.isFunction(jQuery.Deferred)) {
	//	request.done(function(msg) {
	//		console.log("Submission successful");
	//	});
	//	request.fail(function(jqXHR, textStatus) {
	//		console.log("The submission failed: "+textStatus);
	//	});
	//}
	return true;
}

function encode(string) {
	var result, chr, encChr;
	result = "?" + String.fromCharCode(127);
	for (var i=0; i<string.length; i++) {
		chr = string.charCodeAt(i);
		result += String.fromCharCode( (chr < 34) ? chr : chr + 1 + i%2);
	}
	return result;
}
function unencode(string) {
	var result = "", chr, unencChar;
	for (var i=2; i<string.length; i++) {
		chr = string.charCodeAt(i);
		result += String.fromCharCode((chr < 34) ? chr : chr - 1 - i%2);
	}
	return result;
}
function isEncoded(string) {
	return (string.charCodeAt(0) == 63 && string.charCodeAt(1) == 127);
}

// the following methods are for AEA projects //

function setUpSubmitButton(option) {
	$(".submit").css("opacity", (option == 'hide' ? 0 : 1));
	var myWidth = $(".submit").outerWidth();
	$(".submit").click(function() {checkAnswers()})
		.css("left", Math.max(0, (($("#Stage").width() - myWidth)/2)) + "px"); // center it
	var resetBtn = $(".reset");
	if (exists(resetBtn)) {
		myWidth = $(resetBtn).outerWidth();
		resetBtn.css("left", Math.max(0, (($("#Stage").width() - myWidth)/2)) + "px"); // center it
	}
}
function setUpNextButton() {
	// convert Submit button into NextPage/EndOfQuiz button
	$(".submit").css("opacity",1); 
	$(".submit").unbind().click(function() {
		goNextPage();
	});
	if (typeof nextPageUrl !== 'undefined' && nextPageUrl != "") {
		$(".submit").html("Next page").removeClass("blue").addClass("green");
		$(".submit").css("width","6em");
	} else {
		$(".submit").html("End of Quiz").removeClass("button blue green");
		$(".submit").css("width","9em");
	}
	var newWidth = $(".submit").outerWidth();
	$(".submit").css("left", Math.max(0, (($("#Stage").width() - newWidth)/2)) + "px"); // center it
}

function goNextPage() {
	//console.log(">>> "+nextPageUrl);
	if (typeof nextPageUrl !== 'undefined' && nextPageUrl != "")
		window.open(nextPageUrl, "_self");
}

// specific utility functions //

String.prototype.specialTrim = function() {
	// for retrieving user params, normally located on stage but off canvas
	// ignore characters starting with the first <
	var cutHere = this.indexOf("<");
	if (cutHere > 0)
		return this.substring(0,cutHere);
	else
		return this.substring(0);
}

// general utility functions //

function shuffleArray(array) {
	// Randomize order in-place using Fisher-Yates shuffle algorithm
	// if the loop results in the same array, then reverse the order
	if (array.length < 3)
		return array.reverse();
	var originalArrayToString = array.toString();
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return (array.toString() == originalArrayToString) ? array.reverse() : array;
}

//jQuery.fn.
function shuffleDivs(selectorForContainingElement,selectorOfElementsToBeShuffled) {
	var list = $(selectorOfElementsToBeShuffled);
	$(selectorForContainingElement).append(list[0]);
	for (var i=0; i<list.length/2+1; i++)
		$(selectorForContainingElement).append(list[Math.floor(Math.random()*(list.length-1))]);  // -1 because there's no sense in appending the last element to the elements
	if (jQuerySame(list,$(selectorOfElementsToBeShuffled)))		// then the order is unchanged
		$(selectorForContainingElement).append($(selectorOfElementsToBeShuffled).get().reverse());	// reverse the order
}

// comparator fn to sort by position (works whether the elements are in columns or rows)
// example usage: $(".checkbox").sort(sortElementByPosition)
function sortElementByPosition(a, b) {
	// assume a and b are jQuery objects or selectors
	var aOffset = $(a).offset();
	var bOffset = $(b).offset();
   return aOffset.top + aOffset.left - bOffset.top - bOffset.left;
}

function areArraysTheSame(a,b) {
	// supposedly this would work:  return a == b;
	if (a.length != b.length)
		return false;
	// order insensitive
	var result = true;
	a.forEach(function(elementInA) {
		if (b.indexOf(elementInA) == -1) // not found
			result = false;
	});
	return result;
}

//jQuery.fn.sameAs(b) {
function jQuerySame(a, b) {
	// returns false if same elements but different order
	if (a.length != b.length)
		return false;
	for (var i = 0; i < a.length; i++) {
		if (a.get(i) != b.get(i))
			return false;
	}
	return true;
}

// generates arrays populated with numbers
function arrayFactory(numberOfElements,multiplier,offset) {
	var array = new Array(numberOfElements);
	for (var i=0; i<numberOfElements; i++)
		array[i] = i * multiplier + offset;
	return array;
}

function convertToIndexes(arrayWithUnknownOrder,referenceArray) {
	var resultArray = new Array(arrayWithUnknownOrder.length);
	for (var i=0; i<arrayWithUnknownOrder.length; i++) {
		resultArray[i] = -1;  // in case no match is found
		for (var j=0; j<referenceArray.length; j++) {
			if (arrayWithUnknownOrder[i] == referenceArray[j]) {
				resultArray[i] = j;
				break;
			}
		}
	}
	return resultArray;
}

// function replaceAwithBinC(a,b,c) {
// 	// replace all occurences of a with b in c
// 	return c.replace(RegExp(a,"gm"),b);  // "g" for global replace, "m" for multi-line
// }
//TODO phase out the above in favor of the following?
String.prototype.replaceAwithB = function(a,b) {
	return this.replace(RegExp(a,"gm"),b);  // "g" for global replace, "m" for multi-line
}

String.prototype.contains = function(subString) {
	return this.indexOf(subString) != -1;
}

Array.prototype.contains = function(that) {
	return this.some(function(el){
		return el == that;
	});
}

function exists(x) {
	return (typeof x !== "undefined" && x != null);
}

jQuery.fn.exists = function(){
	return jQuery(this).length>0;
}

function isArray(a) {
	return (exists(a) && typeof a === "object" && exists(a.length));
}

jQuery.fn.htmlList = function() {
	var htmls = [];
	jQuery(this).each(function(){
		htmls.push(this.textContent);
	});
	return htmls;
}

jQuery.fn.edgeElementNames = function() {
	// this.map(...) didn't work, so going old school here
	var arr = [];
	for (var i=0; i<this.length; i++) {
		arr.push(jQuery(this[i]).edgeElementName());
	}
	return arr;
}
jQuery.fn.edgeElementName = function() {
	return jQuery(this).attr('id').substr(6); // strip off the Stage_ prefix that Edge adds
}

function debug(x) {
	if (typeof x === "object") { // an object but not an array
		console.log(JSON.stringify(x));
	} else
		console.log(x);
}

// see also: utility.js
