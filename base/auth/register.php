<?php 

if(!isset($_POST["username"],$_POST["email"],$_POST["pass"],$_POST["title"],$_POST["member_status"],
$_POST["contact"],$_POST["local_church_option"],$_POST["cell_option"],
$_POST["cell_name_leader"],$_POST["baptised_option"]
))
{
    returnJson(["status"=>false,"message"=>"few value(s) provided"]);
    exit();
}
$username=$_POST["username"];
$email=trim(strtolower($_POST["email"]));
$pass=trim($_POST["pass"]);
$title=$_POST["title"];
$member_status=$_POST["member_status"];
$contact=$_POST["contact"];
$local_church_option=$_POST["local_church_option"];
$cell_option=$_POST["cell_option"];
$cell_name_leader=$_POST["cell_name_leader"];
$baptised_option=$_POST["baptised_option"];

//check the user id exist
$sql = "SELECT * FROM users WHERE `email`='$email' ";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    returnJson(["status"=>false,"message"=>"Account already exists"]);
    exit();
}
$sql = "INSERT INTO `users`( `email`, `password`, `username`, `type`, `title`, `member_status`, `contact`, `local_church_option`, `cell_option`, `cell_name_leader`, `baptised_option`)
 VALUES ('$email','$pass','$username','$type','$title','$member_status','$contact','$local_church_option','$cell_option','$cell_name_leader','$baptised_option')
";
if (!mysqli_query($conn, $sql)) {
    returnJson(["status"=>false,"message"=>"fail to register".mysqli_error($conn)]);
    exit();
} 

$sql = "SELECT * FROM users WHERE `email`='$email' AND `password`='$pass' ";
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
returnJson(["status"=>false,"message"=>"error "]);
exit();






