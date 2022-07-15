<?php 

if(!isset($_POST["user_id"],$_POST["group_id"],$_POST["member_id"]))
{
    returnJson(["status"=>false,"message"=>"few value(s) provided"]);
    exit();
}

$user_id=$_POST["user_id"];
$group_id=strtolower($_POST["group_id"]);
$member_id=$_POST["member_id"];

//check the user id and type if exist
$sql = "SELECT * FROM users WHERE `id`='$user_id' AND `type`='admin'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) == 0) {
    returnJson(["status"=>false,"message"=>"Error: have no rights"]);
    exit();
}

//check group id if exist
$sql = "SELECT * FROM groups WHERE  `group_id`='$group_id'";
$result = mysqli_query($conn, $sql) or die (returnJson(["status"=>false,"message"=>"Group not Found"]));
if (mysqli_num_rows($result)==0) {
    returnJson(["status"=>false,"message"=>"Group not Found"]);
    exit();
}

//check the member_id if exist as a user
$sql = "SELECT * FROM users WHERE `id`='$member_id'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) == 0) {
    returnJson(["status"=>false,"message"=>"Member not Found"]);
    exit();
}

//check the member_id if exist
$sql = "DELETE FROM `group-members` WHERE `member_id`='$member_id'";
if (!mysqli_query($conn, $sql)) {
    returnJson(["status"=>false,"message"=>"Error: failed to remove a member"]);
    exit();
}
returnJson(["status"=>true,"message"=>"member was removed"]);

