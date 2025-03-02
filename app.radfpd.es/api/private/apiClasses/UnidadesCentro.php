<?php
require_once("conn.php");

class UnidadesCentro {
    public $status = 200;
    public $message = "OK";
    public $data = [];

    // Obtener todas las unidades centro
    public function get($id_ciclo = 0) {
        global $conn;
        $sql = "SELECT * FROM sgi_unidades_centro";
        if ($id_ciclo > 0) {
            $sql .= " WHERE id_ciclo = ?";
        }
        $stmt = $conn->prepare($sql);
        if ($id_ciclo > 0) {
            $stmt->bind_param("i", $id_ciclo);
        }
        $stmt->execute();
        $result = $stmt->get_result();
        $this->data = $result->fetch_all(MYSQLI_ASSOC);
    }

    // Crear una nueva unidad centro
    public function create($request) {
        global $conn;
        $sql = "INSERT INTO sgi_unidades_centro (unidad_centro, id_ciclo, observaciones) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sis", $request["unidad_centro"], $request["id_ciclo"], $request["observaciones"]);
        if ($stmt->execute()) {
            $this->message = "Unidad centro creada con éxito";
        } else {
            $this->status = 500;
            $this->message = "Error al crear la unidad centro";
        }
    }

    // Actualizar una unidad centro
    public function update($request) {
        global $conn;
        $sql = "UPDATE sgi_unidades_centro SET unidad_centro = ?, id_ciclo = ?, observaciones = ? WHERE id_unidad_centro = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sisi", $request["unidad_centro"], $request["id_ciclo"], $request["observaciones"], $request["id_unidad_centro"]);
        if ($stmt->execute()) {
            $this->message = "Unidad centro actualizada con éxito";
        } else {
            $this->status = 500;
            $this->message = "Error al actualizar la unidad centro";
        }
    }

    // Eliminar una unidad centro
    public function delete($id) {
        global $conn;
        $sql = "DELETE FROM sgi_unidades_centro WHERE id_unidad_centro = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        if ($stmt->execute()) {
            $this->message = "Unidad centro eliminada con éxito";
        } else {
            $this->status = 500;
            $this->message = "Error al eliminar la unidad centro";
        }
    }
}
?>
