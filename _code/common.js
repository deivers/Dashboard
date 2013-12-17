function showMetaInfo(versionString) {
	var copyrightText = "Copyright 2013";
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

function shuffleDivs(selectorForContainingElement,selectorOfElementsToBeShuffled) {
	var list = $(selectorOfElementsToBeShuffled);
	$(selectorForContainingElement).append(list[0]);	// make sure the first is no longer first
	for (var i=0; i<list.length/2+1; i++)
		$(selectorForContainingElement).append(list[Math.floor(Math.random()*list.length)]);
}

function logSubmission(qNum,qType,qSummary,aSummary,saArray,akArray) {
	console.log("Logging...");
	if (typeof studentId === 'undefined' || studentId == "")
		studentId = prompt("Please enter your student ID","");			// intentionally global
	// todo: get id from the environment variable
	// todo: verify that we got a unique valid id above, or create one from the ip address?
	if (typeof qNum === 'undefined') {
		qNum = 0;
		console.log("Warning: quizpageNumber not found; defaulting to 0");
	}
	if (typeof qSummary === 'undefined')
		qSummary = "question summary not defined in .html";
	//console.log(qSummary);
	// submit to server
	var request = $.ajax({
		type: 'POST',
		url: 'LogResponse.php',  // in the original directory
		data: {	si : studentId,
				qn : qNum,
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
}

// utility functions

function arrayFactory(numberOfElements,multiplier,offset) {
	var array = new Array(numberOfElements);
	for (var i=0; i<numberOfElements; i++)
		array[i] = i * multiplier + offset;
	return array;
}

function convertToIndexes(arrayWithUnknownOrder,referenceArray) {
	// assume the arrays have same length!
	var resultArray = [];
	for (var i=0; i<arrayWithUnknownOrder.length; i++) {
		for (var j=0; j<referenceArray.length; j++) {
			if (arrayWithUnknownOrder[i] == referenceArray[j]) {
				resultArray[i] = j;
				break;
			}
		}
	}
	return resultArray;
}

function replaceAwithBinC(a,b,c) {
	// replace all occurences of a with b in c
	return c.replace(RegExp(a,"gm"),b);  // "g" for global replace, "m" for multi-line
}