<?php

// Define the root directory (ensure proper path)
// $rootDirectory = __DIR__ . '/path/to/your/folder'; // Replace with actual path
// $rootDirectory = 'E:\laragon\www\mission\task-01\home';
$rootDirectory = 'C:\xampp\htdocs\github\mission\task-01\home';

// Function to get directory contents (recursive for nested folders)
function getDirContents($dir)
{
    $contents = array();
    if (!is_dir($dir) || !is_readable($dir)) {
        return false; // Handle error cases (invalid or inaccessible directory)
    }
    foreach (scandir($dir) as $item) {
        if ($item != '.' && $item != '..') {
            $filePath = $dir . '/' . $item;
            if (is_dir($filePath)) {
                $contents[$item] = getDirContents($filePath); // Recursively get subfolder contents
            } else {
                $contents[] = $item;
            }
        }
    }
    return $contents;
}

// Handle user input (if clicking on folders)
$currentDir = $rootDirectory;
if (isset($_GET['dir'])) {
    $newDir = realpath($currentDir . '/' . $_GET['dir']); // Sanitize input
    if (is_dir($newDir) && is_readable($newDir) && strpos($newDir, $rootDirectory) !== false) { // Check within allowed directory
        $currentDir = $newDir;
    } else {
        die('Error: Access denied.'); // Prevent unauthorized directory access
    }
}

// Get directory contents
$dirContents = getDirContents($currentDir);

function getStringDifferent($currentDir, $rootDirectory)
{
    $len = strlen($rootDirectory);
    $difference = substr($currentDir, $len + 1);
    return $difference;
}

// Function to display directory structure with links (optional)
function displayDirStructure($contents, $currentDir, $rootDirectory, $indent = '')
{
    echo '<ul>';
    foreach ($contents as $name => $subContents) {
        if (is_array($subContents)) { // Folder
            // echo '<li>' . $indent . '<a href="?dir=' . urlencode($name) . '">' . $name . '/</a></li>';
            // echo urlencode($name) . '<br>';
            // echo $currentDir;
            // displayDirStructure($subContents, $indent . '  '); // Increase indentation for subfolders
            // displayDirStructure($subContents, $currentDir, $rootDirectory, $indent . '  '); // Increase indentation for subfolders
            // $fullPath = realpath($currentDir . '/' . $name);
            // echo $fullPath;
            $url = getStringDifferent($currentDir, $rootDirectory);
            // echo $url;
            echo '<li>' . $indent . '<a href="?dir=' . urlencode($url . '/' . $name) . '">' . $name . '/</a></li>';
            // echo '<li>' . $indent . '<a href="?dir=' . urlencode($currentDir . '/' . $name) . '">' . $name . '/</a></li>';
        } else { // File
            //   echo '<li>' . $indent . $name . 'file</li>';
            // echo '<li>' . $subContents . '' . $indent . ' ' . $name . '</li>';
            echo '<li>' . $subContents . '</li>';
        }
    }
    echo '</ul>';
}

// Display directory listing
echo '<h1>Directory Listing</h1>';
if ($currentDir !== $rootDirectory) {
    echo '<a href="?">Back to Root</a><br>'; // Add a "Back to Root" link
}
// displayDirStructure($dirContents);
displayDirStructure($dirContents, $currentDir, $rootDirectory);
