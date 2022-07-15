<?php
//require connection
require_once("conn.php");


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Sign Ups</title>

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
    <link href="assets/plugins/datatables/css/jquery.datatables.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/plugins/datatables/css/jquery.datatables_themeroller.css" rel="stylesheet" type="text/css" />
    <link href="assets/plugins/bootstrap-datepicker/css/datepicker3.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="assets/css/custom.css">

    
    
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

        <!-- Main Container -->
        <div class="page-inner">
            <div class="page-title">
                <!-- Page Title -->
                <h3 class="breadcrumb-header">View Sign Ups</h3>

                <!-- Page Path e.g Home/Dashboard -->
                <div class="page-breadcrumb">
                    <ol class="breadcrumb breadcrumb-with-header">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#">Registation ans Sign Ups</a></li>
                        <li class="active">View Sign Ups</li>
                    </ol>
                </div>
            </div>
        </div>
        <div id="main-wrapper">
            <div class="row">
                <div class="col-md-12">

                    <!-- Table One -->
                    <div class="panel panel-white">
                        <div class="panel-heading">
                            <h4 class="panel-title">Activities & Campaigns</h4>
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table id="example2" class="display table" style="width: 100%; cellspacing: 0;">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Membership</th>
                                            <th>Full Name</th>
                                            <th>Email</th>
                                            <th>Cellphone Number</th>
                                            <th>Type of Partnership</th>
                                            <th>Name of Cell</th>
                                            <th>Cell Leader</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php 

                                        //query from activities table
                                        $sql = "SELECT * FROM activities";
                                        $result = mysqli_query($conn, $sql);
                        
                                        //check if there are any users
                                        if (mysqli_num_rows($result) > 0) {
                                        // output data of each row
                                        while($row = mysqli_fetch_assoc($result)) {

                                        ?>

                                        <!-- row 1 -->
                                        <tr>
                                            <td><?php echo $row["title"]; ?></td>
                                            <td><?php echo $row["membership"]; ?></td>
                                            <td><?php echo $row["name"]; ?></td>
                                            <td><?php echo $row["email"]; ?></td>
                                            <td><?php echo $row["phonenumber"]; ?></td>
                                            <td><?php echo $row["partnership"]; ?></td>
                                            <td><?php echo $row["cellname"]; ?></td>
                                            <td><?php echo $row["cellleader"]; ?></td>
                                            
                                        </tr>

                                        <?php
                                            
                                            }
                                        } else {
                                            echo "0 results";
                                        }

                                        ?>                                      
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <!-- Table Two -->
                    <div class="panel panel-white">
                        <div class="panel-heading">
                            <h4 class="panel-title">Departmental</h4>
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table id="example2" class="display table" style="width: 100%; cellspacing: 0;">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Membership</th>
                                            <th>Full Name</th>
                                            <th>Email</th>
                                            <th>Cellphone Number</th>
                                            <th>Type of Partnership</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                    <?php 

                                    //query from departmental table
                                    $sql = "SELECT * FROM departmental";
                                    $result = mysqli_query($conn, $sql);
                    
                                    //check if there are any users
                                    if (mysqli_num_rows($result) > 0) {
                                    // output data of each row
                                    while($row = mysqli_fetch_assoc($result)) {

                                    ?>

                                    <!-- row 1 -->
                                    <tr>
                                        <td><?php echo $row["title"]; ?></td>
                                        <td><?php echo $row["membership"]; ?></td>
                                        <td><?php echo $row["name"]; ?></td>
                                        <td><?php echo $row["email"]; ?></td>
                                        <td><?php echo $row["phonenumber"]; ?></td>
                                        <td><?php echo $row["partnership"]; ?></td>
                                        
                                    </tr>

                                    <?php
                                        
                                        }
                                    } else {
                                        echo "0 results";
                                    }

                                    ?>                                      
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <!-- Table Three -->
                    <div class="panel panel-white">
                        <div class="panel-heading">
                            <h4 class="panel-title">Ministry</h4>
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table id="example2" class="display table" style="width: 100%; cellspacing: 0;">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Membership</th>
                                            <th>Full Name</th>
                                            <th>Email</th>
                                            <th>Cellphone Number</th>
                                            <th>Type of Partnership</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php 

                                        //query from ministry table
                                        $sql = "SELECT * FROM ministry";
                                        $result = mysqli_query($conn, $sql);
                        
                                        //check if there are any users
                                        if (mysqli_num_rows($result) > 0) {
                                        // output data of each row
                                        while($row = mysqli_fetch_assoc($result)) {

                                        ?>

                                        <!-- row 1 -->
                                        <tr>
                                            <td><?php echo $row["title"]; ?></td>
                                            <td><?php echo $row["membership"]; ?></td>
                                            <td><?php echo $row["name"]; ?></td>
                                            <td><?php echo $row["email"]; ?></td>
                                            <td><?php echo $row["phonenumber"]; ?></td>
                                            <td><?php echo $row["partnership"]; ?></td>
                                            
                                        </tr>

                                        <?php
                                            
                                            }
                                        } else {
                                            echo "0 results";
                                        }

                                        ?>                                      
                                    </tbody>
                               </table>
                           </div>
                        </div>
                        </div>
                     


                    <!-- Modal -->
                    <form id="add-row-form" action="javascript:void(0);">
                        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">

                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>

                                        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                                    </div>

                                    <div class="modal-body">
                                        <div class="form-group">
                                            <input type="text" id="name-input" class="form-control" placeholder="Name" required>
                                        </div>

                                        <div class="form-group">
                                            <input type="text" id="position-input" class="form-control" placeholder="Position" required>
                                        </div>

                                        <div class="form-group">
                                            <input type="number" id="age-input" class="form-control" placeholder="Age" required>
                                        </div>

                                        <div class="form-group">
                                            <input type="text" id="date-input" class="form-control date-picker" placeholder="Start Date" required>
                                        </div>

                                        <div class="form-group">
                                            <input type="number" id="salary-input" class="form-control" placeholder="Salary" required>
                                        </div>

                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                                        <button type="submit" id="add-row" class="btn btn-success">Add</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>

            <!-- Footer -->
            <?php 
                
            require("footer.php");
            
            ?>
        </div>
    </div>
    </div>

    <!-- Footer -->
    <div class="page-footer">
        <p class="no-s">Made with <i class="fa fa-heart"></i> by Church Infinity team</p>
    </div>
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
    <script src="assets/plugins/datatables/js/jquery.datatables.min.js"></script>
    <script src="assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
    <script src="assets/js/meteor.min.js"></script>
    <script src="assets/js/pages/table-data.js"></script>

</body>





</html>