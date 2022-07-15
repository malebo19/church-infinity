<?php 

//require connection
require_once("conn.php");

$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);

//check if there are any users
if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "id: " . $row["id"]. " - Name: " . $row["name"]. " " . $row["email"]. "<br>";
    }
} else {
    echo "0 results";
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>

     <!-- Styles -->
     <link href="assets/plugins/pace-master/themes/blue/pace-theme-flash.css" rel="stylesheet"/>
     <link href="assets/plugins/uniform/css/default.css" rel="stylesheet"/>
     <link href="assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
     <link href="assets/plugins/fontawesome/css/font-awesome.css" rel="stylesheet" type="text/css"/>
     <link href="assets/plugins/line-icons/simple-line-icons.css" rel="stylesheet" type="text/css"/>	
     <link href="assets/plugins/offcanvasmenueffects/css/menu_cornerbox.css" rel="stylesheet" type="text/css"/>	
     <link href="assets/plugins/waves/waves.min.css" rel="stylesheet" type="text/css"/>	
     <link href="assets/plugins/switchery/switchery.min.css" rel="stylesheet" type="text/css"/>
     <link href="assets/plugins/3d-bold-navigation/css/style.css" rel="stylesheet" type="text/css"/>	
     <link href="assets/plugins/slidepushmenus/css/component.css" rel="stylesheet" type="text/css"/>
     
     <!-- Theme Styles -->
     <link href="assets/css/meteor.min.css" rel="stylesheet" type="text/css"/>
     <link href="assets/css/layers/dark-layer.css" class="theme-color" rel="stylesheet" type="text/css"/>
     <link href="assets/css/custom.css" rel="stylesheet" type="text/css"/>
     
     <script src="assets/plugins/3d-bold-navigation/js/modernizr.js"></script>
     <script src="assets/plugins/offcanvasmenueffects/js/snap.svg-min.js"></script>

</head>
<body class="compact-menu">
    
    <!-- Header + Menu -->
    <?php 
        
    require("header.php");
        
    ?>

    <div class="page-inner">
        <div class="page-title">
            <div class="page-breadcrumb">
                <ol class="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li class="active">Profile</li>
                </ol>
            </div>
        </div>
        <div id="main-wrapper">
            <div class="row">

                <!-- Profile Information Container -->
                <div class="col-md-12">
                    <div class="user-profile-panel panel panel-white">
                        <!-- heading -->
                        <div class="panel-heading">
                            <div class="panel-title">User profile</div>
                        </div>
                        <div class="panel-body">
                            <!-- profile picture -->
                            <img id="profilePicture" src="assets/images/avatar2.png" class="user-profile-image img-circle" alt="Profile Picture" onclick="updateProfilePicture()">
                            <!-- Name Surname -->
                            <h4 class="text-center m-t-lg" onclick="">Nick Doe</h4>
                            <!--  -->
                            <p class="text-center">UI/UX Designer</p>
                            <hr>
                            <!-- profile details -->
                            <ul class="list-unstyled text-center">
                                <li><p><i class="icon-pointer m-r-xs"></i>Melbourne, Australia</p></li>
                                <!-- Email -->
                                <li><p><i class="icon-envelope-open m-r-xs"></i><a href="#">example@mail.com</a></p></li>
                                <li><p><i class="icon-link m-r-xs"></i><a href="#">www.themeforest.net</a></p></li>
                            </ul>
                            <hr>
                            <button class="btn btn-info btn-block" onclick="editProfile()">Edit</button>
                        </div>
                    </div>
                </div>
                    
                
            </div>
        </div>

        <!-- Footer -->
        <?php 
                
        require("footer.php");
            
        ?>
    </div>
</main>




     <!-- Javascripts -->
     <script src="assets/plugins/jquery/jquery-3.1.0.min.js"></script>
     <script src="assets/plugins/jquery-ui/jquery-ui.min.js"></script>
     <script src="assets/plugins/pace-master/pace.min.js"></script>
     <script src="assets/plugins/jquery-blockui/jquery.blockui.js"></script>
     <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>
     <script src="assets/plugins/jquery-slimscroll/jquery.slimscroll.min.js"></script>
     <script src="assets/plugins/switchery/switchery.min.js"></script>
     <script src="assets/plugins/uniform/js/jquery.uniform.standalone.js"></script>
     <script src="assets/plugins/offcanvasmenueffects/js/classie.js"></script>
     <script src="assets/plugins/waves/waves.min.js"></script>
     <script src="assets/plugins/3d-bold-navigation/js/main.js"></script>
     <script src="assets/js/meteor.min.js"></script>
     <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCzjeZ1lORVesmjaaFu0EbYeTw84t1_nek"></script>
     <script src="assets/js/pages/profile.js"></script>
     <script src="assets/js/custom.js"></script>
</body>
</html>