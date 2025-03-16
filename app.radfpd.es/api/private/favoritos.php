<?php

require_once('./apiClasses/Favorito.php');

$api_utils = new ApiUtils();
$api_utils->setHeaders($api_utils::ALL_HEADERS);
$api_utils->displayErrors();

$request = json_decode(file_get_contents("php://input"), true);
$favorito = new Favorito();

$authorization = new Authorization();
$authorization->comprobarToken();

$id = isset($_GET["id"]) ? $_GET["id"] : null;

$response = [
    "status" => false,
    "message" => "Acción no ejecutada",
    "data" => null
];

if ($authorization->token_valido) {
    switch ($_SERVER['REQUEST_METHOD']) {

        case "GET":
            $response = $favorito->getAll();
            break;

        case "POST":
            $response = $favorito->create($request);
            break;

        case "DELETE":
            if (!empty($id)) {
                $response = $favorito->delete($id);
            } else {
                $response["message"] = "Falta ID del favorito para eliminar";
            }
            break;

        default:
            $response["message"] = "Método no permitido";
            break;
    }
} else {
    $response["message"] = "Token inválido o caducado";
}

echo json_encode($response, JSON_PRETTY_PRINT);

?>
