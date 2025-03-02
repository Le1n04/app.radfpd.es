<?php

require_once(__DIR__ . '/apiClasses/unidadesCentro.php');

$api_utils = new ApiUtils();
$api_utils->setHeaders($api_utils::ALL_HEADERS);
$api_utils->displayErrors();

$authorization = new Authorization();
$authorization->comprobarToken();

$unidadesCentro = new UnidadesCentro();
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    echo json_encode($unidadesCentro->getUnidadesCentro());
} 
elseif ($method === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode(["success" => $unidadesCentro->createUnidadCentro($data['unidad_centro'], $data['id_ciclo'], $data['observaciones'])]);
} 
elseif ($method === 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode(["success" => $unidadesCentro->updateUnidadCentro($data['id_unidad_centro'], $data['unidad_centro'], $data['id_ciclo'], $data['observaciones'])]);
} 
elseif ($method === 'DELETE') {
    $id = $_GET['id'] ?? null;
    echo json_encode(["success" => $unidadesCentro->deleteUnidadCentro($id)]);
} 
else {
    echo json_encode(["error" => "Método no permitido"]);
}
