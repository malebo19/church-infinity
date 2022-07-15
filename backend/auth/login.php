<?php 

if(!isset($_POST["email"],$_POST["pass"]))
{
    returnJson(["status"=>false,"message"=>"few value(s) provided"]);
    exit();
}

$email=trim(strtolower($_POST["email"]));
$pass=trim($_POST["pass"]);

//check the user id and type if exist
$sql = "SELECT * FROM users WHERE `email`='$email' AND `password`='$pass' ";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) == 0) {
    returnJson(["status"=>false,"message"=>"invalid password or email"]);
    exit();
}

$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result)>=0) {
    $data=[];
    while($row = mysqli_fetch_assoc($result)) {
        unset($row["password"]);
        $data=$row;
    }
    returnJson(["status"=>true,'message'=>'success',"data"=>$data]);
    exit();
}
returnJson(["status"=>false,"message"=>"fail to log in"]);
exit();






