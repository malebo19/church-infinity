<?php 

if(!isset($_POST["user_id"],$_POST["group_id"]))
{
    returnJson(["status"=>false,"message"=>"few value(s) provided"]);
    exit();
}

$group_id=strtolower($_POST["group_id"]);
$user_id=$_POST["user_id"];

//check the user id and type if exist
$sql = "SELECT * FROM users WHERE `id`='$user_id'";
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
//check the user_id if exist and the group
$sql = "SELECT * FROM `group-members` WHERE `member_id`='$user_id' AND `group_id`='$group_id'";
$result = mysqli_query($conn, $sql) or die(mysqli_error($conn));
if (mysqli_num_rows($result)==0) {
    returnJson(["status"=>false,"message"=>"Not member of the group"]);
    exit();
}


$sql = "SELECT * FROM `group-messages` WHERE `group_id`='$group_id'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result)>=0) {
    $data=[];
    while($row = mysqli_fetch_assoc($result)) {
        $data[]=$row;
    }
    returnJson(["status"=>true,'message'=>'success',"data"=>$data]);
    exit();
}
returnJson(["status"=>false,"message"=>"fail to load data"]);







