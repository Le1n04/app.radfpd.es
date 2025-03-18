<?php

require_once('./apiClasses/Favorito.php');
require_once('./apiClasses/Auth.php');

$api_utils = new ApiUtils();
$api_utils->setHeaders($api_utils::ALL_HEADERS);
$api_utils->displayErrors();

$request = json_decode(file_get_contents("php://input"), true);
$favorito = new Favorito();

$auth = new Auth();

// Leer el token desde el header Authorization (Bearer Token)
$headers = apache_request_headers();
$token = isset($headers['Authorization']) ? str_replace('Bearer ', '', $headers['Authorization']) : null;

$response = [
    "status" => false,
    "message" => "Acción no ejecutada",
    "data" => null
];

if ($token) {
    $user_id = $auth->getUserId($token);

    if ($user_id) {
        switch ($_SERVER['REQUEST_METHOD']) {
            case "GET":
                $response = $favorito->getByUserId($user_id);
                break;

            case "POST":
                $request["user_id"] = $user_id;
                $response = $favorito->create($request);
                break;

            case "DELETE":
                if (!empty($_GET["id"])) {
                    $response = $favorito->delete($_GET["id"], $user_id);
                } else {
                    $response["message"] = "Falta el ID del favorito";
                }
                break;

            default:
                $response["message"] = "Método no permitido";
                break;
        }
    } else {
        $response["message"] = "Token inválido o usuario no encontrado";
    }
} else {
    $response["message"] = "Falta token de autorización";
}

echo json_encode(array_filter($response, fn($value) => $value !== null), JSON_PRETTY_PRINT);
