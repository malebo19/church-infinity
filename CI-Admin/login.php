<?php

//require conn.php
require_once('conn.php');

?>

<!DOCTYPE html>
<html lang="en">

<head>

    <!-- Title -->
    <title>Church Infinity | Login - Sign in</title>

    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta charset="UTF-8">
    <meta name="description" content="Admin Dashboard Template" />
    <meta name="keywords" content="admin,dashboard" />
    <meta name="author" content="stacks" />

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

    <!-- Theme Styles -->
    <link href="assets/css/meteor.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/layers/dark-layer.css" class="theme-color" rel="stylesheet" type="text/css" />
    <link href="assets/css/custom.css" rel="stylesheet" type="text/css" />

    <script src="assets/plugins/3d-bold-navigation/js/modernizr.js"></script>
    <script src="assets/plugins/offcanvasmenueffects/js/snap.svg-min.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

</head>

<body class="page-login">
    <main class="page-content">
        <div class="page-inner">
            <div id="main-wrapper">
                <div class="row">
                    <div class="col-md-3 center">
                        <div class="panel panel-white" id="js-alerts">
                            <div class="panel-body">
                                <div class="login-box">
                                    <a href="index.html" class="logo-name text-lg text-center m-t-xs">Church Inifinity Admin</a>
                                    <p class="text-center m-t-md">Please login into your account.</p>
                                    <form class="m-t-md" action="login.php" method="post">
                                        <div class="form-group">
                                            <input type="email" name="email" class="form-control" placeholder="Email" required>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" name="password" class="form-control password" placeholder="Password" required>
                                        </div>
                                        <button type="submit" class="btn btn-success btn-block">Login</button>
                                        <a href="forgot.html" class="display-block text-center m-t-md text-sm">Forgot Password?</a>
                                        <p class="text-center m-t-xs text-sm">Do not have an account?</p>
                                        <a href="register.php" class="btn btn-default btn-block m-t-md">Create an account</a>
                                    </form>
                                    <p class="text-center m-t-xs text-sm">2022 &copy; Church Infinity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- Row -->
            </div><!-- Main Wrapper -->
        </div><!-- Page Inner -->
    </main><!-- Page Content -->


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
    <script src="assets/js/meteor.min.js"></script>

</body>

</html>

<?php

//input variables
$email = $_POST['email'];
$password = $_POST['password'];

echo "This works";

if (isset($_POST['submit'])) {
    //check if email is empty
    if (empty($email)) {
        echo "Email is required";
    } else {
        //check if email is valid
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "Email is invalid";
        } else {
            //check if password is empty
            if (empty($password)) {
                echo "Password is required";
            } else {
                //check if password is valid
                if (!preg_match('/^(?=.*\d)(?=.*[A-Za-z])[0-9A-Za-z!@#$%]{8,12}$/', $password)) {
                    echo "Password is invalid";
                } else {
                    //check if email exists
                    $sql = "SELECT * FROM users WHERE email = '$email'";
                    $result = mysqli_query($conn, $sql);
                    if (mysqli_num_rows($result) > 0) {
                        //check if password is correct
                        $row = mysqli_fetch_assoc($result);
                        if (password_verify($password, $row['password'])) {
                            //login
                            session_start();
                            $_SESSION['email'] = $email;
                            $_SESSION['id'] = $row['id'];
                            header("Location: index.php");
                        } else {
                            echo "Password is incorrect";
                        }
                    } else {
                        echo "Email does not exist";
                    }
                }
            }
        }
    }
}


?>