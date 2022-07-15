<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Church</title>

    <!-- Styles -->
    <link href="assets/plugins/pace-master/themes/blue/pace-theme-flash.css" rel="stylesheet" />
    <link href="assets/plugins/uniform/css/default.css" rel="stylesheet" />
    <link href="assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/plugins/fontawesome/css/font-awesome.css" rel="stylesheet" type="text/css" />
    <link href="assets/plugins/line-icons/simple-line-icons.css" rel="stylesheet" type="text/css" />
    <link href="assets/plugins/offcanvasmenueffects/css/menu_cornerbox.css" rel="stylesheet" type="text/css" />
    <link href="assets/plugins/waves/waves.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/plugins/switchery/switchery.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/plugins/3d-bold-navigation/css/style.css" rel="stylesheet" type="text/css" />
    <link href="assets/plugins/slidepushmenus/css/component.css" rel="stylesheet" type="text/css" />
    <link href="assets/plugins/weather-icons-master/css/weather-icons.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/plugins/toastr/toastr.min.css" rel="stylesheet" type="text/css" />

    <!-- Theme Styles -->
    <link href="assets/css/meteor.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/layers/dark-layer.css" class="theme-color" rel="stylesheet" type="text/css" />
    <link href="assets/css/custom.css" rel="stylesheet" type="text/css" />

    <script src="assets/plugins/3d-bold-navigation/js/modernizr.js"></script>


</head>
<<<<<<< HEAD
<body class="compact-menu">

    <!-- Header + Menu -->
    <?php 
        
    require("header.php");
        
    ?>

        <!-- Main Container -->
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
                                <div class="panel-title">Church Profile</div>
                            </div>
                            <div class="panel-body">
                                <!-- profile picture -->
                                <img id="profilePicture" src="assets/images/avatar2.png" class="user-profile-image img-circle" alt="Profile Picture" onclick="updateProfilePicture()">
                                <!-- Name of church -->
                                <h4 class="text-center m-t-lg" onclick="">Christ Embassy Morningside</h4>

                                <hr>
                                <!-- profile details -->
                                <ul class="list-unstyled text-center">
                                    <!-- Address -->
                                    <li><p><i class="icon-pointer m-r-xs"></i>Melbourne, Australia</p></li>
                                    <!-- Email -->
                                    <li><p><i class="icon-envelope-open m-r-xs"></i><a href="#">example@mail.com</a></p></li>
                                    <!-- Phone -->
                                    <li><p><i class="icon-link m-r-xs"></i><a href="#">www.themeforest.net</a></p></li>
                                </ul>
                                <hr>
                                <button class="btn btn-info btn-block" onclick="editProfile()">Edit</button>
                            </div>
=======

<body class="compact-menu">

    <?php include_once("components.php"); ?>

    <!-- Main Container -->
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
                            <div class="panel-title">Church Profile</div>
                        </div>
                        <div class="panel-body">
                            <!-- profile picture -->
                            <img id="profilePicture" src="assets/images/avatar2.png" class="user-profile-image img-circle" alt="Profile Picture" onclick="updateProfilePicture()">
                            <!-- Name of church -->
                            <h4 class="text-center m-t-lg" onclick="">Christ Embassy Morningside</h4>

                            <hr>
                            <!-- profile details -->
                            <ul class="list-unstyled text-center">
                                <!-- Address -->
                                <li>
                                    <p><i class="icon-pointer m-r-xs"></i>Melbourne, Australia</p>
                                </li>
                                <!-- Email -->
                                <li>
                                    <p><i class="icon-envelope-open m-r-xs"></i><a href="#">example@mail.com</a></p>
                                </li>
                                <!-- Phone -->
                                <li>
                                    <p><i class="icon-link m-r-xs"></i><a href="#">www.themeforest.net</a></p>
                                </li>
                            </ul>
                            <hr>
                            <button class="btn btn-info btn-block" onclick="editProfile()">Edit</button>
                        </div>
                    </div>

                    <!-- About Container -->

                    <div class="panel panel-white">
                        <div class="panel-heading">
                            <div class="panel-title">About Christ Embassy</div>
>>>>>>> 98b517b37ae160bc278c2ae51224606718d922e6
                        </div>
                        <div class="panel-body">
                            <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
                        </div>
                    </div>

                    <!-- Edit About Container -->
                    <div class="panel panel-white">
                        <div class="panel-heading">
                            <div class="panel-title">Edit About</div>
                        </div>
                        <div class="panel-body">
                            <form>
                                <div class="form-group">
                                    <label for="about">About</label>
                                    <textarea class="form-control" id="about" rows="3"></textarea>
                                </div>
                                <button type="submit" class="btn btn-info btn-block">Save</button>
                            </form>
                        </div>

                        <!-- Edit Profile Container -->
                        <div class="edit-profile-panel panel panel-white">
                            <!-- heading -->
                            <div class="panel-heading">
                                <div class="panel-title">Edit Profile</div>
                            </div>
                            <div class="panel-body">
                                <!-- profile picture -->
                                <img id="profilePicture" src="assets/images/avatar2.png" class="user-profile-image img-circle" alt="Profile Picture" onclick="updateProfilePicture()">
                                <!-- Name of church -->
                                <h4 class="text-center m-t-lg" onclick="">Christ Embassy Morningside</h4>

                                <hr>
                                <!-- profile details -->
                                <ul class="list-unstyled text-center">
                                    <!-- Address -->
                                    <li>
                                        <p><i class="icon-pointer m-r-xs"></i>Melbourne, Australia</p>
                                    </li>
                                    <!-- Email -->
                                    <li>
                                        <p><i class="icon-envelope-open m-r-xs"></i><a href="#">
                                                <input type="email" class="form-control" id="email" placeholder="Email" value="
                                        <?php
                                        echo $email;
                                        ?>
                                        ">
                                            </a></p>
                                    </li>
                                    <!-- Phone -->
                                    <li>
                                        <p><i class="icon-link m-r-xs"></i><a href="#">
                                                <input type="text" class="form-control" id="phone" placeholder="Phone" value="
                                        <?php
                                        echo $phone;
                                        ?>
                                        ">
                                            </a></p>
                                    </li>
                                </ul>
                                <hr>
                                <button class="btn btn-info btn-block" onclick="updateProfile()">Update</button>
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



</body>

</html>