<?php


if(!isset($_POST["message_id"]))
{
    returnJson(["status"=>false,"message"=>"few value(s) provided"]);
    exit();
}
$message_id=$_POST["message_id"];


$sql = "SELECT * FROM `post-comments` WHERE `message_id`='$message_id'";
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
