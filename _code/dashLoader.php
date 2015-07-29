<?php
// load all log files of this folder's subfolders into an array
error_log("dashLoader.php");
error_log("loading all submissions in sub-folders");
$dashboardVersionString = "3";
// figure out the working directory (based on assumed folder depth!)
$sourceUrl = $_SERVER['HTTP_REFERER']; // the dashboard.html file?
$workingDir = dirname($sourceUrl);
error_log("working directory: ".$workingDir);
$array = explode("/",$workingDir);
$relativePath = "../".$array[count($array)-2]."/".$array[count($array)-1];		// assume the quiz folder is 2 levels deep
error_log("path = ". $relativePath);
// build file path/name
$fileNamePrefix = $relativePath . "/submission_log_";
$fileNameSuffix = ".txt";
$logContents = array();

$index = 0;
foreach(glob($relativePath . "/*", GLOB_ONLYDIR) as $dir) {
	$index++;
	error_log("reading log from path ".$dir);
	$fPath = $dir . "/submission_log_" .$dashboardVersionString. $fileNameSuffix;
	error_log("searching for: ".$fPath);
	if (file_exists($fPath)) {
		error_log("---\n".file_get_contents($fPath));
		$logContents[$index] = file_get_contents($fPath);
	}
}

//TODO strip out quotes?  or does json_encode take care of the issue?

error_log("number of log files found: " . count($logContents) . "\ncontents of first file:\n" . $logContents[1]);
print json_encode(array_values($logContents));

?>