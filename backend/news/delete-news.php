<?php

if(!isset($_POST["user_id"],$_POST["news_id"]))
{
    returnJson(["status"=>false,"message"=>"few value(s) provided"]);
    exit();
}

$user_id=$_POST["user_id"];
$news_id=$_POST["news_id"];

//check the user id and type if exist
$sql = "SELECT * FROM users WHERE `id`='$user_id' AND `type`='admin'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) == 0) {
    returnJson(["status"=>false,"message"=>"Error: have no rights"]);
    exit();
}


$sql = "DELETE FROM `news` WHERE  `id`='$news_id'";
if (!mysqli_query($conn, $sql)) {
    returnJson(["status"=>false,"message"=>"Error: failed to removed news"]);
    exit();
}
returnJson(["status"=>true,"message"=>"news removed"]);
