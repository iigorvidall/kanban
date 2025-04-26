<?php

namespace Models;

require_once __DIR__ . '/../../vendor/autoload.php';

use JsonSerializable;

class Usuario implements JsonSerializable{
    private $idUsuario;
    private $nome;
    private $email;
    private $senha;
    private $dataCadastro;

    function __construct(){

    }

    //setters
    function setIdUsuario($idUsuario){
        $this->idUsuario = $idUsuario;
    }

    function setNomeUsuario($nomeUsario){
        $this->nome = $nomeUsario;
    }

    function setEmail($email){
        $this->email = $email;
    }

    function setSenha($senha){
        $this->senha = $senha;
    }

    function setDataCadastro($dataCadastro){
        $this->dataCadastro = $dataCadastro;
    }

    //getters
    function getIdUsuario(){
        return $this->idUsuario;
    }

    function getNomeUsuario(){
        return $this->nome;
    }

    function getEmail(){
        return $this->email;
    }

    function getSenha(){
        return $this->senha;
    }

    function getDataCadastro(){
        return $this->dataCadastro;
    }

    //jsonSerializable
    function jsonSerialize(): mixed {
        return [
            'idUsuario' => $this->getIdUsuario(),
            'nomeUsuario' => $this->getNomeUsuario(),
            'email' => $this->getEmail(),
            'senha' => $this->getSenha(),
            'dataCadastro' => $this->getDataCadastro()
        ];
    }

}

?>