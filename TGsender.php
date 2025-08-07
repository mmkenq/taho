<?php

class TGsender {
	function __construct($config_tg){
        $this->token = $config_tg["token"];
        $this->chat_id = $config_tg["chat_id"];
        $this->dm_us_thread = $config_tg["dm_us_thread"];
        $this->gnns_act_thread = $config_tg["gnns_act_thread"];
        $this->payments_thread = $config_tg["payments_thread"];

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

	private function sendNotif($msg, $thread_id){
        $url = "https://api.telegram.org/bot{$this->token}/sendMessage";

        // Параметры запроса
        $postFields = [
            'chat_id' => $this->chat_id,
            'message_thread_id' => $thread_id,
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

    public function sendNotifDmUs($params){
        $msg = 
            "Уведомление: Просят связаться\n\n" .
            "Имя:\n<code>" . $_POST['name'] . "</code>\n" . 
			"Телефон:\n" . $_POST['phone'] . "\n" . 
			"Email:\n" . $_POST['email'] . "\n" . 
			"Сообщение:\n" . $_POST['message'] . "\n" . 
			"Согласен с политикой конфиденциальности:\n" . $_POST['policy'];

		// use wordwrap() if lines are longer than 70 characters
		$msg = wordwrap($msg,70);
        return $this->sendNotif($msg, $this->dm_us_thread);
	}
    public function sendNotifGNSSAct($params){
        $msg = 
            "Уведомление: Заявка на активацию глонасс\n\n" .
            "ФИО: \n<code>" . $_POST['name'] . "</code>\n" . 
            "Адрес регистрации: \n<code>" . $_POST['regaddress'] . "</code>\n" . 
            "Серия паспорта: \n<code>" . $_POST['passport_s'] . "</code>\n" . 
            "Номер паспорта: \n<code>" . $_POST['passport_n'] . "</code>\n" . 
            "Выдан: \n<code>" . $_POST['issued'] . "</code>\n" . 
            "Дата выдачи: \n<code>" . $_POST['date'] . "</code>\n" . 
			"Телефон:\n" . $_POST['phone'] . "\n" . 
			"Email:\n" . $_POST['email'] . "\n" . 
            "ID абонентского терминала: \n<code>" . $_POST['term_id'] . "</code>\n" . 
            "Марка, модель ТС: \n<code>" . $_POST['model'] . "</code>\n" . 
            "Госномер ТС: \n<code>" . $_POST['car_id'] . "</code>\n" . 
			'Согласен с политикой конфиденциальности: ' . $_POST['policy'];

		// use wordwrap() if lines are longer than 70 characters
		$msg = wordwrap($msg,100);
        return $this->sendNotif($msg, $this->gnns_act_thread);
	}
    public function sendNotifPayment($params){
        $msg = 
            "Уведомление: перешли по ссылке тинькофф\n\n" .
            "ФИО плательщика: \n<code>" . $_POST['name'] . "</code>\n" . 
			"Сумма:\n<b>" . $_POST['orderamount'] . "</b> руб.\n" . 
			"Описание:\n" . $_POST['description'] . "\n" . 
			"Email:\n" . $_POST['paymentemail'] . "\n" . 
			"Контактный телефон:\n" . $_POST['payphone'] . "\n" . 
			"Согласен с политикой конфиденциальности:\n" . $_POST['policy'];

		// use wordwrap() if lines are longer than 70 characters
		$msg = wordwrap($msg,100);
        return $this->sendNotif($msg, $this->payments_thread);
	}
}
?>
