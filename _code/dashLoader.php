<?php
error_log("dashLoader.php");

//TODO ask the instructor for the total number of students

//TODO open a file browser so the instructor can find the data file of interest

// load all log files of this folder into an array
error_log("loadAllSubmissionsInFolder");
$sourceUrl = $_SERVER['HTTP_REFERER'];
$workingDir = dirname($sourceUrl);
$array = explode("/",$workingDir);
$relativePath = "../".$array[count($array)-2]."/".$array[count($array)-1];		// assume the quiz is 2 levels deep
error_log("path = ". $relativePath);
$fileNamePrefix = $relativePath . "/submission_log_"; // the first possible log file
$fileNameSuffix = ".txt";
$logContents = array();
// the following assumes that logs are sequentially numbered starting with 1
for ($i=1; $i<100; $i++) {
	error_log("reading log number ".$i);
	$fName = $fileNamePrefix . $i . $fileNameSuffix;
	error_log("searching for: ".$fName);
	if (file_exists($fName))
		$logContents[$i] = file_get_contents($fName);
	else
		break; // stop when the file submission_log_# can't be found
}

//TODO strip out quotes?  or does json_encode take care of the issue?

error_log("number of log files found: " . count($logContents) . "\ncontents of first file:\n" . $logContents[1]);
print json_encode(array_values($logContents));


?>