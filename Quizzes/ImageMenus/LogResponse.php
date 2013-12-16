<?php
session_cache_limiter('nocache');
header('Content-type: application/json');
include( '../../_code/logger.php' );

$workingDir = getcwd(); // get current working directory
error_log("LogResponse.php  in  " . $workingDir);
$studentId = $_POST['si'];  //todo: get it from the environment variable REMOTE_USER
$questionNumber = $_POST['qn'];
$questionType = $_POST['qt'];
$questionTextSummary = $_POST['qs'];
$studentAnswerArray = $_POST['sa'];
for ($i=0; $i<count($studentAnswerArray); $i++) {
	$ak[$i] = $i;
}
//error_log("/t".$workingDir." ".$studentId." ".$questionNumber." ".$questionType." ".$questionTextSummary." ".$studentAnswerArray." ".$answerKey);
$result = logStudentSubmission(
		$workingDir,
		$studentId,
		$questionNumber,
		$questionType,
		$questionTextSummary,
		$studentAnswerArray,
		$ak
);
//todo: if ($result <= 0) notify the user to try again
if ($result <= 0) {
	date_default_timezone_set('UTC');
	error_log("*** Error logging response: ".date("c")."|".$studentId."|".$questionNumber."|".$questionType."|".$questionTextSummary."|".$studentAnswerArray);
}

?>
