<?php
require_once('interfaces/crud.php');
require_once('../conn.php');

class Favorito extends Conexion {

    function __construct() {
        parent::__construct();
    }

    // Obtener todos los favoritos
    public function getAll() {
        try {
            $sql = $this->conexion->prepare("SELECT * FROM favoritos ORDER BY id DESC");
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

    // Añadir un favorito
    public function create($data) {
        try {
            $sql = $this->conexion->prepare("INSERT INTO favoritos (id, titulo, poster_path, release_date) 
                                             VALUES (:id, :titulo, :poster_path, :release_date)");

            $sql->bindParam(":id", $data['id'], PDO::PARAM_INT);
            $sql->bindParam(":titulo", $data['titulo'], PDO::PARAM_STR);
            $sql->bindParam(":poster_path", $data['poster_path'], PDO::PARAM_STR);
            $sql->bindParam(":release_date", $data['release_date'], PDO::PARAM_STR);

            $resultado = $sql->execute();

            return [
                "status" => $resultado,
                "message" => $resultado ? "Favorito añadido correctamente" : "Error al añadir favorito"
            ];
        } catch (PDOException $e) {
            return ["status" => false, "message" => "Error: " . $e->getMessage()];
        }
    }

    // Eliminar un favorito
    public function delete($id) {
        try {
            $sql = $this->conexion->prepare("DELETE FROM favoritos WHERE id = :id");
            $sql->bindParam(":id", $id, PDO::PARAM_INT);
            $resultado = $sql->execute();

            return [
                "status" => $resultado,
                "message" => $resultado ? "Favorito eliminado correctamente" : "Error al eliminar favorito"
            ];
        } catch (PDOException $e) {
            return ["status" => false, "message" => "Error: " . $e->getMessage()];
        }
    }
}
?>
