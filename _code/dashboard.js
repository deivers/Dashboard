// assume the log entries (lines) are in chronological order, at least with respect to any given student
// parse the data into a large multi-dim array
//   split on \n
//   split again on |
//   throw away all except the first and last submission from each student
//   example: student[0][firstSubmissionIndex] = "6,4,5,3"

// number of submissions by a student is 1-based
// student index is 0-based

// index parameters, first line
var qTypeIndex = 0;
var qTextIndex = 1;
var aDetailsIndex = 2;
var aKeyIndex = 3;
var rubricTypeIndex = 4;
var pointsIndex = 5;
// index parameters for incoming data, after first line
var timestampIndex = 0;
var studentIdIndex = 1;
var studentAnswersIndex = 2;
// index parameters for student array
var firstSubmissionIndex = 2;
var lastSubmissionIndex = 3;		// not a column in the log file but added when parsing
var numberOfSubmissionsIndex = 4;	// not a column in the log file but added when parsing
// all students' logged data
var student = [];
// student[which student][timestamp/studentId/first submission/last submission/number of submissions]

function getData() {
	//todo: start progress indicator here
	console.log("Loading Dashboard data...");

	$.ajax({
		type: 'GET',
		url: "../_code/dashLoader.php",
		dataType: 'json',
		success: function(data) {
			if (data == null || data.length == 0)
				console.log("  Dashboard loader found no logged data!\n");
			else
				console.log("  Dashboard loader is done\n\n");
			computeAndDisplayStats(data);
		},
		error: function() {
			console.log("  Loader failed!\n\n");
		}
	});
}

function computeAndDisplayStats(logArray) {
	var nFirst, nLast, answerDetailsHtml, answerKeyArray, answerKeyHtml, pointsArray;
	// for each log file
	$(".stats").remove(); // if hitting the button again, clear the previously displayed stats
	logArray.forEach(function(logString,quizpageIndex) { //TODO quizpageIndex no longer used
		student = parseLogString(quizpageIndex+1,logString);
		answerDetailsHtml = "<ul style='list-style:none'><li>"+student.answerDetails.replaceAwithB(";","</li><li>")+"</li></ul>";
		answerKeyArray = student.answerKeyString.split(";");
		//
		nFirst = numberCorrectSubmissions(firstSubmissionIndex);
		nLast = numberCorrectSubmissions(lastSubmissionIndex);
		//
		console.log("First student's first submitted answers: "+student[0][firstSubmissionIndex]);
		console.log("First student's last submitted answers: "+student[0][lastSubmissionIndex]);
		console.log("Number of submissions by the first student: "+student[0][numberOfSubmissionsIndex]);
		console.log("Key: "+student.answerKeyString);
		// console.log("Details: "+student.answerDetails);
		$("body")
			.append($("<div class='stats'></div>")
				.append($("<h2>Question #"+(quizpageIndex+1)+"</h2>"))
				.append($("<p>Question type: "+student.questionType+"</p>"))
				.append($("<p>Question summary: "+student.questionText+"</p>"))
				.append($("<p>Answer details: </p>"+answerDetailsHtml))
				///.append($("<p>Answer key: "+answerKeyHtml+"</p>"))
				.append($("<h3>Statistics for #"+(quizpageIndex+1)+"</h3>"))
				.append($("<p>Number of students that responded: "+student.length+"</p>"))
				.append($("<p>Number of students with all correct on final submission: "+nLast+" &nbsp; "+toPercent(nLast,student.length)+"%</p>"))
				.append($("<p>Number of students with all correct on first submission: "+nFirst+" &nbsp; "+toPercent(nFirst,student.length)+"%</p>"))
				.append($("<table></table>")
					.append($("<tr></tr>")
							.append($("<td class='right'>Answer key</td>"+wrapElementsInTableCellTags(addToEach(answerKeyArray,1))))
					).append($("<tr></tr>")
							.append($("<td class='right'>Percent correct for each choice on first submission</td>"+wrapElementsInTableCellTags(toPercentArrayWithUnits(numberCorrectAnswers(firstSubmissionIndex),student.length))))
					).append($("<tr></tr>")
							.append($("<td class='right'>The most common <i>incorrect</i> choice(s) on first submission</td>"+wrapElementsInTableCellTags(mostCommonIncorrectAnswers(firstSubmissionIndex)[0])))
					).append($("<tr></tr>")
							.append($("<td class='right'>Percent of students submitting each of the above</td>"+wrapElementsInTableCellTags(toPercentArrayWithUnits(mostCommonIncorrectAnswers(firstSubmissionIndex)[1],student.length))))
					)
				)
			);
	});
}

