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


$sql = "SELECT * FROM `group-members` WHERE `member_id`=$user_id";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result)>0) {
    $data=[];
    while($row = mysqli_fetch_assoc($result)) {

       $id=$row["group_id"];
        $sql = "SELECT * FROM groups WHERE `group_id`='$id'";
        $resul = mysqli_query($conn, $sql);
        if (mysqli_num_rows($resul)>=0) {
            while($row = mysqli_fetch_assoc($resul)) {
                $data[]=$row;
            }

        }
    }            
    returnJson(["status"=>true,'message'=>'success',"groups"=>$data]);
    exit();

}else{
    returnJson(["status"=>false,"message"=>"fail to load data"]);
}