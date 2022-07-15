<?php 

if(!isset($_POST["user_id"],$_POST["group_id"],$_POST["username"],$_POST["msg"],$_POST["msg_date"]))
{
    returnJson(["status"=>false,"message"=>"few value(s) provided"]);
    exit();
}

$group_id=strtolower($_POST["group_id"]);
$user_id=$_POST["user_id"];
$username=$_POST["username"];
$msg=$_POST["msg"];
$msg_date=$_POST["msg_date"];

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
    returnJson(["status"=>false,"message"=>"Error: You don't have access to this group"]);
    exit();
}


$filePath="";
//check file_size , then send a mail if 0 
if(isset($_FILES["attachment"]))
{
    if($_FILES["attachment"]["size"]>0){
        $filename = $_FILES['attachment']['name'];
        $info = pathinfo($_FILES['attachment']['name']);
        $ext = $info['extension']; // get the extension of the file
        $uni=uniqid();
        $uni2=uniqid();
        $newname = $uni.$uni2.".".$ext; 
    
        //define the file paths
        $filePath = "uploads/".$newname;
        $fullPath="uploads/".$newname;

        $res=move_uploaded_file( $_FILES['attachment']['tmp_name'],$filePath);
    	if($res==false){
            returnJson(["status"=>false,"message"=>"Error: fail to upload a file"]);
            exit();
        }
    }
}


// add the member
$sql = "INSERT INTO `group-messages`(`msg`, `msg_date`, `group_id`, `member_id`,`username`,`document`) VALUES ('$msg','$msg_date','$group_id','$user_id','$username','$filePath')";
if (!mysqli_query($conn, $sql)) {
    returnJson(["status"=>false,"message"=>"fail update profile".mysqli_error($conn)]);
    exit();
} 
returnJson(["status"=>true,"message"=>"profile updated"]);








