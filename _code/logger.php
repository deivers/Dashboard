<?php

// example return value:  "2014-01-31T23:59:00+0000|smith15|6,4,5,3,1"
// date-time is ISO8601 format (GMT)

function logStudentSubmission($saveDir, $studentId, $qNumber, $qType, $qText, $answerDetails, $answers, $answerKey) {
	//* Log student answers *//
	$logFile = $saveDir . '/' . "submission_log_" . $qNumber . ".txt";
	if (!file_exists($logFile)) {
		// the first row is unique
		error_log('Creating log file '.$qNumber.' in '.$saveDir);
		$logEntry = buildMetaRow($qType, $qText, $answerDetails, $answerKey);
		file_put_contents($logFile, $logEntry);
	}
	$logEntry = buildLogEntry($studentId, $answers);
	$result = file_put_contents($logFile, $logEntry, FILE_APPEND);
	if ($result <= 0) // if zero characters were written, then try again
		$result = file_put_contents($logFile, $logEntry, FILE_APPEND);
	return $result;
}

function buildLogEntry($studentId, $submission) {
	date_default_timezone_set('UTC');
	$logEntry = date("c") . "|" . removeDelimiters($studentId) . "|" . removeDelimiters(arrayOrValueToString($submission)) . "\n";
	return $logEntry;
}

function buildMetaRow($typeOfQuestion, $questionText, $answerDetails, $correctAnswer) {
	$logEntry = removeDelimiters($typeOfQuestion) . "|" . removeDelimiters($questionText) . "|" . removeDelimiters(arrayOrValueToString($answerDetails)) . "|" . removeDelimiters(arrayOrValueToString($correctAnswer)) . "\n";
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