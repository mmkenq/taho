<?php
require_once("lib/simplexlsx-1.0.19/src/SimpleXLSX.php");
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

			case 'uploadCatalog': return $app->uploadCatalog();
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
	else if (preg_match('/catalog/', $page)){
		echo '<!DOCTYPE html>';
		echo '<script>
			headerEnabled=true;
			bannerEnabled=true;
			mainEnabled=false;
		</script>';
		include_once './public_html/index.html';
	}
	else if (preg_match('/admin/', $page)){
		include_once './public_html/admin.html';
	}
	else if (preg_match('/uploadCatalog/', $page)){
		include_once './public_html/admin.html';
		echo(json_encode(answer(router(array(
			'method'=>'uploadCatalog'
		)))));
	}
	else {
		echo '<!DOCTYPE html>';
		echo '<script>
			headerEnabled=true;
			bannerEnabled=true;
			mainEnabled=true;
		</script>';
		include_once './public_html/index.html';
	}
    //return FALSE;
}

?>

