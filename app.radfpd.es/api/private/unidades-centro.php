<?php
require_once('./apiClasses/UnidadesCentro.php');

$api_utils = new ApiUtils();
$api_utils->setHeaders($api_utils::ALL_HEADERS);
$api_utils->displayErrors();

$authorization = new Authorization();
$authorization->comprobarToken();

$request = json_decode(file_get_contents("php://input"), true);

$unidadesCentro = new UnidadesCentro();

if (isset($_GET["id"])) {
    $id = $_GET["id"];
}

if (isset($_GET["id_ciclo"])) {
    $id_ciclo = $_GET["id_ciclo"];
} else {
    $id_ciclo = 0;
}

if ($authorization->token_valido) {
    switch ($_SERVER['REQUEST_METHOD']) {
        case $api_utils::GET:
            $unidadesCentro->get($id_ciclo);
            break;
            
        case $api_utils::POST:
            $unidadesCentro->create($request);
            break;
            
        case $api_utils::PUT:
            $unidadesCentro->update($request);
            break;
            
        case $api_utils::DELETE:
            $unidadesCentro->delete($id);
            break;

        default:
    }
} else {
    $unidadesCentro->message = NO_TOKEN_MESSAGE;
}

$api_utils->response($unidadesCentro->status, $unidadesCentro->message, $unidadesCentro->data, $authorization->permises);
echo json_encode($api_utils->response, JSON_PRETTY_PRINT);
?>
