<?php
require_once('./apiClasses/favoritos.php');

$api_utils = new ApiUtils();
$api_utils->setHeaders($api_utils::ALL_HEADERS);
$api_utils->displayErrors();

$authorization = new Authorization();
$authorization->comprobarToken();

$request = json_decode(file_get_contents("php://input"), true);
$peliculas_favoritas = new PeliculasFavoritas();

if ($authorization->token_valido) {
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        if (isset($_GET['user_id'])) {
            $user_id = $_GET['user_id'];
            $data = $peliculas_favoritas->getFavoritas($user_id);
            $api_utils->response(200, 'Películas favoritas obtenidas', $data);
        } else {
            $api_utils->response(400, 'Parámetro user_id es requerido', null);
        }
    } elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if (
            isset($request['user_id']) &&
            isset($request['titulo']) &&
            isset($request['poster_path']) &&
            isset($request['release_date'])
        ) {
            $user_id = $request['user_id'];
            $titulo = $request['titulo'];
            $poster_path = $request['poster_path'];
            $release_date = $request['release_date'];

            $peliculas_favoritas->addFavorita($user_id, $titulo, $poster_path, $release_date);
            $api_utils->response(201, 'Película añadida a favoritos', null);
        } else {
            $api_utils->response(400, 'Parámetros user_id, titulo, poster_path y release_date son requeridos', null);
        }
    } elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
        if (isset($request['user_id']) && isset($request['titulo'])) {
            $user_id = $request['user_id'];
            $titulo = $request['titulo'];
        
            // ✅ Nombre de la función corregido
            $peliculas_favoritas->deleteFavorita($user_id, $titulo); 
            $api_utils->response(200, 'Película eliminada de favoritos', null);
        } else {
            $api_utils->response(400, 'Parámetros user_id y titulo son requeridos', null);
        }
    }
     else {
        $api_utils->response(405, 'Método no permitido', null);
    }
    } else {
        $api_utils->response(401, 'Token no válido', null);
    }

echo json_encode($api_utils->response, JSON_PRETTY_PRINT);
