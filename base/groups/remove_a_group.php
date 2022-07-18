<?php 

if(!isset($_POST["user_id"],$_POST["group_id"]))
{
    returnJson(["status"=>false,"message"=>"few value(s) provided"]);
    exit();
}

$user_id=$_POST["user_id"];
$group_id=strtolower($_POST["group_id"]);

//check the user id and type if exist
$sql = "SELECT * FROM users WHERE `id`='$user_id' AND `type`='admin'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) == 0) {
    returnJson(["status"=>false,"message"=>"Error: have no rights"]);
    exit();
}

//check group id if exist
$sql = "SELECT * FROM groups WHERE `group_id`='$group_id'";
$result = mysqli_query($conn, $sql) or die (returnJson(["status"=>false,"message"=>"Group not Found"]));
if (mysqli_num_rows($result)==0) {
    returnJson(["status"=>false,"message"=>"Group not Found"]);
    exit();
}


//check the  group id
$sql = "DELETE FROM `group-members` WHERE `group_id`='$group_id'";
if (!mysqli_query($conn, $sql)) {
    returnJson(["status"=>false,"message"=>"Error: failed to remove a group"]);
    exit();
}

$sql = "DELETE FROM `groups` WHERE `group_id`='$group_id'";
if (!mysqli_query($conn, $sql)) {
    returnJson(["status"=>false,"message"=>"Error: failed to remove a group"]);
    exit();
}

$sql = "DELETE FROM `group-messages` WHERE `group_id`='$group_id'";
if (!mysqli_query($conn, $sql)) {
    returnJson(["status"=>false,"message"=>"Error: failed to remove a group"]);
    exit();
}


returnJson(["status"=>true,"message"=>"group was removed"]);

