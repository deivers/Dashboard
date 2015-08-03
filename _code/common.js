// code used by any/all dashboard questions

function loadStageParam(paramName,type,default) {
	var paramString = $("#Stage_"+paramName).readInputString();
	var result;
	if (type == "boolean")
		result = (exists(paramString) && paramString.substring(0,1) == "t");
	if (type == "int")
		result = parseInt(paramString);
	if (type == "float")
		result = parseFloat(paramString);
	if (type == "array") {
		var arr = paramString.stripSpaces().split(",");
		result = (arr.length > 1) ? arr : paramString.split(" ");
	}
	if (!exists(result))
		return paramString; // return a string if no type was specified
	if (isNaN(result) && exists(default))
		return default;
	return result;
}

function logSubmission(vNum,qType,qSummary,aSummary,saArray,akArray,pointsArray) {
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
				ak : akArray,
				pt : pointsArray
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
	var submitBtn = $(".submit");
	if (!exists(submitBtn))
		return;
	if (option === 'hide')
		$(submitBtn).css('visibility','hidden');
	$(submitBtn)
		.click(function() {checkAnswers()})
		.css({
			"position": "absolute",
			"top": "auto", // clear whatever Edge set for top
			"bottom": "90px",
			"left": "50%",
			"margin-right": "-50%",
			"transform": "translate(-50%, 0)"
		});
}
function setUpNextButton() {
	// convert Submit button into NextPage/EndOfQuiz button
	var btn = $(".submit");
	if (!exists(btn))
		return;
	if (exists(nextPageUrl) && nextPageUrl.length > 2) {
		$(btn).html("Next page")
			.removeClass("blue")
			.addClass("green")
			.css("width","6em");
	} else {
		$(btn).html("End of Quiz")
			.removeClass("button blue green")
			.css("width","9em");
	}
	$(btn).css({'visibility':'visible', 'opacity': 1})
		.unbind().click(function() {
			goNextPage();
		});
}

function setUpResetButton(option) {
	var resetBtn = $(".reset");
	if (!exists(resetBtn))
		return;
	if (option === 'hide')
		$(resetBtn).css('visibility','hidden');
	$(resetBtn)
		.click(function() {location.reload()})
		.css({
			"position": "absolute",
			"top": "auto", // clear whatever Edge set for top
			"bottom": "60px",
			"left": "50%",
			"margin-right": "-50%",
			"transform": "translate(-50%, 0)"
		});
}

function goNextPage() {
	//console.log(">>> "+nextPageUrl);
	if (exists(nextPageUrl) && nextPageUrl.length > 2)
		window.open(nextPageUrl, "_self");
}

function showMetaInfo(versionString) {
	var copyrightText = "Copyright 2015";
	var createdByText = "";
	var versionText = "Version "+versionString+".";
	var centerNode = $("<div style='text-align: center; margin-top: 20px'></div>");
	centerNode.append($("<span></span>").text(copyrightText+" "));
	centerNode.append($("<a href='http://harvest.cals.ncsu.edu' target='_blank' class='footer'></a>").text("North Carolina State University"));
	centerNode.append(" &nbsp; Code by ");
	centerNode.append($("<a href='http://www.onetimesoftware.com' target='_blank' class='footer'></a>").text("One Time Software"));
	centerNode.append(". &nbsp; "+versionText);
	centerNode.append("<br>");
	centerNode.append($("<span></span>").text("Free for academic use when displaying this notice."));
	centerNode.css({
		"color": "gray",
		"font-size": "x-small",
		"position": "absolute",
		"bottom": "15px",
		"left": "50%",
		"margin-right": "-50%",
		"transform": "translate(-50%, 0)"
	});
	return centerNode;
}

// general utility functions //

jQuery.fn.readInputString = function() {
	var rawString = jQuery(this).html();
	if (!exists(rawString))
		return "";
	// workaround for Adobe bug and other clean up
	var cleanString = rawString.trim()
		// .replace(/\u200B/g,"") // strip Adobe mystery char (if we used .text() above)
		.stripHtmlMarkup(); // remove any embedded html (if we used .html() above)
	return cleanString;
}

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

String.prototype.stripSpaces = function() {
	return this.replace(/\s+/g,'');
}

String.prototype.stripHtmlMarkup = function() {
	// note: doesn't change the original string
	return this.replace(/<(?:.|\n)*?>/gm, '')
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
