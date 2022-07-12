<?php
$servername = "localhost";
$username = "root";
$password = "";
$db="church";
// Create connection
$conn = mysqli_connect($servername, $username, $password,$db);

// Check connection
if (!$conn) {
  returnJson(["status"=>false,"message"=>"Error: fail to connect to the database"]);
}
?>