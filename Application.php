<?php
require_once("./DB.php");

class Application {

	function __construct($config){
		$this->CATALOG_GLONASS_NAME = 'catalog_glonass.xlsx';

		$db = new DB($config['DB']);
		$this->db = $db;
	}

	public function getCatalog($params){
		if(!$params['name']) return 'ERR: NO NAME';
		return $this->db->getCatalog($params['name']);
	}

	public static function sendEmail($params){
		$to = 'roma174254@gmail.com'; 
		$sbj = 'TAHOGRAF ЗАЯВКА';
		$msg = 'Имя: ' . $params['name'] . '\n' . 
			'Телефон: ' . $params['phone'] . '\n' . 
			'Email: ' . $params['email'] . '\n' . 
			'Сообщение: ' . $params['text'] . 
			'Согласен с политикой конфиденциальности: ' . $params['policy'];

		// use wordwrap() if lines are longer than 70 characters
		$msg = wordwrap($msg,70);

		if(!mail($to, $sbj, $msg)) return 'ERR: EMAIL WASN\'T SENT';
		return true;
	}

	public function uploadFile(){
		$name = $_FILES['fileNo0']['name'];
		$tmp_name = $_FILES['fileNo0']['tmp_name'];
		$new_name = $this->CATALOG_GLONASS_NAME;
		move_uploaded_file($tmp_name, "uploads/$new_name");
		return true;
	}

	public function updateCatalog(){
		$name = $this->CATALOG_GLONASS_NAME;
		$xlsx = new SimpleXLSX("uploads/$name");
		if ($xlsx->success()) { 
			return $this->db->updateCatalog($xlsx->rows());
		} 
		else { return 'xlsx error: '.$xlsx->error(); }
	}

}
?>
