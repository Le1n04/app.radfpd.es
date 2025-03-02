<?php

require_once('interfaces/crud.php');
require_once('../conn.php');

class Familia extends Conexion implements crud {

    public $status = false;
    public $message = NULL;
    public $data = NULL;
    const ROUTE = 'familia';

    function __construct (){
        parent::__construct();
    }

    public function get() {
        $order = " ORDER BY familia ";
        $sql = $this->conexion->prepare("SELECT * FROM sgi_familias".$order);

        $exito = $sql->execute();

        if($exito) {
            $this->status = true;
            $this->data =  $sql->fetchAll(PDO::FETCH_ASSOC);
        }

        $this->closeConnection();

    }

    public function create($data) {
        $familia = $data['familia'];
        $observaciones = $data['observaciones'];
        $cod_familia = $data['cod_familia'];

        if (isset($familia, $cod_familia)) {
            $sql = $this->conexion->prepare("INSERT INTO sgi_familias (familia, observaciones, cod_familia)
                    VALUES (:familia, :observaciones, :cod_familia)");
            $sql->bindParam(":familia", $familia, PDO::PARAM_STR);
            $sql->bindParam(":observaciones", $observaciones, PDO::PARAM_STR);
            $sql->bindParam(":cod_familia", $cod_familia, PDO::PARAM_STR);

            $resultado = $sql->execute();
            if ($resultado) {
                $this->status = true;
                $this->message = "Familia creada correctamente";
            } else {
                $this->message = "Error al crear la familia";
            }

            $this->closeConnection();
        }
    }


    public function update($data) {
        $idFamilia = $data['id_familia'];
        $familia = $data['familia'];
        $observaciones = $data['observaciones'];
        $cod_familia = $data['cod_familia'];
    
        if (isset($familia, $cod_familia)) {
            $sql = $this->conexion->prepare("UPDATE sgi_familias SET
                    familia = :familia,
                    observaciones = :observaciones,
                    cod_familia = :cod_familia
                    WHERE id_familia = :idFamilia");
            
            $sql->bindParam(":familia", $familia, PDO::PARAM_STR);
            $sql->bindParam(":observaciones", $observaciones, PDO::PARAM_STR);
            $sql->bindParam(":cod_familia", $cod_familia, PDO::PARAM_STR);
            $sql->bindParam(":idFamilia", $idFamilia, PDO::PARAM_INT);
    
            $resultado = $sql->execute();
            if ($resultado) {
                $this->status = true;
                $this->message = "Familia actualizada correctamente";
            } else {
                $this->message = "Error al actualizar la familia";
            }
    
            $this->closeConnection();
        }
    }
    

    public function delete($idFamilia) {
        if (isset($idFamilia)) {
            try {
                $sql = $this->conexion->prepare("DELETE FROM sgi_familias WHERE id_familia = :idFamilia");
                $sql->bindParam(":idFamilia", $idFamilia, PDO::PARAM_INT);

                $resultado = $sql->execute();
                if ($resultado) {
                    $this->status = true;
                    $this->message = DELETE_MODO_REUNION_OK;
                    $this->data = $idFamilia;
                } else { $this->message = DELETE_MODO_REUNION_KO; }
            } catch(PDOException $e) {
                if ($e->getCode() == '23000'){
                    $this->message = CONSTRAINT_MODO_REUNION;
                }
            }
            $this->closeConnection();
        }
    }

}

?>