<?php
require_once("./DB.php");

class Application {
	function __construct($config){
		$db = new DB($config['DB']);
		$this->db = $db;
	}

	public function uploadCatalog(){
		$name = $_FILES['catalogFileName']['name'];
		$tmp_name = $_FILES['catalogFileName']['tmp_name'];
		$new_name = 'catalog_glonass.xlsx';
		move_uploaded_file($tmp_name, "uploads/$new_name");

		$xlsx = new SimpleXLSX("uploads/$new_name");
		if ($xlsx->success()) { 
			return $this->db->uploadCatalog($xlsx->rows());
		} 
		else { return 'xlsx error: '.$xlsx->error(); }
	}

	public function getCatalog($params){
		if($params['name']) return $this->db->getCatalog($params['name']);
		else return 'ERR: NO NAME';
	}
}
?>
