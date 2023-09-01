<?php
require_once("./DB.php");

class Application {
	function __construct($config){
		$db = new DB($config['DB']);
		$this->db = $db;
	}

	private function taho(){
	}

	public function getCatalog($params){
		if($params['name']) return $this->db->getCatalog($params['name']);
		else return 'ERR: NO NAME';
	}
}
?>
