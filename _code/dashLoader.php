<?php
//* load all log files of this folder's subfolders into an array
error_log("dashLoader.php");
error_log("loading all submissions in sub-folders");
$dashboardVersionString = "4";
//* figure out the working directory (based on assumed folder depth!)
$sourceUrl = $_SERVER['HTTP_REFERER']; // the dashboard.html file?
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
//* return the array
error_log("number of log files found: " . count($logContents) /*. "\ncontents of first file:\n" . $logContents[1]*/);
print json_encode(array_values($logContents));

?>	