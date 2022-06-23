<?php 

// // connect to sql
// $conn = mysqli_connect("localhost", "root", "", "ci_admin");

// // check connection
// if (!$conn) {
//     die("Connection failed: " . mysqli_connect_error());
// }


$servername = "localhost";
$username = "root";
$password = "";
$db = "ci_admin";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $db);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

?>