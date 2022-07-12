<?php 

$sql = "SELECT * FROM `post`";
$data=[];
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result)>0) {
    
    while($row = mysqli_fetch_assoc($result)) {
        $user_id=$row["user_id"];

        $sql = "SELECT * FROM users WHERE `id`='$user_id'";
        $res= mysqli_query($conn, $sql);
        while($r = mysqli_fetch_assoc($res)) {    
             $row["profile"]=$r["profile"];
             $row["username"]=$r["username"];
        } 
        $data[]=$row;
    }            
    returnJson(["status"=>true,'message'=>'success',"data"=>$data]);
    exit();

}else{
    returnJson(["status"=>true,'message'=>'success',"data"=>$data]);
    exit();
}