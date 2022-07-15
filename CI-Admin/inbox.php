<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inbox</title>


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
     <link rel="stylesheet" href="assets/css/custom.css">
     
     <!-- Theme Styles -->
     <link href="assets/css/meteor.min.css" rel="stylesheet" type="text/css"/>
     <link href="assets/css/layers/dark-layer.css" class="theme-color" rel="stylesheet" type="text/css"/>
     <link href="assets/css/custom.css" rel="stylesheet" type="text/css"/>
     
     <script src="assets/plugins/3d-bold-navigation/js/modernizr.js"></script>
     <script src="assets/plugins/offcanvasmenueffects/js/snap.svg-min.js"></script>
     
</head>
<body class="compact-menu">
<<<<<<< HEAD

   <!-- Header + Menu -->
   <?php 
        
    require("header.php");
            
    ?>
=======
    <?php include_once("components.php"); ?>

>>>>>>> 98b517b37ae160bc278c2ae51224606718d922e6

    <!-- Page Content -->
    <div class="page-inner">
        <div class="page-title">
            <div class="page-breadcrumb">
                <ol class="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li class="active">Inbox</li>
                </ol>
            </div>
        </div>
        <div id="main-wrapper">
            <div class="row m-t-md">
                <div class="col-md-12">
                    <div class="row mailbox-header">
                        <div class="col-md-2">
                            <a href="compose.html" class="btn btn-info btn-block">Compose</a>
                        </div>
                        <div class="col-md-6">
                            <h2>Inbox</h2>
                        </div>
                        <div class="col-md-4">
                            <form action="#" method="GET">
                                <div class="input-group">
                                    <input type="text" name="search" class="form-control input-search" placeholder="Search">
                                    <span class="input-group-btn">
                                        <button class="btn btn-primary" type="button"><i class="fa fa-search"></i></button>
                                    </span>
                                </div><!-- Input Group -->
                            </form>
                       </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <ul class="list-unstyled mailbox-nav">
                        <li class="active"><a href="inbox.html"><i class="icon-envelope-open"></i>Inbox <span class="badge badge-info pull-right">4</span></a></li>
                        <li><a href="#"><i class="icon-paper-plane"></i>Sent <span class="badge badge-default pull-right">3</span></a></li>
                        <li><a href="#"><i class="icon-doc"></i>Draft</a></li>
                        <li><a href="#"><i class="icon-ban"></i>Spam <span class="badge badge-default pull-right">7</span></a></li>
                        <li><a href="#"><i class="icon-trash"></i>Trash</a></li>
                    </ul>
                </div>
                <div class="col-md-10">
                    <div class="mailbox-content">
                    <table class="table">
                        <thead>
                            <tr>
                                <th colspan="1" class="hidden-xs">
                                    <span><input type="checkbox" class="check-mail-all"></span>
                                </th>
                                <th class="text-right" colspan="5">
                                    <span class="text-muted m-r-sm">20 of 346 </span>
                                    <a class="btn btn-default m-r-sm" data-toggle="tooltip" data-placement="top" title="Refresh"><i class="fa fa-refresh"></i></a>
                                    <div class="btn-group m-r-sm mail-hidden-options">
                                        <a class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Delete"><i class="fa fa-trash"></i></a>
                                        <a class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Report Spam"><i class="fa fa-exclamation-circle"></i></a>
                                        <a class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Mark as Important"><i class="fa fa-star"></i></a>
                                        <a class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Mark as Read"><i class="fa fa-pencil"></i></a>
                                    </div>
                                    <div class="btn-group m-r-sm mail-hidden-options">
                                        <div class="btn-group">
                                            <a class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-folder"></i> <span class="caret"></span></a>
                                            <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                                <li><a href="#">Social</a></li>
                                                <li><a href="#">Forums</a></li>
                                                <li><a href="#">Updates</a></li>
                                                <li class="divider"></li>
                                                <li><a href="#">Spam</a></li>
                                                <li><a href="#">Trash</a></li>
                                                <li class="divider"></li>
                                                <li><a href="#">New</a></li>
                                            </ul>
                                        </div>
                                        <div class="btn-group">
                                            <a class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-tags"></i> <span class="caret"></span></a>
                                            <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                                <li><a href="#">Work</a></li>
                                                <li><a href="#">Family</a></li>
                                                <li><a href="#">Social</a></li>
                                                <li class="divider"></li>
                                                <li><a href="#">Primary</a></li>
                                                <li><a href="#">Promotions</a></li>
                                                <li><a href="#">Forums</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="btn-group">
                                        <a class="btn btn-default"><i class="fa fa-angle-left"></i></a>
                                        <a class="btn btn-default"><i class="fa fa-angle-right"></i></a>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="unread">
                                <td class="hidden-xs">
                                    <span><input type="checkbox" class="checkbox-mail"></span>
                                </td>
                                <td class="hidden-xs">
                                    <i class="fa fa-star icon-state-warning"></i>
                                </td>
                                <td class="hidden-xs">
                                    Google
                                </td>
                                <td>
                                    Nullam quis risus eget urna mollis ornare vel eu leo
                                </td>
                                <td>
                                </td>
                                <td>
                                    21 march
                                </td>
                            </tr>
                            <tr class="unread">
                                <td class="hidden-xs">
                                    <span><input type="checkbox" class="checkbox-mail"></span>
                                </td>
                                <td class="hidden-xs">
                                    <i class="fa fa-star icon-state-warning"></i>
                                </td>
                                <td class="hidden-xs">
                                    Themeforest
                                </td>
                                <td>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                </td>
                                <td>
                                </td>
                                <td>
                                    20 march
                                </td>
                            </tr>
                            <tr class="unread">
                                <td class="hidden-xs">
                                    <span><input type="checkbox" class="checkbox-mail"></span>
                                </td>
                                <td class="hidden-xs">
                                    <i class="fa fa-star icon-state-warning"></i>
                                </td>
                                <td class="hidden-xs">
                                    Adobe
                                </td>
                                <td>
                                    Nullam quis risus eget urna mollis ornare vel eu leo
                                </td>
                                <td>
                                    <i class="fa fa-paperclip"></i>
                                </td>
                                <td>
                                    18 march
                                </td>
                            </tr>
                            <tr class="unread">
                                <td class="hidden-xs">
                                    <span><input type="checkbox" class="checkbox-mail"></span>
                                </td>
                                <td class="hidden-xs">
                                    <i class="fa fa-star icon-state-warning"></i>
                                </td>
                                <td class="hidden-xs">
                                    Apple
                                </td>
                                <td>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                                </td>
                                <td>
                                    <i class="fa fa-paperclip"></i>
                                </td>
                                <td>
                                    14 march
                                </td>
                            </tr>
                            <tr class="read">
                                <td class="hidden-xs">
                                    <span><input type="checkbox" class="checkbox-mail"></span>
                                </td>
                                <td class="hidden-xs">
                                    <i class="fa fa-star"></i>
                                </td>
                                <td class="hidden-xs">
                                    Microsoft
                                </td>
                                <td>
                                    Nullam quis risus eget urna mollis ornare vel eu leo
                                </td>
                                <td>
                                    <i class="fa fa-paperclip"></i>
                                </td>
                                <td>
                                    11 march
                                </td>
                            </tr>
                          
                        </tbody>
                    </table>
                    </div>
                </div>
            </div><!-- Row -->
        </div><!-- Main Wrapper -->


       <!-- Footer -->
       <?php 
                
        require("footer.php");
            
        ?>
        
    </div><!-- Page Inner -->
</main><!-- Page Content -->




    
</body>
</html>