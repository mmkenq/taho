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

			case 'uploadFile': return $app->uploadFile();
			case 'updateCatalog': return $app->updateCatalog();
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
else if ($path["extension"] == "ttf") {
    header("Content-Type: font/ttf");
    readfile($_SERVER["SCRIPT_FILENAME"]);
}
else {
	$page = $_SERVER["REQUEST_URI"];
	if (preg_match('/api/', $page)){
		header("Content-Type: application/json");
		echo(json_encode(answer(router($_GET))));
	} 
	else if (strlen($page) == 1){
		echo '<!DOCTYPE html>';
		echo '<script>
			const config = {
				componentsEnabled: {
					headerEnabled: true,
					bannerEnabled: true,
					mainEnabled: true,
					catalogEnabled: false,
					adminEnabled: false,
				}
			}
		</script>';
		include_once './public_html/index.html';
	}
	else if (preg_match('/catalog/', $page)){
		echo '<!DOCTYPE html>';
		// TODO: call getCatalog()
		echo '<script>
			const config = {
				componentsEnabled: {
					headerEnabled: true,
					bannerEnabled: true,
					mainEnabled: false,
					catalogEnabled: true,
					adminEnabled: false,
				}
			}
		</script>';
		include_once './public_html/index.html';
	}
	else if (preg_match('/admin/', $page)){
		echo '<!DOCTYPE html>';
		echo '<script>
			const config = {
				componentsEnabled: {
					headerEnabled: false,
					bannerEnabled: false,
					mainEnabled: false,
					catalogEnabled: false,
					adminEnabled: true,
				}
			}
		</script>';
		include_once './public_html/index.html';
	}
    //return FALSE;
}

?>