function parseLogString(dataVersion,logString) {
	var logArray = [];
	var logArrayOneLinePerStudent = [];
	// parse the log
	console.log("Parsing log file");
	logArray = logString.split("\n");
	if (logArray[logArray.length-1] == "") {		// if last line of log is empty, remove from the array
		logArray.pop();
	}
	// split up each line
	for (var i=0; i<logArray.length; i++) {
		logArray[i] = logArray[i].split("|")
	}
	// now we have: logArray[which line][timestamp/studentId/answers]  (except first line is different)
	logArrayOneLinePerStudent = firstSubmissions(logArray,studentIdIndex);
	// now we have: logArrayOneLinePerStudent[which student][timestamp/student/first submission/last submission/number of submissions]

	//console.log("first student's array, one element per line:");
	//var student=0;
	//for (var column=0; column<5; column++)
	//	console.log(logArrayOneLinePerStudent[student][column]);
	logArrayOneLinePerStudent.questionType = logArray[0][qTypeIndex];
	logArrayOneLinePerStudent.questionText = logArray[0][qTextIndex];
	logArrayOneLinePerStudent.answerDetails = logArray[0][aDetailsIndex];
	logArrayOneLinePerStudent.answerKeyString = logArray[0][aKeyIndex];
	logArrayOneLinePerStudent.pointsString = logArray[0][pointsIndex];
	return logArrayOneLinePerStudent;
}

function saveParsedDataToFile(dataArray) {
	// todo: create a file that can be imported into excel
}

function firstSubmissions(origArr,columnToCompare) {
	var newArr = [],
		origLen = origArr.length,
		studentPreviouslySubmitted,
		x, y;
	for (x = 1; x < origLen; x++) {		// note: skip the first element
		studentPreviouslySubmitted = false;
		for (y = 0; y < newArr.length; y++) {
			if (origArr[x][columnToCompare] === newArr[y][columnToCompare]) {
				studentPreviouslySubmitted = true;
				break;
			}
		}
		if (!studentPreviouslySubmitted) {
			newArr.push(origArr[x]);
			newArr[y].push(origArr[x][studentAnswersIndex]);	// the added element is or will become this student's last submitted answer
			newArr[y].push(1);		// number of submissions
		} else {
			newArr[y][lastSubmissionIndex] = origArr[x][studentAnswersIndex];	// keep replacing until it's the last one
			newArr[y][numberOfSubmissionsIndex]++;
		}
	}
	return newArr;
};

// Statistics functions

function numberCorrectSubmissions(whichColumn) {
	// for first submissions, whichColumn = firstSubmissionIndex
	// for last submissions, whichColumn = lastSubmissionIndex
	// implicit arg: student array
	var nCorrect = 0;
	for (var whichStudent=0; whichStudent<student.length; whichStudent++) {
		if (student[whichStudent][whichColumn] === student.answerKeyString) {
			nCorrect++;
		}
	}
	return nCorrect;
}

function numberCorrectAnswers(whichColumn) {
	// for first submissions, whichColumn = firstSubmissionIndex
	// for last submissions, whichColumn = lastSubmissionIndex
	// implicit arg: student array
	var studentAnswers;
	var answerKey = student.answerKeyString.split(";");
	var nCorrect = arrayFactory(answerKey.length,0,0);
	for (var whichStudent=0; whichStudent<student.length; whichStudent++) {
		studentAnswers = student[whichStudent][whichColumn].split(";");
		for (var whichAnswer=0; whichAnswer<answerKey.length; whichAnswer++) {
			if (studentAnswers[whichAnswer] == answerKey[whichAnswer]) {
				nCorrect[whichAnswer]++;
			}
		}
	}
	return nCorrect;
}

