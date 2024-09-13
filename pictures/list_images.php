<?php
header('Content-Type: application/json');

// Define the directory containing images
$dir = 'archive_photos/'; // Change this to your folder path

// Get all image files in the directory
$files = glob($dir . '*.{jpg,png,gif,jpeg}', GLOB_BRACE);

// Create an array of URLs
$images = array();
foreach ($files as $file) {
    $images[] = $file;
}

// Output the JSON data
echo json_encode($images);
?>