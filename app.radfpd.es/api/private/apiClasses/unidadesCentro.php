<?php
require_once(__DIR__ . '/../../conn.php');

class UnidadesCentro extends Conexion {
    
    public function getUnidadesCentro() {
        $sql = "SELECT uc.id_unidad_centro, uc.unidad_centro, uc.id_ciclo, c.ciclo AS nombre_ciclo, uc.observaciones 
        FROM sgi_unidades_centro uc
        INNER JOIN sgi_ciclos c ON uc.id_ciclo = c.id_ciclo";
        $stmt = $this->conexion->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function createUnidadCentro($unidad_centro, $id_ciclo, $observaciones) {
        $sql = "INSERT INTO sgi_unidades_centro (unidad_centro, id_ciclo, observaciones) 
                VALUES (:unidad_centro, :id_ciclo, :observaciones)";
        $stmt = $this->conexion->prepare($sql);
        $stmt->bindParam(":unidad_centro", $unidad_centro);
        $stmt->bindParam(":id_ciclo", $id_ciclo);
        $stmt->bindParam(":observaciones", $observaciones);
        return $stmt->execute();
    }

    public function updateUnidadCentro($id_unidad_centro, $unidad_centro, $id_ciclo, $observaciones) {
        $sql = "UPDATE sgi_unidades_centro 
                SET unidad_centro = :unidad_centro, id_ciclo = :id_ciclo, observaciones = :observaciones 
                WHERE id_unidad_centro = :id_unidad_centro";
        $stmt = $this->conexion->prepare($sql);
        $stmt->bindParam(":id_unidad_centro", $id_unidad_centro);
        $stmt->bindParam(":unidad_centro", $unidad_centro);
        $stmt->bindParam(":id_ciclo", $id_ciclo);
        $stmt->bindParam(":observaciones", $observaciones);
        return $stmt->execute();
    }

    public function deleteUnidadCentro($id_unidad_centro) {
        $sql = "DELETE FROM sgi_unidades_centro WHERE id_unidad_centro = :id_unidad_centro";
        $stmt = $this->conexion->prepare($sql);
        $stmt->bindParam(":id_unidad_centro", $id_unidad_centro);
        return $stmt->execute();
    }
}
?>
