<?php

class DB {
	function __construct($config_db){
        $this->host = $config_db["host"];
        $this->port = $config_db["port"];
        $this->name = $config_db["name"];
        $this->user = $config_db["user"];
        $this->password = $config_db["password"];

        try {
            $this->db = new PDO(
				'mysql:host=' . $this->host
				. ';port=' . $this->port
			   	. ';dbname=' . $this->name,
                $this->user,
                $this->password
            );
        } catch (Exception $e) {
            print_r('ERROR CONNECTION TO DB: ' . $e);
            die;
        }
	}

    function __destruct() {
        $this->db = null;
    }

    private function getArray($query) {
        $stmt = $this->db->query($query);
        if ($stmt) {
            $result = array();
            while ($row = $stmt->fetch(PDO::FETCH_OBJ)) {
                $result[] = $row;
            }
            return $result;
        }
    }

	public function getCatalog($name){
		$query = 'SELECT * FROM ' . $name;
		return $this->getArray($query);
	}

	public function updateCatalog($rows){
		$query = 'TRUNCATE TABLE taho_catalog_glonass';
		$this->db->query($query);

		$query = 'INSERT INTO taho_catalog_glonass 
		   ('.$rows[0][0].
			','.$rows[0][1].
			','.$rows[0][2].
			','.$rows[0][3].
			','.$rows[0][4].')'.
		   ' VALUES';

		$len = count($rows);
		for($i = 1; $i<$len; $i++){
			$value = ' ('.$rows[$i][0].
			',"'.$rows[$i][1].'"'.
			','.$rows[$i][2].
			','.$rows[$i][3].
			',"'.$rows[$i][4].'"),';
			$query .= $value;
		}
		$query = substr_replace($query, ";", -1);
		return $this->db->query($query);
	}
}
?>
