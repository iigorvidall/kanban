<?php

namespace Controllers;

use Utils\HttpResponses;

class EvaluateController{

    function ping(){

        $body = [
            'status' => 'pong'
        ];

        HttpResponses::ok($body);
    }
}

?>