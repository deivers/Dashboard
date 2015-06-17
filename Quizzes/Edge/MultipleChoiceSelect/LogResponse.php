<?php
session_cache_limiter('nocache');
header('Content-type: application/json');
include( '../../../_code/logger.php' );

$workingDir = getcwd(); // get current working directory
error_log("LogResponse.php  in  " . $workingDir);
$studentId = $_POST['si'];
$qNumber = $_POST['qn'];
$qType = $_POST['qt'];
$qTextSummary = $_POST['qs'];
$answerDetailArray = $_POST['ad'];
$studentAnswerArray = $_POST['sa'];
$answerArray = $_POST['ak'];
//error_log("/t".$workingDir." ".$studentId." ".$qNumber." ".$qType." ".$qTextSummary." ".$answerDetailArray." ".$studentAnswerArray." ".$answerArray);
$result = logStudentSubmission(
		$workingDir,
		$studentId,
		$qNumber,
		$qType,
		$qTextSummary,
		$answerDetailArray,
		$studentAnswerArray,
		$answerArray
);
//todo: if ($result <= 0) notify the user to try again
if ($result <= 0) {
	date_default_timezone_set('UTC');
	error_log("*** Error logging response: ".date("c")."|".$studentId."|".$qNumber."|".$qType."|".$qTextSummary."|".$studentAnswerArray);
}

?>
