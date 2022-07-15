<?php 

if(!isset($_POST["user_id"])){
    returnJson(["status"=>false,"message"=>"few value(s) provided"]);
    exit();
}
$user_id=$_POST["user_id"];

//check the user id and type if exist
$sql = "SELECT * FROM users WHERE `id`='$user_id'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) == 0) {
    returnJson(["status"=>false,"message"=>"Error: have no rights"]);
    exit();
}


if(!isset($_FILES["attachment"])){
    returnJson(["status"=>false,"message"=>"Error: document missing"]);
    exit;
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




$sql = "UPDATE `users` SET `profile`='$filePath' WHERE id='$user_id'";
if (!mysqli_query($conn, $sql)) {
    returnJson(["status"=>false,"message"=>"fail to upload".mysqli_error($conn)]);
    exit();
} 

//check the user id and type if exist
$sql = "SELECT * FROM users WHERE id='$user_id' ";
if (mysqli_num_rows($result)>0) {
    $data=[];
    while($row = mysqli_fetch_assoc($result)) {
        unset($row["password"]);
        $data=$row;
    }
    returnJson(["status"=>true,'message'=>'profile updated',"data"=>$data]);
    exit();
}
returnJson(["status"=>false,"message"=>"fail to update"]);
exit();


