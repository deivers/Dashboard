<?php
session_cache_limiter('nocache');
header('Content-type: application/json');
include( '../common_library/logger.php' );

//$url = $_SERVER['REQUEST_URI'];
$workingDir = getcwd(); // get current working directory
error_log("LogResponse.php  in  " . $workingDir);
$studentId = $_POST['si'];  //todo: get it from the environment variable REMOTE_USER
$questionNumber = $_POST['qn'];
$questionType = $_POST['qt'];
$questionTextSummary = $_POST['qs'];
$studentAnswerArray = $_POST['sa'];
$answerKey = "";
//error_log("/t".$workingDir." ".$studentId." ".$questionNumber." ".$questionType." ".$questionTextSummary." ".$studentAnswerArray);
$result = logStudentSubmission(
		$workingDir,
		$studentId,
		$questionNumber,
		$questionType,
		$questionTextSummary,
		$studentAnswerArray,
		$answerKey
);
//todo: if ($result <= 0) notify the user to try again

?>
