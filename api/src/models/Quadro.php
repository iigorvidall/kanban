<?php

namespace Models;

require_once __DIR__ . '/../../vendor/autoload.php';

use JsonSerializable;

class Quadro implements JsonSerializable{
    private $idQuadro;
    private $nome;
    private $descricaoQuadro;
    private $fkCriador;
    private $dataCriacao;

    function __construct($idQuadro = 0, $nome, $descricaoQuadro, $fkCriador, $dataCriacao){
        $this->setIdQuadro($idQuadro);
        $this->setNomeQuadro($nome);
        $this->setDescricaoQuadro($descricaoQuadro);
        $this->setFkCriador($fkCriador);
        $this->setDataCriacao($dataCriacao);
    }

    //setters
    function setIdQuadro($idQuadro){
        $this->idQuadro = $idQuadro;
    }

    function setNomeQuadro($nomeQuadro){
        $this->nome = $nomeQuadro;
    }

    function setDescricaoQuadro($descricaoQuadro){
        $this->descricaoQuadro = $descricaoQuadro;
    }

    function setFkCriador($fkCriador){
        $this->fkCriador = $fkCriador;
    }

    function setDataCriacao($dataCriacao){
        $this->dataCriacao = $dataCriacao;
    }

    //getters
    function getIdQuadro(){
        return $this->idQuadro;
    }

    function getNomeQuadro(){
        return $this->nome;
    }

    function getDescricaoQuadro(){
        return $this->descricaoQuadro;
    }

    function getFkCriador(){
        return $this->fkCriador;
    }

    function getDataCiacao(){
        return $this->dataCriacao;
    }

    //jsonSerializable
    function jsonSerialize(): mixed{
        return [
            'idquadro' => $this->getIdQuadro(),
            'nomeQuadro' => $this->getNomeQuadro(),
            'descricaoQuadro' => $this->getDescricaoQuadro(),
            'fkCriador' => $this->getFkCriador(),
            'dataCriacao' => $this->getDataCiacao() 
        ];
    }

}

?>