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
}
?>
