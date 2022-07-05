<?php
if(!isset($_POST["user_id"],$_POST["event_id"]))
{
    returnJson(["status"=>false,"message"=>"few value(s) provided"]);
    exit();
}
$user_id=$_POST["user_id"];
$event_id=$_POST["event_id"];

//check the user id and type if exist
$sql = "SELECT * FROM users WHERE `id`='$user_id' AND `type`='admin'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) == 0) {
    returnJson(["status"=>false,"message"=>"Error: have no rights"]);
    exit();
}


$sql = "DELETE FROM `event` WHERE `id`='$event_id'";

if (!mysqli_query($conn, $sql)) {
    returnJson(["status"=>false,"message"=>"Error: failed to removed event"]);
    exit();
}
returnJson(["status"=>true,"message"=>"event removed"]);
