<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

require_once __DIR__ . '/db.php';

function isLoggedIn() {
    return isset($_SESSION['user_id']);
}

function getLoggedInUserId() {
    return $_SESSION['user_id'] ?? null;
}

function getLoggedInUser() {
    global $pdo;
    $userId = getLoggedInUserId();
    if ($userId) {
        $stmt = $pdo->prepare("SELECT id, name, first_name, last_name, display_name, email, password_hash, created_at FROM users WHERE id = ?");
        $stmt->execute([$userId]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    return null;
}

function redirectIfNotLoggedIn($url = 'sign-in.php') {
    if (!isLoggedIn()) {
        header("Location: $url");
        exit;
    }
}
?>
