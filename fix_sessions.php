<?php
$files = glob('*.php');
foreach ($files as $file) {
    if ($file === 'fix_sessions.php') continue;
    
    $content = file_get_contents($file);
    // If the file already starts with session_start, skip
    if (strpos($content, 'session_start') !== false && strpos($content, 'session_start') < 100) {
        continue;
    }
    // If the file has auth.php included at the very top, wait, auth.php calls session_start.
    // To be safe, just prepend the session_start block if it doesn't already have it at the very top.
    
    // Actually, just add it to files that start with <!doctype html> or similar HTML
    if (strpos(trim($content), '<!doctype html>') === 0 || strpos(trim($content), '<html') === 0) {
        $newContent = "<?php\nif (session_status() === PHP_SESSION_NONE) {\n    session_start();\n}\n?>\n" . $content;
        file_put_contents($file, $newContent);
        echo "Fixed $file\n";
    }
}
echo "Done.";
?>
