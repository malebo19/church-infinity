<?php 
    $db = new mysqli('localhost', 'root', '', 'church');
    if ($db->connect_error) {
        die('Connect Error: ' . $db->connect_error);
    }

?>