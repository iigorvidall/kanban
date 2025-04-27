<?php

namespace Interfaces;

use Models\Usuario;

/**
 * Interface para classe DaoUsuario
 * Define os métodos que a classe DaoUsuario deve implementar
 */
interface DaoUsuarioInterface{

    /**
     * Cadastra um novo usuario
     * @param Usuario Objeto usuario
     * @return Usuario caso o cadastro seja efetuado com sucesso, deve retornar o objeto usuario com o ID preenchido
     * @throws Exception caso o cadastro falhe
     */
    function cadastrarUsuario(Usuario $usuario): Usuario;

    /**
     * Selecionar usuario pelo ID
     * @param int ID do usuario que deseja selecionar
     * @return Usuario objeto usuario preenchido com os dados consultados
     * @throws Exception caso a consulta falhe por algum motivo
     */
    function selecionarUsuario(int $idUsuario): Usuario;

    /**
     * Excluir um usuário 
     * @param Usuario  que será excluido, é recomendado consultar o usuário antes da exclusão
     * @return void não existe retorno para essa função
     * @throws Exception caso a exclusão falhe 
     */
    function excluirUsuario(Usuario $usuario): void;

    /**
     * Listar usuários cadastrados 
     * @return array|null com todos os usuários cadastrados
     * @throws Exception caso a listagem dos usuários falhe
     */
    function listarUsuarios(): ?array;

}

?>