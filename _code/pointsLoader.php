<?php

include 'logger.php';

// load all log files of this folder's subfolders into an array and return the total points for the student //

error_log("pointsLoader.php");
error_log("loading submissions in sub-folders");
$dashboardVersionString = "4";
//* figure out the working directory
$sourceUrl = $_SERVER['HTTP_REFERER'];
$workingDir = dirname($sourceUrl);
error_log("working directory: ".$workingDir);
$array = explode("/",$workingDir);
$relativePath = "../".$array[count($array)-1];		// folder containing the originating html page
error_log("path = ". $relativePath);
$fileNameSuffix = ".txt";
$logContents = array();
//* append each log file to the array
$index = 0;
$it = new RecursiveDirectoryIterator($relativePath);
foreach(new RecursiveIteratorIterator($it) as $path) {
	$filename = "submission_log_" .$dashboardVersionString. $fileNameSuffix;
	if (basename($path) === $filename) {
		error_log("reading log from path ".$path);
		$index++;
		error_log("---\n".file_get_contents($path));
		$logContents[$index] = file_get_contents($path);
	}
}
error_log("number of log files found: " . count($logContents) /*. "\ncontents of first file:\n" . $logContents[1]*/);
//* parse each log, accumulate points for the currently logged in student
$studentId = "abc";//////////////////////////////////////////////////////getStudentIdFromServer();
// index params for first line of log file
$qTypeIndex = 0;
$qTextIndex = 1;
$aDetailsIndex = 2;
$aKeyIndex = 3;
$rubricTypeIndex = 4;
$pointsIndex = 5;
// index params for after first line of log file
$studentIdIndex = 1;
$studentAnswersIndex = 2;
// index params for studentArray
$firstSubmissionIndex = 2;
$lastSubmissionIndex = 3;
$numberOfSubmissionsIndex = 4;

$firstLineString;
$pointsTotal = 0;

foreach($logContents as $logString) {

	error_log("---this log:  ".$logString);

	//* parse log string
	//** split log string into array by "/n"
	$studentArray = parseLogString($dashboardVersionString, $logString); // each element is one line from the log file
	error_log("---parsed array:  ".print_r($studentArray,true));////
	//** split first line into sub array by "|"
	$firstLineArray = explode("|", print_r($firstLineString,true)); // print_r to make sure we give a string to explode()
	//** get answer key
	$answerKeyString = print_r($firstLineArray[$aKeyIndex],true);
	$answerKeyArray = explode(";", $answerKeyString);
	//** get possible points array
	$possiblePointsArray = explode(";", print_r($firstLineArray[$pointsIndex],true));

	//* which line belongs to the student logged in?
	$thisStudentsLine = array();
	foreach($studentArray as $studentLine) {
		if ($studentLine[$studentIdIndex] == $studentId) {
			$thisStudentsLine = $studentLine;
			break;
		}
	}
	// error_log("this student line: ".print_r($thisStudentsLine),true);
	//* return the points earned using the rubric to check correctness
	$firstSubm = $thisStudentsLine[$firstSubmissionIndex];
	$lastSubm = $thisStudentsLine[$lastSubmissionIndex];
	$rubric = $firstLineArray[$rubricTypeIndex];
	// error_log($firstSubm ." ". $lastSubm ." ". $rubric ." ". $answerKeyString);////
	if (($rubric == "all" && $firstSubm == $answerKeyString) || ($rubric != "all" && array_search($firstSubm, $answerKeyArray)))		// then first submission was correct
		$pointsTotal += $possiblePointsArray[0];							// return the possible points for first submission
	else if (($rubric == "all" && $lastSubm == $answerKeyString) || ($rubric != "all" && array_search($lastSubm, $answerKeyArray)))	// then last submission was correct
		$pointsTotal = end($possiblePointsArray);						// return the possible points for last submission
	error_log("running total: ".$pointsTotal);
}
print $pointsTotal;

function parseLogString($dataVersion, $logStr) {
	//* this code works for data version 4
	global $studentIdIndex;
	global $firstLineString;
	error_log("parsing the log file");
	$logArray = explode(PHP_EOL, $logStr);
	error_log("number of lines found: ".count($logArray));
	$firstLineString = $logArray[0];
	if (end($logArray) == "")
		array_pop($logArray);
	reset($logArray);
	// split each line
	$logMultiArray = array();
	foreach($logArray as $logLine) {
		$logMultiArray[] = explode("|", print_r($logLine,true));
	}
	$logArrayOneLinePerStudent = condenseSubmissions($logMultiArray, $studentIdIndex);
	return $logArrayOneLinePerStudent;
}

function condenseSubmissions($logArr, $columnToCompare) {
	global $studentIdIndex;
	global $studentAnswersIndex;
	global $firstSubmissionIndex;
	global $lastSubmissionIndex;
	global $numberOfSubmissionsIndex;
	$newArr = array();
	for ($i = 1; $i < count($logArr); $i++) { // note: skip the first line
		$newArrIndex = count($newArr);
		$studentPreviouslySubmitted = false;
		for ($j = 0; $j < count($newArr); $j++) {
			// error_log("comparing: ".print_r($logArr[$i][$columnToCompare],true) ." and ". print_r($newArr[$j][$columnToCompare],true));
			if (print_r($logArr[$i][$columnToCompare],true) == print_r($newArr[$j][$columnToCompare],true)) { // if student id's match
				$studentPreviouslySubmitted = true;
				$newArrIndex = $j;
				break;
			}
		}
		error_log("*".$newArrIndex."*");////
		if (!$studentPreviouslySubmitted) {
			$newArr[$newArrIndex] = array();
			$newArr[$newArrIndex][0] = $logArr[$i][0]; // copy the time stamp
			$newArr[$newArrIndex][$studentIdIndex] = $logArr[$i][$studentIdIndex]; // copy student id
			$newArr[$newArrIndex][$firstSubmissionIndex] = $logArr[$i][$studentAnswersIndex]; // copy student's first response
			$newArr[$newArrIndex][$lastSubmissionIndex] = $logArr[$i][$studentAnswersIndex]; // this is or will be replaced with the student's last submitted response
			$newArr[$newArrIndex][$numberOfSubmissionsIndex] = 1;
		} else {
			$newArr[$newArrIndex][$lastSubmissionIndex] = $logArr[$i][$studentAnswersIndex]; // keep replacing until it's the last one  //TODO until it's the correct response
			$newArr[$newArrIndex][$numberOfSubmissionsIndex]++;
		}
	}
	return $newArr;
}

?>