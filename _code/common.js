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

function logSubmission(qNum,qType,qSummary,aSummary,saArray,akArray) {
	console.log("Logging...");
	if (typeof studentId === 'undefined' || studentId.length == 0) {
		if (typeof Storage !== 'undefined') {
			studentId = sessionStorage.dashboardStudentId;
		}
		if (typeof studentId === 'undefined' || studentId.length == 0) {
			// todo: get id from the environment variable
			studentId = prompt("Please enter your student ID","");			// intentionally global
			// todo: verify that we got a unique valid id above, or create one from the ip address?
			if (typeof Storage !== 'undefined' && studentId.length > 0)
				sessionStorage.dashboardStudentId = studentId;
			else {
				alert("You must provide a valid student ID in order to get credit for completing the quiz.");
				return false;
			}
		}
	}
	// validate incoming parameters
	if (typeof qNum === 'undefined') {
		qNum = 0;
		console.log("Warning: quizpageNumber not found; defaulting to 0");
	}
	if (typeof qSummary === 'undefined')
		qSummary = "question summary not defined in .html";
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
	return true;
}

// utility functions //

function shuffleDivs(selectorForContainingElement,selectorOfElementsToBeShuffled) {
	var list = $(selectorOfElementsToBeShuffled);
	$(selectorForContainingElement).append(list[0]);	// make sure the first is no longer first
	for (var i=0; i<list.length/2+1; i++)
		$(selectorForContainingElement).append(list[Math.floor(Math.random()*(list.length-1))]);  // -1 because there's no sense in appending the last element to the elements
	if (jQuerySame(list,$(selectorOfElementsToBeShuffled)))		// then the order is unchanged
		$(selectorForContainingElement).append($(selectorOfElementsToBeShuffled).get().reverse());	// reverse the order
}

function shuffleArray(array) {
	// Randomize array element order in-place using Fisher-Yates shuffle algorithm
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function jQuerySame(a, b) {
    if (a.length != b.length) {
        return false;
    }
    for (var i = 0; i < a.length; i++) {
        if (a.get(i) != b.get(i)) {
            return false;
        }
    }
    return true;
}

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

function replaceAwithBinC(a,b,c) {
	// replace all occurences of a with b in c
	return c.replace(RegExp(a,"gm"),b);  // "g" for global replace, "m" for multi-line
}