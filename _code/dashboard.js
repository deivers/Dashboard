// assume the log entries (lines) are in chronological order, at least with respect to any given student
// parse the data into a large multi-dim array
//   split on \n
//   split again on |
//   throw away all except the first and last submission from each student
//   example: student[0][firstSubmissionIndex] = "6,4,5,3"

// number of submissions by a student is 1-based
// student index is 0-based

// index parameters
var timestampIndex = 0;
var studentIdIndex = 1;
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
		url: "dashLoader.php",
		dataType: 'json',
		success: function(data) {
			console.log("Dash Loader is done\n\n");
			computeAndDisplayStats(data);
		},
		error: function() {
			console.log("Dash Loader failed!\n\n");
		}
	});
}

function computeAndDisplayStats(logArray) {
	var nFirst, nLast;
	// for each log file
	logArray.forEach(function(logString,quizpageIndex) {
		console.log("Quiz-page number "+(quizpageIndex+1));
		student = parseLogString(quizpageIndex+1,logString);
		console.log("Question type: "+student.questionType);
		console.log("Question text: "+student.questionText);
		console.log("Answer key: "+student.answerKeyString);
		console.log("");
		nFirst = numberCorrectSubmissions(firstSubmissionIndex);
		nLast = numberCorrectSubmissions(lastSubmissionIndex)
		console.log("Number of students that responded: "+student.length);
		console.log("Number of students with all correct on final submission: "+nLast+"  "+toPercent(nLast,student.length)+"%");
		console.log("Number of students with all correct on first submission: "+nFirst+"  "+toPercent(nFirst,student.length)+"%");
		console.log("Number correct for each answer on first submission: "+numberCorrectAnswers(firstSubmissionIndex).toString());
		console.log("Number correct for each answer on first submission: "+toPercentArrayWithUnits(numberCorrectAnswers(firstSubmissionIndex),student.length));
		console.log("The most common answers on first submission: "+mostCommonAnswers(firstSubmissionIndex));
		console.log("Answer key again: "+student.answerKeyString);
		console.log("");
		console.log("First student's first submitted answers: "+student[0][answersIndex]);
		console.log("First student's last submitted answers: "+student[0][lastSubmissionIndex]);
		console.log("Number of submissions by the first student: "+student[0][numberOfSubmissionsIndex]);
		console.log("----------------");
	});
}

function parseLogString(qNumber,logString) {
	var logArray = [];
	var logArrayOneLinePerStudent = [];
	// parse the log
	console.log("Parsing log file number "+qNumber);
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
	logArrayOneLinePerStudent.questionType = logArray[0][0];
	logArrayOneLinePerStudent.questionText = logArray[0][1];
	logArrayOneLinePerStudent.answerKeyString = logArray[0][2];
	return logArrayOneLinePerStudent;
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
			newArr[y].push(origArr[x][answersIndex]);	// the added element is or will become this student's last submitted answer
			newArr[y].push(1);		// number of submissions
		} else {
			newArr[y][lastSubmissionIndex] = origArr[x][answersIndex];	// keep replacing until it's the last one
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
	var answerKey = student.answerKeyString.split(",");
	var nCorrect = arrayFactory(answerKey.length,0);
	for (var whichStudent=0; whichStudent<student.length; whichStudent++) {
		studentAnswers = student[whichStudent][whichColumn].split(",");
		for (var whichAnswer=0; whichAnswer<answerKey.length; whichAnswer++) {
			if (studentAnswers[whichAnswer] == answerKey[whichAnswer]) {
				nCorrect[whichAnswer]++;
			}
		}
	}
	return nCorrect;
}

function mostCommonAnswers(whichColumn) {
	// for first submissions, whichColumn = firstSubmissionIndex
	// for last submissions, whichColumn = lastSubmissionIndex
	// implicit arg: student array
	var answerKey = student.answerKeyString.split(",");
	var accumulationArray = new Array(answerKey.length);
	var studentAnswers, key;
	for (var whichStudent=0; whichStudent<student.length; whichStudent++) {
		studentAnswers = student[whichStudent][whichColumn].split(",");
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
	var results = new Array(answerKey.length);
	for (var whichQuestion=0; whichQuestion<studentAnswers.length; whichQuestion++) {
		// which key has the largest value?
		sumsForThisQuestion = accumulationArray[whichQuestion];
		// find the largest
		maxValue = 0;
		Object.keys(sumsForThisQuestion).forEach(function(key){
			///console.log(key+"  "+sumsForThisQuestion[key]);
			thisValue = sumsForThisQuestion[key];
			if (thisValue > maxValue) {
				maxValue = thisValue;
				keyOfMaxValue = key;
			}
		});
		///console.log(keyOfMaxValue);
		results[whichQuestion] = keyOfMaxValue;
	}
	return results;
}

// utility functions

function arrayFactory(numberOfElements,commonElement) {
	var array = new Array(numberOfElements);
	for (var i=0; i<numberOfElements; i++)
		array[i] = commonElement;
	return array;
}

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
