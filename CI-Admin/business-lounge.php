<?php
//require connection
require_once("conn.php");

$sql = "SELECT * FROM businesslounge";
$result = mysqli_query($conn, $sql);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Business Lounge</title>

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

    <!-- Theme Styles -->
    <link href="assets/css/meteor.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/layers/dark-layer.css" class="theme-color" rel="stylesheet" type="text/css" />
    <link href="assets/css/custom.css" rel="stylesheet" type="text/css" />

    <script src="assets/plugins/3d-bold-navigation/js/modernizr.js"></script>
    <script src="assets/plugins/offcanvasmenueffects/js/snap.svg-min.js"></script>


</head>
<<<<<<< HEAD
<body class="compact-menu">

    <!-- Header + Menu -->
    <?php 
        
    require("header.php");
        
    ?>
=======

<body class="compact-menu">

    <?php include('components.php')  ?>


>>>>>>> 98b517b37ae160bc278c2ae51224606718d922e6

    <!-- Main Container -->
    <div class="page-inner">
        <div class="page-title">
            <!-- Page Title -->
            <h3 class="breadcrumb-header">Business Lounge</h3>

            <!-- Page Path e.g Home/Dashboard -->
            <div class="page-breadcrumb">
                <ol class="breadcrumb breadcrumb-with-header">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Business Lounge</a></li>
                    <li class="active">View Business Lounge</li>
                </ol>
            </div>
        </div>
        <div id="main-wrapper">
            <div class="row">
                <div class="col-md-12">

                    <!-- Row Grouping Table -->
                    <div class="panel panel-white">
                        <div class="panel-heading">
                            <h4 class="panel-title">Current Businesses</h4>
                        </div>
                        <div class="panel-body">
                       <div class="table-responsive">

                           <table id="example2" class="display table" style="width: 100%; cellspacing: 0;">

                            <!-- headings -->
                               <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Website</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                        <th>Address</th>
                                        <th>Type of business</th>

                                    </tr>
                                </thead>
                               
                                <tbody>

                                <?php 
                    
                                    //check if there are any users
                                    if (mysqli_num_rows($result) > 0) {
                                    // output data of each row
                                    while($row = mysqli_fetch_assoc($result)) {

                                ?>

                                    <!-- row 1 -->
                                    <tr>
                                        <td><?php echo $row["businessname"]; ?></td>
                                        <td><?php echo $row["website"]; ?></td>
                                        <td><?php echo $row["email"]; ?></td>
                                        <td><?php echo $row["phonenumber"]; ?></td>
                                        <td><?php echo $row["address"]; ?></td>
                                        <td><?php echo $row["businesstype"]; ?></td>
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

                    <!-- Add new row button -->
                    <button type="button" class="btn btn-success m-b-sm" data-toggle="modal" data-target="#myModal">Add Business</button>


                    <div class="panel-body">
                        <!-- Modal -->
                        <form id="add-row-form" action="javascript:void(0);">
                            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                            <h4 class="modal-title" id="myModalLabel">Add Business</h4>
                                        </div>
                                        <div class="modal-body">
                                            <!-- Name of business -->
                                            <div class="form-group">
                                                <input type="text" id="name-input" class="form-control" placeholder="Name of business" required>
                                            </div>
                                            <!-- Website link -->
                                            <div class="form-group">
                                                <input type="text" id="website-input" class="form-control" placeholder="Enter website link" required>
                                            </div>
                                            <!-- Email -->
                                            <div class="form-group">
                                                <input type="email" id="email-input" class="form-control" placeholder="Email" required>
                                            </div>
                                            <!-- Phone number -->
                                            <div class="form-group">
                                                <input type="tel" id="tel-input" class="form-control" placeholder="Phone number" required>
                                            </div>
                                            <!-- Type of business -->
                                            <div class="form-group">
                                                <select class="form-control" id="type-input" placeholder="Select type of business">
                                                    <option>Select type of business</option>
                                                    <option>Construction</option>
                                                    <option>Food/Catering</option>
                                                    <option>Marketing</option>
                                                </select>
                                            </div>
                                            <!-- Business information -->
                                            <div class="form-group">
                                                <!-- textarea for business information -->
                                                <textarea id="info-input" class="form-control" placeholder="Enter business information" required></textarea>
                                            </div>
                                            <!-- List of services offered -->
                                            <div class="form-group">
                                                <!-- upload picture for service/product -->
                                                <input type="file" id="file-input" class="form-control" placeholder="Upload picture for service or product" required>

                                            </div>
                                            <div class="form-group">
                                                <!-- input name of service/product -->
                                                <input type="text" id="service-input" class="form-control" placeholder="Name of service or product" required>
                                            </div>
                                            <div class="form-group">
                                                <!-- input prive of service or product -->
                                                <input type="text" id="price-input" class="form-control" placeholder="Price of service or product" required>
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
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
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
    <script src="assets/plugins/datatables/js/jquery.datatables.min.js"></script>
    <script src="assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
    <script src="assets/js/meteor.min.js"></script>
    <script src="assets/js/pages/table-data.js"></script>



</body>

</html>