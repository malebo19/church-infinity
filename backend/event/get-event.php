<?php 



$sql = "SELECT * FROM `event` ORDER BY `event`.`event_id` DESC";
$data=[];
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result)>0) {
    
    while($row = mysqli_fetch_assoc($result)) {
        $data[]=$row;
    }            
    returnJson(["status"=>true,'message'=>'success',"data"=>$data]);
    exit();

}else{
    returnJson(["status"=>true,'message'=>'success',"data"=>$data]);
    exit();
}