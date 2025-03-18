<?php
require_once('interfaces/crud.php');
require_once('../conn.php');

class Favorito extends Conexion {

    function __construct() {
        parent::__construct();
    }

    // Obtener favoritos por usuario
    public function getByUserId($user_id) {
        try {
            $sql = $this->conexion->prepare("
                SELECT id, titulo, poster_path, release_date 
                FROM favoritos 
                WHERE user_id = :user_id
                ORDER BY release_date DESC
            ");

            $sql->bindParam(":user_id", $user_id, PDO::PARAM_INT);
            $sql->execute();
            $data = $sql->fetchAll(PDO::FETCH_ASSOC);

            return [
                "status" => true,
                "data" => $data,
                "message" => empty($data) ? "No hay favoritos registrados" : "Favoritos obtenidos correctamente"
            ];
        } catch (PDOException $e) {
            return ["status" => false, "message" => "Error: " . $e->getMessage()];
        }
    }

    // Crear favorito
    public function create($data) {
        try {
            $sql = $this->conexion->prepare("
                INSERT INTO favoritos (titulo, poster_path, release_date, user_id)
                VALUES (:titulo, :poster_path, :release_date, :user_id)
            ");

            $sql->bindParam(":titulo", $data['titulo'], PDO::PARAM_STR);
            $sql->bindParam(":poster_path", $data['poster_path'], PDO::PARAM_STR);
            $sql->bindParam(":release_date", $data['release_date'], PDO::PARAM_STR);
            $sql->bindParam(":user_id", $data['user_id'], PDO::PARAM_INT);

            $resultado = $sql->execute();

            return [
                "status" => $resultado,
                "message" => $resultado ? "Favorito guardado correctamente" : "Error al guardar el favorito"
            ];
        } catch (PDOException $e) {
            if ($e->getCode() == 23000) { // Error de clave duplicada (por UNIQUE KEY)
                return ["status" => false, "message" => "La película ya está en tus favoritos"];
            } else {
                return ["status" => false, "message" => "Error: " . $e->getMessage()];
            }
        }
    }

    // Eliminar favorito
    public function delete($id, $user_id) {
        try {
            $sql = $this->conexion->prepare("
                DELETE FROM favoritos 
                WHERE id = :id AND user_id = :user_id
            ");

            $sql->bindParam(":id", $id, PDO::PARAM_INT);
            $sql->bindParam(":user_id", $user_id, PDO::PARAM_INT);
            $resultado = $sql->execute();

            return [
                "status" => $resultado,
                "message" => $resultado ? "Favorito eliminado correctamente" : "Error al eliminar el favorito"
            ];
        } catch (PDOException $e) {
            return ["status" => false, "message" => "Error: " . $e->getMessage()];
        }
    }
}
