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
$studentId = getStudentIdFromServer();
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
$totalPoints = 0;
foreach($logContents as $logString) {

	error_log("---this log:  ".$logString);

	//* parse log string
	//** split log string into array by "/n"
	$studentArray = parseLogString($dashboardVersionString, $logString); // each element is one line from the log file
	error_log(var_dump("---parsed array:  ".$studentArray));////
	//** split first line into sub array by "|"
	$firstLineArray = explode("|", $studentArray[0]);
	//** get answer key
	$answerKeyArray = explode(";", $firstLineArray[$studentAnswersIndex]);
	//** get possible points array
	$possiblePointsArray = explode(";", $studentArray['pointsString']);

	//* which line belongs to the student logged in?
	$thisStudentsLine = [];
	foreach($studentArray as $studentLine) {
		if ($studentLine[$studentIdIndex] == $studentId) {
			$thisStudentsLine = $studentLine;
			break;
		}
	}
	//* return the points earned using the rubric to check correctness
	$firstSubm = $thisStudentsLine[$firstSubmissionIndex];
	$lastSubm = $thisStudentsLine[$lastSubmissionIndex];
	$rubric = $firstLineArray[$rubricTypeIndex];
	if (($rubric == "all" && $firstSubm == $answerKeyArray) || ($rubric != "all" && array_search($firstSubm, $answerKeyArray)))		// then first submission was correct
		print json_encode($possiblePointsArray[0]);							// return the possible points for first submission
	else if (($rubric == "all" && $lastSubm == $answerKeyArray) || ($rubric != "all" && array_search($lastSubm, $answerKeyArray)))	// then last submission was correct
		print json_encode(end($possiblePointsArray));						// return the possible points for last submission
	else
		print json_encode(0);
}

function parseLogString($dataVersion, $logStr) {
	//* this code works for data version 3
	error_log("parsing the log file");
	$logArray = explode("\n", $logStr);
	if (end($logArray) == "")
		pop($logArray);
	reset($logArray);
	// split each line
	foreach($logArray as $logLine) {
		$logLine = explode("|", $logLine);
		error_log($logLine);///////////
	}
	$logArrayOneLinePerStudent = condenseSubmissions($logArray, $studentIdIndex);
	return $logArrayOneLinePerStudent;
}

function condenseSubmissions($logArr, $columnToCompare) {
	$newArr = array();
	for ($i = 1; $i < count($logArr); $i++) { // note: skip the first line
		$studentPreviouslySubmitted = false;
		for ($j = 0; $j < count($newArr); $j++) {
			if ($logArr[$i][$columnToCompare] == $newArr[$j][$columnToCompare]) {
				$studentPreviouslySubmitted = true;
				break;
			}
		}
		if (!$studentPreviouslySubmitted) {
			$newArr[] = $logArr[$i]; // student's first response
			$newArr[$j][$lastSubmissionIndex] = $logArr[$i][$studentAnswersIndex]; // this is or will be replaced with the student's last submitted response
			$newArr[$j][$numberOfSubmissionsIndex] = 1;
		} else {
			$newArr[$j][$lastSubmissionIndex] = $logArr[$i][$studentAnswersIndex]; // keep replacing until it's the last one  //TODO until it's the correct response
			$newArr[$j][$numberOfSubmissionsIndex]++;
		}
	}
	return $newArr;
}

?>