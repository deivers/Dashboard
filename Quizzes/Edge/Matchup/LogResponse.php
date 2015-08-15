<?php
session_cache_limiter('nocache');
header('Content-type: application/json');
include( '../../../_code/logger.php' );

$workingDir = getcwd(); // get current working directory
error_log("LogResponse.php  in  " . $workingDir);
$studentId = $_POST['si'];
$dataVersion = $_POST['dv'];
$qType = $_POST['qt'];
$qTextSummary = $_POST['qs'];
$answerDetailArray = $_POST['ad'];
$studentAnswerArray = $_POST['sa'];
$answerArray = $_POST['ak'];
$rubricType = $_POST['rt'];
$pointsArray = $_POST['pt'];
error_log("/t".$workingDir." ".$studentId." ".$dataVersion." ".$qType." ".$qTextSummary." ".print_r($answerDetailArray)." ".print_r($studentAnswerArray)." ".print_r($answerArray)." ".$rubricType." ".print_r($pointsArray));
$result = logStudentSubmission(
		$workingDir,
		$studentId,
		$dataVersion,
		$qType,
		$qTextSummary,
		$answerDetailArray,
		$studentAnswerArray,
		$answerArray,
		$rubricType,
		$pointsArray
);
//todo: if ($result <= 0) notify the user to try again
if ($result <= 0) {
	date_default_timezone_set('UTC');
	error_log("*** Error logging response: ".date("c")."|".$studentId."|".$dataVersion."|".$qType."|".$qTextSummary."|".print_r($studentAnswerArray)."|".print_r($pointsArray));
}

?>
