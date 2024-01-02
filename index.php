<?php
//header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
require_once("./Application.php");


function router($params){
	$method = $params['method'];
    if ($method) {
		$config = json_decode(file_get_contents('./config.json'), true);
        $app = new Application($config);
        switch ($method) {
            case 'check' : return true;
			case 'getCatalog': return $app->getCatalog($params);
        }
    }
    return false;
}

function answer($data) {
    if ($data) {
        return array(
            'result' => 'ok',
            'data' => $data
        );
    }
    return array(
        'result' => 'error'
    );
}


$path = pathinfo($_SERVER["SCRIPT_FILENAME"]);
if ($path["extension"] == "js") {
    header("Content-Type: text/javascript");
    readfile($_SERVER["SCRIPT_FILENAME"]);
}
//else if ($path["extension"] == "html") {
//    header("Content-Type: text/html");
//    readfile($_SERVER["SCRIPT_FILENAME"]);
//}
else if ($path["extension"] == "css") {
    header("Content-Type: text/css");
    readfile($_SERVER["SCRIPT_FILENAME"]);
}
else if ($path["extension"] == "gif" || 
		$path["extension"] == "jpg" || 
		$path["extension"] == "png")
{
    header("Content-Type: image/gif");
    readfile($_SERVER["SCRIPT_FILENAME"]);
}
else {
	$page = $_SERVER["REQUEST_URI"];
	if (preg_match('/api/', $page)){
		header("Content-Type: application/json");
		echo(json_encode(answer(router($_GET))));
	} 
	else if (preg_match('/catalog_glonass/', $page)){
		include_once './public_html/catalog.html';
		echo "<script>console.log('TODO: call some showGLONASSfunction()');</script>";
	}
	else if (preg_match('/catalog_cameras/', $page)){
		include_once './public_html/catalog.html';
		echo "<script>console.log('TODO: call some showCAMERASfunction()');</script>";
	}
	else {
		include_once './public_html/index.html';
	}
    //return FALSE;
}

?>

