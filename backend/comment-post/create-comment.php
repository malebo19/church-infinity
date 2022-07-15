<?php 

if(!isset($_POST["user_id"],$_POST["message_id"],$_POST["comment"],$_POST["username"]))
{
    returnJson(["status"=>false,"message"=>"few value(s) provided"]);
    exit();
}

$user_id=$_POST["user_id"];
$message_id=$_POST["message_id"];
$comment=strtolower($_POST["comment"]);
$username=strtolower($_POST["username"]);

//check the user id exist
$sql = "SELECT * FROM users WHERE `id`='$user_id'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) == 0) {
    returnJson(["status"=>false,"message"=>"Error: have no rights"]);
    exit();
}

//check group name
$sql = "INSERT INTO `post-comments`(`message_id`, `comment`, `username`) VALUES ('$message_id','$username','$username')";
$result = mysqli_query($conn, $sql);
if ($result==false) {
    returnJson(["status"=>false,"message"=>"fail to create a comment".mysqli_error($conn)]);
    exit();
}
returnJson(["status"=>true,"message"=>"comment created"]);

