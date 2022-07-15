<?php
if(!isset($_POST["user_id"],$_POST["post_id"]))
{
    returnJson(["status"=>false,"message"=>"few value(s) provided"]);
    exit();
}
$user_id=$_POST["user_id"];
$post_id=$_POST["post_id"];

$sql = "DELETE FROM `post` WHERE `user_id`='$user_id' AND `id`='$post_id'";

if (!mysqli_query($conn, $sql)) {
    returnJson(["status"=>false,"message"=>"Error: failed to removed a post"]);
    exit();
}
returnJson(["status"=>true,"message"=>"post removed"]);
