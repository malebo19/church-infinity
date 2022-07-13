<?php
// connect to the database
include('connect-db.php');

?>


<!DOCTYPE html>
<html lang="en">

<head>



    <!-- Title -->
    <title>Church Inifinty Admin </title>

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
    <link href="assets/plugins/slidepushmenus/css/component.css" rel="stylesheet" type="text/css" />
    <link href="assets/plugins/weather-icons-master/css/weather-icons.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/plugins/toastr/toastr.min.css" rel="stylesheet" type="text/css" />

    <!-- Theme Styles -->
    <link href="assets/css/meteor.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/layers/dark-layer.css" class="theme-color" rel="stylesheet" type="text/css" />
    <link href="assets/css/custom.css" rel="stylesheet" type="text/css" />

    <script src="assets/plugins/3d-bold-navigation/js/modernizr.js"></script>

</head>

<body class="compact-menu">


    <?php include('components.php'); ?>

    <!-- Dashboard Main Container -->
    <div class="page-inner">
        <!-- Page Path e.g Home/Dashboard -->
        <div class="page-title">
            <div class="page-breadcrumb">
                <ol class="breadcrumb">
                    <li><a href="index.html">News</a></li>
                    <li class="active">View News</li>
                </ol>
            </div>
        </div>

        <!-- Page Body -->
        <div id="main-wrapper">


            <div class="row">
                <div class="col-md-12">

                    <!-- Row Grouping Table -->
                    <div class="panel panel-white">

                        <h1 class="text-center m-3 text-info ">Current News</h1>

                        <div class="panel-body">
                            <div class="table-responsive">
                                <table id="example2" class="display table" style="width: 100%; cellspacing: 0;">

                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Content</th>

                                        </tr>
                                    </thead>

                                    <tbody>

                                        <!-- Foreach  -->
                                        <?php
                                        $sql = "SELECT * FROM news";
                                        $result = $db->query($sql);
                                        if ($result->num_rows > 0) {
                                            // output data of each row
                                            while ($row = $result->fetch_assoc()) {
                                        ?>
                                                <tr>
                                                    <td><?php echo $row["title"]; ?></td>
                                                    <td><?php echo $row["content"]; ?></td>
                                                </tr>
                                        <?php
                                            }
                                        } else {
                                            echo "0 results";
                                        } ?>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div><!-- Main Wrapper -->
                    <div class="panel panel-white">
                        <div class="panel-heading">
                            <h4 class="panel-title">Add new </h4>
                        </div>
                        <div class="panel-body">
                            <button type="button" class="btn btn-success m-b-sm" data-toggle="modal" data-target="#myModal">Add </button>
                            <!-- Modal -->
                            <form id="add-row-form" action="News.php" method="post" enctype="multipart/form-data">
                                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                <h4 class="modal-title" id="myModalLabel">New</h4>
                                            </div>
                                            <div class="modal-body">
                                                <div class="form-group">
                                                    <input type="text" name='title' id="name-input" class="form-control" placeholder="Title" required>
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" name='content' id="position-input" class="form-control" placeholder="Content" required>
                                                </div>
                                                <div class="form-group">
                                                    <input id='file' type="file" name='file' required>
                                                </div>

                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                                                <button type="button" id="add-row" name='buttonSubmit' class="btn btn-success" onclick="formSubmit()">Add</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="table-responsive">

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
                <script src="assets/plugins/waypoints/jquery.waypoints.min.js"></script>
                <script src="assets/plugins/flot/jquery.flot.min.js"></script>
                <script src="assets/plugins/flot/jquery.flot.time.min.js"></script>
                <script src="assets/plugins/flot/jquery.flot.symbol.min.js"></script>
                <script src="assets/plugins/flot/jquery.flot.resize.min.js"></script>
                <script src="assets/plugins/flot/jquery.flot.tooltip.min.js"></script>
                <script src="assets/plugins/curvedlines/curvedLines.js"></script>
                <script src="assets/plugins/chartjs/Chart.bundle.min.js"></script>
                <script src="assets/js/meteor.min.js"></script>
                <script src="assets/js/pages/dashboard.js"></script>


                <script>
                    // fetch data from database
                    var news = [];
                    $(document).ready(function() {
                        $.ajax({
                            url: "http://localhost/api/user/news/get",
                            method: "GET",
                            success: function(data) {
                                $('#table-data').html(data);
                                console.log(data);
                                news = data;

                            }
                        });
                    });

                    function formSubmit(e) {

                        var title = $("#name-input").val();
                        var content = $("#position-input").val();

                        var file = document.getElementById("file").files[0];
                        console.log(file);
                        var data = {
                            "user_id": "1",
                            "title": title,
                            "content": content,
                            "attachment": file
                        };
                        var form_data = new FormData();
                        Object.keys(data).map((key) => {
                            form_data.append(key, data[key]);
                        });

                        console.log(data);
                        $.ajax({
                            url: "http://localhost/api/admin/news/create",
                            method: "POST",
                            data: form_data,
                            contentType: false,
                            cache: false,
                            processData: false,

                            success: function(data) {
                                console.log(data);
                                $("#msg").html(data);
                            },
                        });

                        //Clear the form and close the modal
                        $("#name-input").val("");
                        $("#position-input").val("");
                        $("#file").val("");
                        $("#myModal").modal("hide");

                        // refresh page
                        location.reload();
                    }
                </script>

</body>

</html>