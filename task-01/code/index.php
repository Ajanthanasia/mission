<?php

// Define the directory to list (ensure proper path)
// $directory = __DIR__ . '/path/to/your/folder'; // Replace with actual path
// $directory = __DIR__ . './home';
$directory = 'E:\laragon\www\mission\task-01\home';

// Error handling (optional but recommended)
if (!is_dir($directory) || !is_readable($directory)) {
    die('Error: Invalid directory or insufficient permissions.');
}

// Get directory contents using scandir()
$contents = scandir($directory);

// Display directory contents (HTML structure)
echo '<h1>Directory Listing</h1>';
echo '<ul>';
foreach ($contents as $item) {
    if ($item != '.' && $item != '..') {
        $filePath = $directory . '/' . $item;
        if (is_dir($filePath)) {
            echo '<li><a href="#">' . $item . '/</a></li>'; // Replace with link generation if needed
        } else {
            echo '<li>' . $item . '</li>';
        }
    }
}
echo '</ul>';