function mostCommonIncorrectAnswers(whichColumn) {
	// for first submissions, whichColumn = firstSubmissionIndex
	// for last submissions, whichColumn = lastSubmissionIndex
	// implicit arg: student array
	var answerKey = (student.questionType == "Locator") ? student.answerDetails.split(";") : student.answerKeyString.split(";");
	var accumulationArray = new Array(answerKey.length);
	var studentAnswers, key;
	for (var whichStudent=0; whichStudent<student.length; whichStudent++) {
		studentAnswers = student[whichStudent][whichColumn].split(";");
		for (var whichQuestion=0; whichQuestion<studentAnswers.length; whichQuestion++) {
			// if accumulation array doesn't yet contain this answer, then push it on with value of 1
			// else add to the sum
			key = studentAnswers[whichQuestion];
			if (typeof accumulationArray[whichQuestion] === 'undefined')
				accumulationArray[whichQuestion] = new Object();
			if (typeof accumulationArray[whichQuestion][key.toString()] === 'undefined')
				accumulationArray[whichQuestion][key.toString()] = 1;
			else
				accumulationArray[whichQuestion][key.toString()]++;
			///console.log(whichQuestion+"  "+key+"  "+accumulationArray[whichQuestion][key.toString()]);
		}
	}
	// which has the most?
	var sumsForThisQuestion, thisValue, maxValue, keyOfMaxValue;
	var results = new Array(2);
	results[0] = new Array(answerKey.length);
	results[1] = new Array(answerKey.length);
	var numberOfOccurences = new Array(answerKey.length);
	for (var whichQuestion=0; whichQuestion<studentAnswers.length; whichQuestion++) {
		// which key has the largest value?
		sumsForThisQuestion = accumulationArray[whichQuestion];
		// find the largest
		maxValue = 0;
		Object.keys(sumsForThisQuestion).forEach(function(key){
			///console.log(key+"  "+sumsForThisQuestion[key]);
			thisValue = sumsForThisQuestion[key];
			if (thisValue > maxValue && key != answerKey[whichQuestion]) {	// ignore correct answers
				maxValue = thisValue;
				keyOfMaxValue = key;
			}
		});
		///console.log(keyOfMaxValue);
		if (maxValue == 0) {	// all students got this one right
			results[0][whichQuestion] = "*";
			results[1][whichQuestion] = 0;
		} else {
			results[0][whichQuestion] = (student.questionType == "Locator") ? keyOfMaxValue : parseInt(keyOfMaxValue)+1;					// convert to 1-based counting
			results[1][whichQuestion] = sumsForThisQuestion[keyOfMaxValue];
		}
	}
	return results;
}

// gamification points //

function getLeaderboard() {
	//TODO
	// find and read each log file
	
	alert("this function hasn't been written yet");
}

// utility functions //

function toPercent(aNumber,total) {
	return Math.round((aNumber*100)/total);
}

function toPercentArray(array,total) {
	var percentArray = [];
	array.forEach(function(val){
		percentArray.push(toPercent(val,total));
	});
	return percentArray;
}

function toPercentArrayWithUnits(array,total) {
	return appendToEach(toPercentArray(array,total),"%");
}

function appendToEach(array,stringToAppend) {
	var arrayAppended = [];
	array.forEach(function(val){
		arrayAppended.push(val+""+stringToAppend);
	});
	return arrayAppended;
}

function addToEach(array,constant) {
	// changes array itself
	if (isArray(array))
		var newVal;
		array.forEach(function(val,index,a){
			newVal = parseInt(a[index]) + constant;
			if (!isNaN(newVal))
				a[index] = newVal;
		});
	return array;
}

function wrapElementsInTableCellTags(array) {
	var htmlString = "";
	array.forEach(function(val) {
		htmlString +="<td>"+ val +"</td>";
	});
	return htmlString;
}
