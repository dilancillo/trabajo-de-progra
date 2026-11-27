<?php
// Configuración local de XAMPP. Cambia estos datos si tu MySQL usa otra contraseña.
$host = 'localhost';
$db = 'navidad_santa';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, PDO::ATTR_EMULATE_PREPARES => false];
try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['ok' => false, 'mensaje' => 'No se pudo conectar con MySQL. Inicia MySQL e importa database.sql en phpMyAdmin.'], JSON_UNESCAPED_UNICODE);
    exit;
}
