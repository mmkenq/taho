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
			case 'sendEmail': return $app->sendEmail($params);
			case 'sendNotifGNSSAct': return $app->sendNotifGNSSAct($params);
			case 'sendNotifDmUs': return $app->sendNotifDmUs($params);
			case 'sendNotifPayment': return $app->sendNotifPayment($params);

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
$mime_types = [
  "gif" => "image/gif",
  "jpg" => "image/jpeg",
  "jpeg" => "image/jpeg",
  "webp" => "image/webp",
  "png" => "image/png",
  "js" => "text/javascript",
  "css" => "text/css",
  "ttf" => "font/ttf",
];

if (isset($mime_types[$path["extension"]])) {
    header("Content-Type: " . $mime_types[$path["extension"]]);
    readfile($_SERVER["SCRIPT_FILENAME"]);
    exit;
}
else {
	$page = $_SERVER["REQUEST_URI"];
	if (preg_match('/api/', $page)){
		header("Content-Type: application/json");
		echo(json_encode(answer(router($_GET))));
	} 
    else {
        header('Content-Type: text/html; charset=UTF-8');
        if (strlen($page) == 1){
            echo '<!DOCTYPE html>';
            echo '<script>
                const config = {
                    componentsEnabled: {
                        headerEnabled: true,
                        bannerEnabled: true,
                        mainEnabled: true,
                        catalogEnabled: false,
                        adminEnabled: false,
                        contactEnabled: true,
                        footerEnabled: true,
                        policyEnabled: false,
                    }
                }
            </script>';
            include_once './public_html/index.html';
        }
        if (preg_match('/catalog/', $page)){
            echo '<!DOCTYPE html>';
            echo '<script>
                const config = {
                    componentsEnabled: {
                        headerEnabled: true,
                        bannerEnabled: true,
                        mainEnabled: false,
                        catalogEnabled: true,
                        adminEnabled: false,
                        contactEnabled: true,
                        footerEnabled: true,
                        policyEnabled: false,
                    }
                }
            </script>';
            include_once './public_html/index.html';
        }
        if (preg_match('/admin/', $page)){
            echo '<!DOCTYPE html>';
            echo '<script>
                const config = {
                    componentsEnabled: {
                        headerEnabled: false,
                        bannerEnabled: false,
                        mainEnabled: false,
                        catalogEnabled: false,
                        adminEnabled: true,
                        contactEnabled: false,
                        footerEnabled: true,
                        policyEnabled: false,
                    }
                }
            </script>';
            include_once './public_html/index.html';
        }
        if (preg_match('/glonass/', $page)){
            echo '<!DOCTYPE html>';
            echo '<script>
                const config = {
                    componentsEnabled: {
                        headerEnabled: true,
                        bannerEnabled: true,
                        mainEnabled: false,
                        catalogEnabled: false,
                        adminEnabled: false,
                        contactEnabled: true,
                        glonassEnabled: true,
                        policyEnabled: false,
                        footerEnabled: true,
                    }
                }
            </script>';
            include_once './public_html/index.html';
        }
        if (preg_match('/policy/', $page)){
            echo '<!DOCTYPE html>';
            echo '<script>
                const config = {
                    componentsEnabled: {
                        headerEnabled: true,
                        bannerEnabled: true,
                        mainEnabled: false,
                        catalogEnabled: false,
                        adminEnabled: false,
                        contactEnabled: true,
                        glonassEnabled: false,
                        policyEnabled: true,
                        footerEnabled: true,
                    }
                }
            </script>';
            include_once './public_html/index.html';
        }
    }
    //return FALSE;
}

?>

