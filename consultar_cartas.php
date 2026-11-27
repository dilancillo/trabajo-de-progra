<?php
header('Content-Type: application/json; charset=utf-8');
if ($_SERVER['REQUEST_METHOD'] !== 'GET') { http_response_code(405); echo json_encode(['ok'=>false,'mensaje'=>'Método no permitido.']); exit; }
require_once __DIR__ . '/../config/database.php';
try {
    $stmt = $pdo->query('SELECT id, nombre, edad, mensaje, fecha_envio FROM cartas ORDER BY id DESC LIMIT 1');
    $carta = $stmt->fetch();
    echo json_encode(['ok'=>true, 'hayCarta'=>(bool)$carta, 'carta'=>$carta ?: null], JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) { http_response_code(500); echo json_encode(['ok'=>false,'mensaje'=>'No se pudieron consultar las cartas. Revisa la base de datos.'], JSON_UNESCAPED_UNICODE); }
