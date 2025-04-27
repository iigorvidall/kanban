<?php

namespace Models;

require_once __DIR__ . '/../../vendor/autoload.php';

use JsonSerializable;

class Tarefa implements JsonSerializable{
    private $idTarefa;
    private $titulo;
    private $descricao;
    private $status;
    private $dataCriacao;
    private $dataConclusao;

    function __construct($idTarefa, $titulo, $descricao, $status, $dataCriacao, $dataConclusao){
        $this->setIdTarefa($idTarefa);
        $this->setTitulo($titulo);
        $this->setDescricao($descricao);
        $this->setStatus($status);
        $this->setDataCriacao($dataCriacao);
        $this->setDataConclusao($dataConclusao);
    }

    //setters
    function setIdTarefa($idTarefa){
        $this->idTarefa = $idTarefa;
    }

    function setTitulo($titulo){
        $this->titulo = $titulo;
    }

    function setDescricao($descricao){
        $this->descricao = $descricao;
    }

    function setStatus($status){
        $this->status = $status;
    }

    function setDataCriacao($dataCriacao){
        $this->dataCriacao = $dataCriacao;
    }

    function setDataConclusao($dataConclusao){
        $this->dataConclusao = $dataConclusao;
    }


    //getters
    function getIdTarefa(){
        return $this->idTarefa;
    }

    function getTitulo(){
        return $this->titulo;
    }

    function getDescricao(){
        return $this->descricao;
    }

    function getStatus(){
        return $this->status;
    }

    function getDataCriacao(){
        return $this->dataCriacao;
    }

    function getDataConclusao(){
        return $this->dataConclusao;
    }

    //jsonSerializable
    function jsonSerialize(): mixed {
        return [
            'idTarefa' => $this->getIdTarefa(),
            'tituloTarefa' => $this->getTitulo(),
            'descricaoTarefa' => $this->getDescricao(),
            'statusTarefa' => $this->getStatus(),
            'dataCriacao' => $this->getDataCriacao(),
            'dataConclusao' => $this->getDataConclusao() 
        ];
    }
}

?>