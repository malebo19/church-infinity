<?php 

if(!isset($_POST["user_id"],$_POST["group_name"],$_POST["group_descrip"]))
{
    returnJson(["status"=>false,"message"=>"few value(s) provided"]);
    exit();
}

$user_id=$_POST["user_id"];
$group_name=strtolower($_POST["group_name"]);
$group_descrip=$_POST["group_descrip"];

//check the user id and type if exist
$sql = "SELECT * FROM users WHERE `id`='$user_id' AND `type`='admin'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) == 0) {
    returnJson(["status"=>false,"message"=>"Error: have no rights"]);
    exit();
}

//check group name
$sql = "SELECT * FROM groups WHERE `name`='$group_name'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) >0) {
    returnJson(["status"=>false,"message"=>"Group '$group_name' Name Exist"]);
    exit();
}


$sql = "INSERT INTO groups (`name`,`descrip`)VALUES ('$group_name', '$group_descrip')";
if (!mysqli_query($conn, $sql)) {
    returnJson(["status"=>false,"message"=>"fail to create a group".mysqli_error($conn)]);
    exit();
} 
returnJson(["status"=>true,"message"=>"group created"]);

