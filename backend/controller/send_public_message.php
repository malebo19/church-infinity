<?php 

if(!isset($_POST["user_id"],$_POST["username"],$_POST["msg"],$_POST["msg_date"]))
{
    returnJson(["status"=>false,"message"=>"few value(s) provided"]);
    exit();
}

$user_id=$_POST["user_id"];
$username =$_POST["username"];
$msg=$_POST["msg"];
$msg_date=$_POST["msg_date"];

//check the user id if exist
$sql = "SELECT * FROM users WHERE user_id='$user_id'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) == 0) {
    returnJson(["status"=>false,"message"=>"invalid user id provided"]);
    exit();
}


