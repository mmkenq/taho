<?php

class TGsender {
	function __construct($config_tg){
        $this->token = $config_tg["token"];
        $this->chat_id = $config_tg["chat_id"];

        #try {
        #    $this->db = new PDO(
		#		'mysql:host=' . $this->host
		#		. ';port=' . $this->port
		#	   	. ';dbname=' . $this->name,
        #        $this->user,
        #        $this->password
        #    );
        #} catch (Exception $e) {
        #    print_r('ERROR CONNECTION TO DB: ' . $e);
        #    die;
        #}
	}

    function __destruct() {
        $this->token = null;
        $this->chat_id = null;
    }

#    private function getArray($query) {
#        $stmt = $this->db->query($query);
#        if ($stmt) {
#            $result = array();
#            while ($row = $stmt->fetch(PDO::FETCH_OBJ)) {
#                $result[] = $row;
#            }
#            return $result;
#        }
#    }

	private function sendNotif($msg){
        $url = "https://api.telegram.org/bot{$this->token}/sendMessage";

        // Параметры запроса
        $postFields = [
            'chat_id' => $this->chat_id,
            'text' => $msg,
            'parse_mode' => 'HTML',
        ];

        // Инициализация cURL
        $ch = curl_init();
        curl_setopt_array($ch, [
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            // Указываем, что запрос POST
            CURLOPT_POST => true, 
            CURLOPT_POSTFIELDS => http_build_query($postFields),
            CURLOPT_HTTPHEADER => [
                'Content-Type: application/x-www-form-urlencoded',
            ],
        ]);
        $response = curl_exec($ch);

        if ($response === false) {
            return "Ошибка cURL: " . curl_error($ch);
        } else {
            $responseData = json_decode($response, true);
            if ($responseData && isset($responseData['ok']) && $responseData['ok']) {
                return "Сообщение успешно отправлено!";
            } else {
                return "Ошибка отправки сообщения: " . ($responseData['description'] ?? 'Неизвестная ошибка');
            }
        }

        curl_close($ch);
        return 'ERR: Uknown';
	}

    public function sendNotifGNSSAct($params){
        $msg = 'VIN: <code>' . $_POST['vin'] . "</code>\n" . 
			'Email: ' . $_POST['email'] . '\n' . 
			'Согласен с политикой конфиденциальности: ' . $_POST['policy'];

		// use wordwrap() if lines are longer than 70 characters
		$msg = wordwrap($msg,70);
        return $this->sendNotif($msg);
	}
    public function sendNotifDmUs($params){
        return $this->sendNotif($params);
	}
    public function sendNotifPayment($params){
        return $this->sendNotif($params);
	}
}
?>
