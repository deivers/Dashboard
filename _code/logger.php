<?php
session_cache_limiter('nocache');
header('Content-type: application/json');

// example return value:  "2014-01-31T23:59:00+0000|smith15|6,4,5,3,1"
// date-time is ISO8601 format (GMT)

function logStudentSubmission($saveDir, $studentId, $dataVersion, $qType, $qText, $answerDetails, $answers, $answerKey, $rubric, $points) {
	//TODO remove the second argument
	$studentId = getStudentIdFromServer();
	//* Log student answers *//
	$logFile = $saveDir . '/' . "submission_log_" . $dataVersion . ".txt";
	error_log("log file name:  ". $logFile);
	if (!file_exists($logFile)) {
		// the first row is unique
		error_log('Creating log file '.$dataVersion.' in '.$saveDir);
		$logEntry = buildMetaRow($qType, $qText, $answerDetails, $answerKey, $rubric, $points);
		file_put_contents($logFile, $logEntry);
	}
	$logEntry = buildLogEntry($studentId, $answers);
	$result = file_put_contents($logFile, $logEntry, FILE_APPEND);
	$tryLimit = 50;
	$counter = 0;
	while ($result <= 0 && $counter++ < $tryLimit) { // if zero characters were written, then try again
		sleep(0.1);
		$result = file_put_contents($logFile, $logEntry, FILE_APPEND);
	}
	return $result;
}

//TODO verify the following works at NCSU
function getStudentIdFromServer() {
	$userid = (isset($_SERVER['WRAP_USERID'])) ? $_SERVER['WRAP_USERID'] : (isset($_SERVER['SHIB_UID']) ? $_SERVER['SHIB_UID'] : $_SERVER['REMOTE_USER']);
	error_log("student ID: "+$userid);
	return $userid;
}

function buildLogEntry($studentId, $submission) {
	date_default_timezone_set('UTC');
	$logEntry = date("c") . "|" . removeDelimiters($studentId) . "|" . removeDelimiters(arrayOrValueToString($submission)) . "\n";
	return $logEntry;
}

function buildMetaRow($typeOfQuestion, $questionText, $answerDetails, $correctAnswer, $rubric, $points) {
	$logEntry = removeDelimiters($typeOfQuestion) . "|" . removeDelimiters($questionText) . "|" . removeDelimiters(arrayOrValueToString($answerDetails)) . "|" . removeDelimiters(arrayOrValueToString($correctAnswer)) . "|" . removeDelimiters($rubric) . "|" . removeDelimiters(arrayOrValueToString($points)) . "\n";
	return $logEntry;
}

function arrayOrValueToString($arrayOrValue) {
	if (is_array($arrayOrValue))
		return join(";",$arrayOrValue);
	else
		return "" . $arrayOrValue;
}

function removeDelimiters($text) {
	return str_replace(array("|","\n"), array(), $text);
}

?>