<?php

require_once __DIR__ . '/vendor/autoload.php';

//controladores

use Controllers\EvaluateController;
use Controllers\UsuarioController;

//Utils
use Utils\HttpResponses;

$url = isset($_GET['url']) ? $_GET['url'] : '';

if (!empty($url)) {
    $url = rtrim($url, '/');
    $url_parts = explode('/', $url);
    
    $recurso = isset($url_parts[0]) ? $url_parts[0] : '';
    
    $acao = isset($url_parts[1]) ? $url_parts[1] : 'index';
    
    switch ($recurso) {
        case 'evaluate':
            $controller = new EvaluateController();
            break;
        case 'usuario':            
            $controller = new UsuarioController();//instanciar o controlardor aqui
            break;          
        default:
            $controller = null;
            break;
    }
    
    if ($controller && method_exists($controller, $acao)) {
        
        $params = array_slice($url_parts, 2);
        call_user_func_array([$controller, $acao], $params);
    } else {
        HttpResponses::notFound();
    }
} else {
    HttpResponses::notFound();
    exit;
}

?>