<?php
require_once('../conn.php');

class PeliculasFavoritas extends Conexion {

    private $table_name = "favoritos";

    public function __construct() {
        parent::__construct();
    }

    public function getFavoritas($user_id) {
        $query = "SELECT id, titulo, poster_path, release_date 
                  FROM " . $this->table_name . " 
                  WHERE user_id = :user_id";
        $stmt = $this->conexion->prepare($query);
        $stmt->bindValue(':user_id', $user_id, PDO::PARAM_INT);
        $stmt->execute();

        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $data;
    }

    public function addFavorita($user_id, $titulo, $poster_path, $release_date) {
        $query = "INSERT INTO " . $this->table_name . " (titulo, poster_path, release_date, user_id) 
                  VALUES (:titulo, :poster_path, :release_date, :user_id)";
        $stmt = $this->conexion->prepare($query);
        $stmt->bindValue(':titulo', $titulo, PDO::PARAM_STR);
        $stmt->bindValue(':poster_path', $poster_path, PDO::PARAM_STR);
        $stmt->bindValue(':release_date', $release_date, PDO::PARAM_STR);
        $stmt->bindValue(':user_id', $user_id, PDO::PARAM_INT);
        $stmt->execute();
    }

    public function deleteFavorita($user_id, $titulo) {
        $query = "DELETE FROM " . $this->table_name . " 
                  WHERE titulo = :titulo AND user_id = :user_id";
        $stmt = $this->conexion->prepare($query);
        $stmt->bindValue(':titulo', $titulo, PDO::PARAM_STR);
        $stmt->bindValue(':user_id', $user_id, PDO::PARAM_INT);
        $stmt->execute();
    }
}
