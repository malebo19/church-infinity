<?php


// header("Content-Type: application/xml; charset=utf-8");

// session_set_cookie_params(["SameSite" => "Strict"]); //none, lax, strict
// session_set_cookie_params(["Secure" => "true"]); //false, true
// session_set_cookie_params(["HttpOnly" => "true"]); //false, true



require_once("gmail.php");
require_once("db.php");

require_once 'form/Validator.php';


require_once('Twig/Autoloader.php');
Twig_Autoloader::register();

$loader = new Twig_Loader_Filesystem('views');

$twig = new Twig_Environment($loader, array(
    // 'cache' => 'cache',
    //   'strict_variables' => false,
    'debug' => true,
    'auto_reload' => true
));


// tamplate

function returnJson($data){
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data);
}

function view($file_name, $p = [])
{
    global $twig;
    $params=[];
    $params['session'] = $_SESSION;
    $params['post'] = $_POST;
    $params['get'] = $_GET;
    
    $result = array_merge($params, $p);
    echo $twig->render($file_name,$result);
}

