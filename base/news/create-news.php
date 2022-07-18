<?php 

if(!isset($_POST["user_id"],$_POST["content"],$_POST["title"],$_FILES["attachment"]))
{
    returnJson(["status"=>false,"message"=>"few value(s) provided"]);
    exit();
}

$user_id=$_POST["user_id"];
$content=strtolower($_POST["content"]);
$title=strtolower($_POST["title"]);


//check the user id and type if exist
$sql = "SELECT * FROM users WHERE `id`='$user_id' AND `type`='admin'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) == 0) {
    returnJson(["status"=>false,"message"=>"Error: have no rights"]);
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

//check group name
$sql = "INSERT INTO `news`( `document`, `content`, `title`) VALUES ('$filePath','$content','$title')";
$result = mysqli_query($conn, $sql);
if ($result==false) {
    returnJson(["status"=>false,"message"=>"fail to create"]);
    exit();
}

returnJson(["status"=>true,"message"=>"news created"]);

