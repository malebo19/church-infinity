<?php

require_once("conn.php");

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
    <?php include_once("components.php"); ?>


    <!-- Dashboard Main Container -->
    <div class="page-inner">
        <!-- Page Path e.g Home/Dashboard -->
        <div class="page-title">
            <div class="page-breadcrumb">
                <ol class="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li class="active">Dashboard</li>
                </ol>
            </div>
        </div>

        <!-- Page Body -->
        <div id="main-wrapper">
            <div class="row">

                <!-- Sales Container -->
                <div class="col-md-6">
                    <div class="panel panel-white">
                        <div class="panel-heading clearfix">
                            <h3 class="panel-title">Business Lounge Sales</h3>
                            <div class="panel-control">
                                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" class="panel-reload" data-original-title="Reload"><i class="icon-reload"></i></a>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="panel-header-stats">
                                <div class="row">
                                    <div class="col-md-3 col-xs-6">
                                        <i class="icon-basket"></i>
                                        <h4 class="no-m">$14,213</h4>
                                    </div>
                                    <div class="col-md-3 col-xs-6">
                                        <i class="icon-globe"></i>
                                        <h4 class="no-m">$374,700</h4>
                                    </div>
                                    <div class="col-md-3 col-xs-6">
                                        <i class="icon-credit-card"></i>
                                        <h4 class="no-m">$2,134</h4>
                                    </div>
                                    <div class="col-md-3 col-xs-6">
                                        <i class="icon-shield"></i>
                                        <h4 class="no-m">907</h4>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <canvas id="chart1" height="165"></canvas>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Visitors Container-->
                <div class="col-md-6">
                    <div class="panel panel-white">
                        <div class="panel-heading clearfix">
                            <h3 class="panel-title">Visitors</h3>
                            <div class="panel-control">
                                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" class="panel-reload" data-original-title="Reload"><i class="icon-reload"></i></a>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="panel-header-stats">
                                <div class="row">
                                    <div class="col-md-3 col-xs-6">
                                        <i class="icon-users"></i>
                                        <h4 class="no-m">Total: 4500</h4>
                                    </div>
                                    <div class="col-md-3 col-xs-6">
                                        <i class="icon-user"></i>
                                        <h4 class="no-m">Male: 2600</h4>
                                    </div>
                                    <div class="col-md-3 col-xs-6">
                                        <i class="icon-user-female"></i>
                                        <h4 class="no-m">Female: 1900</h4>
                                    </div>
                                    <div class="col-md-3 col-xs-6">
                                        <i class="icon-user-follow"></i>
                                        <h4 class="no-m">Avg: 2250</h4>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <canvas id="chart2" height="165"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row">

                <!-- Tables Container -->
                <div class="col-md-6">
                    <div class="panel panel-white">
                        <div class="panel-heading clearfix">
                            <h3 class="panel-title">Table</h3>
                            <div class="panel-control">
                                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" class="panel-collapse" data-original-title="Expand/Collapse"><i class="icon-arrow-down"></i></a>
                                <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" class="panel-reload" data-original-title="Reload"><i class="icon-reload"></i></a>
                            </div>
                        </div>
                        <div class="panel-body statement-card">
                            <div class="statement-card-head">
                                <h3>Church Infinity<br><small>Donations</small></h3>
                                <p><sup>$</sup><b>207,430</b></p>
                            </div>
                            <table class="table table-responsive">
                                <tbody>
                                    <tr>
                                        <th scope="row">ORDER ID 4111</th>
                                        <td>johndoe</td>
                                        <td>N1</td>
                                        <td class="text-success"><b>$16</b></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ORDER ID 4110</th>
                                        <td>michaellewis</td>
                                        <td>N2</td>
                                        <td class="text-danger"><b>$13</b></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ORDER ID 4109</th>
                                        <td>emmagreen</td>
                                        <td>N3</td>
                                        <td class="text-success"><b>$16</b></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ORDER ID 4108</th>
                                        <td>sandrasmith</td>
                                        <td>N4</td>
                                        <td class="text-danger"><b>$13</b></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ORDER ID 4106</th>
                                        <td>emmagreen</td>
                                        <td>N6</td>
                                        <td class="text-success"><b>$16</b></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- Main Wrapper -->

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

</body>

</html>