<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Events</title>

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
     <link href="assets/plugins/datatables/css/jquery.datatables.min.css" rel="stylesheet" type="text/css"/>	
     <link href="assets/plugins/datatables/css/jquery.datatables_themeroller.css" rel="stylesheet" type="text/css"/>	
     <link href="assets/plugins/bootstrap-datepicker/css/datepicker3.css" rel="stylesheet" type="text/css"/>
     
     <!-- Theme Styles -->
     <link href="assets/css/meteor.min.css" rel="stylesheet" type="text/css"/>
     <link href="assets/css/layers/dark-layer.css" class="theme-color" rel="stylesheet" type="text/css"/>
     <link href="assets/css/custom.css" rel="stylesheet" type="text/css"/>
     
     <script src="assets/plugins/3d-bold-navigation/js/modernizr.js"></script>
     <script src="assets/plugins/offcanvasmenueffects/js/snap.svg-min.js"></script>


</head>
<body class="compact-menu">

    <div class="overlay"></div>

    <!-- Colapseable chat box overview onthe right -->
    <nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right" id="cbp-spmenu-s1">
        <h3><span class="pull-left">Messages</span><a href="javascript:void(0);" class="pull-right" id="closeRight"><i class="icon-close"></i></a></h3>
        <div class="slimscroll">
            <a href="javascript:void(0);" class="showRight2"><img src="assets/images/avatar2.png" alt=""><span>Michael Lewis<small>Nice to meet you</small></span></a>
            <a href="javascript:void(0);" class="showRight2"><img src="assets/images/avatar3.png" alt=""><span>John Doe<small>Nice to meet you</small></span></a>
            <a href="javascript:void(0);" class="showRight2"><img src="assets/images/avatar4.png" alt=""><span>Emma Green<small>Nice to meet you</small></span></a>
            <a href="javascript:void(0);" class="showRight2"><img src="assets/images/avatar5.png" alt=""><span>Nick Doe<small>Nice to meet you</small></span></a>
            <a href="javascript:void(0);" class="showRight2"><img src="assets/images/avatar2.png" alt=""><span>Michael Lewis<small>Nice to meet you</small></span></a>
            <a href="javascript:void(0);" class="showRight2"><img src="assets/images/avatar3.png" alt=""><span>John Doe<small>Nice to meet you</small></span></a>
            <a href="javascript:void(0);" class="showRight2"><img src="assets/images/avatar4.png" alt=""><span>Emma Green<small>Nice to meet you</small></span></a>
            <a href="javascript:void(0);" class="showRight2"><img src="assets/images/avatar5.png" alt=""><span>Nick Doe<small>Nice to meet you</small></span></a>
        </div>
    </nav>

    <!-- Chat box DM page -->
    <nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right" id="cbp-spmenu-s2">
        <h3><span class="pull-left">Michael Lewis</span> <a href="javascript:void(0);" class="pull-right" id="closeRight2"><i class="fa fa-angle-right"></i></a></h3>
        <div class="slimscroll chat">
            <div class="chat-item chat-item-left">
                <div class="chat-image">
                    <img src="assets/images/avatar2.png" alt="">
                </div>
                <div class="chat-message">
                    Duis aute irure dolor?
                </div>
            </div>
            <div class="chat-item chat-item-right">
                <div class="chat-message">
                    Lorem ipsum dolor sit amet, dapibus quis, laoreet et.
                </div>
            </div>
            <div class="chat-item chat-item-left">
                <div class="chat-image">
                    <img src="assets/images/avatar2.png" alt="">
                </div>
                <div class="chat-message">
                    Ut ullamcorper, ligula.
                </div>
            </div>
            <div class="chat-item chat-item-right">
                <div class="chat-message">
                    In hac habitasse platea dict umst. ligula eu tempor eu id tincidunt.
                </div>
            </div>
            <div class="chat-item chat-item-left">
                <div class="chat-image">
                    <img src="assets/images/avatar2.png" alt="">
                </div>
                <div class="chat-message">
                    Curabitur pretium?
                </div>
            </div>
            <div class="chat-item chat-item-right">
                <div class="chat-message">
                    Etiam tempor. Ut tempor! ull amcorper.
                </div>
            </div>
        </div>
        <!-- Chat input box -->
        <div class="chat-write">
            <form class="form-horizontal" action="javascript:void(0);">
                <input type="text" class="form-control" placeholder="Say something">
            </form>
        </div>
    </nav>


    <!-- Search Bar -->
    <form class="search-form" action="#" method="GET">
        <div class="input-group">
            <input type="text" name="search" class="form-control search-input" placeholder="Type something...">
            <span class="input-group-btn">
                <button class="btn btn-default close-search" type="button"><i class="icon-close"></i></button>
            </span>
        </div>
        
    </form>


    <main class="page-content content-wrap">

        <!-- Page Nav Bar -->
        <div class="navbar">
            <div class="navbar-inner">
                <div class="sidebar-pusher">
                    <a href="javascript:void(0);" class="waves-effect waves-button push-sidebar">
                        <i class="icon-arrow-right"></i>
                    </a>
                </div>

                <!-- Logo Box -->
                <div class="logo-box">
                    <a href="index.html" class="logo-text"><span>Church Infinity</span></a>
                </div>

                <!-- Seach Button/Icon -->
                <div class="search-button">
                    <a href="javascript:void(0);" class="show-search"><i class="icon-magnifier"></i></a>
                </div>


                <div class="topmenu-outer">
                    <div class="top-menu">
                        <ul class="nav navbar-nav navbar-left">
                            <!-- side menu collapse/expand arrow -->
                            <li>		
                                <a href="javascript:void(0);" class="sidebar-toggle"><i class="icon-arrow-left"></i></a>
                            </li>
                            <!-- Settings -->
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="icon-settings"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-md dropdown-list theme-settings" role="menu">
                                    <li class="li-group">
                                        <ul class="list-unstyled">
                                            <li class="no-link" role="presentation">
                                                Fixed Header 
                                                <div class="ios-switch pull-right switch-md">
                                                    <input type="checkbox" class="js-switch pull-right fixed-header-check">
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="li-group">
                                        <ul class="list-unstyled">
                                            <li class="no-link" role="presentation">
                                                Fixed Sidebar 
                                                <div class="ios-switch pull-right switch-md">
                                                    <input type="checkbox" class="js-switch pull-right fixed-sidebar-check">
                                                </div>
                                            </li>
                                            <li class="no-link" role="presentation">
                                                Horizontal bar 
                                                <div class="ios-switch pull-right switch-md">
                                                    <input type="checkbox" class="js-switch pull-right horizontal-bar-check">
                                                </div>
                                            </li>
                                            <li class="no-link" role="presentation">
                                                Toggle Sidebar 
                                                <div class="ios-switch pull-right switch-md">
                                                    <input type="checkbox" class="js-switch pull-right toggle-sidebar-check">
                                                </div>
                                            </li>
                                            <li class="no-link" role="presentation">
                                                Compact Menu 
                                                <div class="ios-switch pull-right switch-md">
                                                    <input type="checkbox" class="js-switch pull-right compact-menu-check" checked>
                                                </div>
                                            </li>
                                            <li class="no-link" role="presentation">
                                                Hover Menu 
                                                <div class="ios-switch pull-right switch-md">
                                                    <input type="checkbox" class="js-switch pull-right hover-menu-check">
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="li-group">
                                        <ul class="list-unstyled">
                                            <li class="no-link" role="presentation">
                                                Boxed Layout 
                                                <div class="ios-switch pull-right switch-md">
                                                    <input type="checkbox" class="js-switch pull-right boxed-layout-check">
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="no-link"><button class="btn btn-default reset-options">Reset Options</button></li>
                                </ul>
                            </li>
                        </ul>


                        <!-- Mail Box notifications -->
                        <ul class="nav navbar-nav navbar-right">
                            <li>	
                                <a href="javascript:void(0);" class="show-search"><i class="icon-magnifier"></i></a>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-envelope-open"></i><span class="badge badge-danger pull-right">6</span></a>
                                <ul class="dropdown-menu title-caret dropdown-lg" role="menu">
                                    <li><p class="drop-title">You have 6 new  messages!</p></li>
                                    <li class="dropdown-menu-list slimscroll messages">
                                        <ul class="list-unstyled">
                                            <li>
                                                <a href="#">
                                                    <div class="msg-img"><div class="online on"></div><img class="img-circle" src="assets/images/avatar2.png" alt=""></div>
                                                    <p class="msg-name">Michael Lewis</p>
                                                    <p class="msg-text">Yeah science!</p>
                                                    <p class="msg-time">3 minutes ago</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="msg-img"><div class="online off"></div><img class="img-circle" src="assets/images/avatar4.png" alt=""></div>
                                                    <p class="msg-name">John Doe</p>
                                                    <p class="msg-text">Hi Nick</p>
                                                    <p class="msg-time">8 minutes ago</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="msg-img"><div class="online off"></div><img class="img-circle" src="assets/images/avatar3.png" alt=""></div>
                                                    <p class="msg-name">Emma Green</p>
                                                    <p class="msg-text">Let's meet!</p>
                                                    <p class="msg-time">56 minutes ago</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="msg-img"><div class="online on"></div><img class="img-circle" src="assets/images/avatar5.png" alt=""></div>
                                                    <p class="msg-name">Nick Doe</p>
                                                    <p class="msg-text">Nice to meet you</p>
                                                    <p class="msg-time">2 hours ago</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="msg-img"><div class="online on"></div><img class="img-circle" src="assets/images/avatar2.png" alt=""></div>
                                                    <p class="msg-name">Michael Lewis</p>
                                                    <p class="msg-text">Yeah science!</p>
                                                    <p class="msg-time">5 hours ago</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="msg-img"><div class="online off"></div><img class="img-circle" src="assets/images/avatar4.png" alt=""></div>
                                                    <p class="msg-name">John Doe</p>
                                                    <p class="msg-text">Hi Nick</p>
                                                    <p class="msg-time">9 hours ago</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="drop-all"><a href="#" class="text-center">All Messages</a></li>
                                </ul>
                            </li>


                            <!-- Tasks/ All Alerts -->
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-bell"></i><span class="badge badge-danger pull-right">3</span></a>
                                <ul class="dropdown-menu title-caret dropdown-lg" role="menu">
                                    <li><p class="drop-title">You have 3 pending tasks!</p></li>
                                    <li class="dropdown-menu-list slimscroll tasks">
                                        <ul class="list-unstyled">
                                            <li>
                                                <a href="#">
                                                    <div class="task-icon badge badge-success"><i class="fa fa-user"></i></div>
                                                    <span class="badge badge-roundless badge-default pull-right">1m</span>
                                                    <p class="task-details">New user registered</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="task-icon badge badge-primary"><i class="fa fa-refresh"></i></div>
                                                    <span class="badge badge-roundless badge-default pull-right">24m</span>
                                                    <p class="task-details">3 Charts refreshed</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <div class="task-icon badge badge-danger"><i class="fa fa-phone"></i></div>
                                                    <span class="badge badge-roundless badge-default pull-right">24m</span>
                                                    <p class="task-details">2 Missed calls</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="drop-all"><a href="#" class="text-center">All Tasks</a></li>
                                </ul>
                            </li>


                            <!-- User profile -->
                            <li class="dropdown">
                                <!-- Profile Picture -->
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <span class="user-name">Nick<i class="fa fa-angle-down"></i></span>
                                    <img class="img-circle avatar" src="assets/images/avatar1.png" width="40" height="40" alt="">
                                </a>
                                <!-- Profile Menu -->
                                <ul class="dropdown-menu dropdown-list" role="menu">
                                    <li role="presentation"><a href="profile.html"><i class="icon-user"></i>Profile</a></li>
                                    <li role="presentation"><a href="inbox.html"><i class="icon-envelope-open"></i>Inbox<span class="badge badge-success pull-right">4</span></a></li>
                                    <li role="presentation" class="divider"></li>
                                    <li role="presentation"><a href="login.html"><i class="icon-key m-r-xs"></i>Log out</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0);" id="showRight">
                                    <i class="icon-bubbles"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        
    
    <!-- Navbar -->
    <div class="page-sidebar sidebar">
        <div class="page-sidebar-inner slimscroll">

            <!-- Side menu -->
            <ul class="menu accordion-menu">
                <!-- Dashboard -->
                <li class="active">
                    <a href="index.html" class="waves-effect waves-button"><span class="menu-icon icon-home"></span><p>Dashboard</p><span class="active-page"></span></a>
                </li>

                <!-- Profile -->
                <li>
                    <a href="profile.html" class="waves-effect waves-button"><span class="menu-icon icon-user"></span><p>Profile</p></a>
                </li>

                <!-- Mail Box -->
                <li class="droplink">
                    <a href="#" class="waves-effect waves-button"><span class="menu-icon icon-envelope-open"></span><p>Mailbox</p><span class="arrow"></span></a>
                    <ul class="sub-menu">
                        <li><a href="inbox.html">Inbox</a></li>
                        <li><a href="message-view.html">View Message</a></li>
                        <li><a href="compose.html">Compose</a></li>
                    </ul>
                </li>

                <!-- Registration and Sign Ups -->
                <li class="droplink">
                    <a href="#" class="waves-effect waves-button"><p>Registration and Sign Ups</p><span class="arrow"></span></a>
                    

                    <ul class="sub-menu">
                        <li><a href="view-signups.html">View Sign Ups</a></li>
                        <li><a href="create-group-form.html">Create Group</a></li>
                    </ul>
                </li>
                
                <!--Business Lounge-->
                <li class="droplink">
                    <a href="#" class="waves-effect waves-button"><p>Business Lounge</p><span class="arrow"></span></a>
                    

                    <ul class="sub-menu">
                        <li><a href="business-lounge.html">View Business Lounge</a></li>
                    </ul>
                </li>


                <!-- About  -->
                <li class="droplink">
                    <a href="#" class="waves-effect waves-button"><p>About</p><span class="arrow"></span></a>
                    

                    <ul class="sub-menu">
                        <li><a href="about.html">Church About</a></li>
                    </ul>
                </li>

                <!-- Events-->
                <li class="droplink">
                    <a href="#" class="waves-effect waves-button"><p>Events</p><span class="arrow"></span></a>
                    

                    <ul class="sub-menu">
                        <li><a href="events.html">View Events</a></li>
                    </ul>
                </li>
                
            </ul>
        </div><!-- Page Sidebar Inner -->
    </div><!-- Page Sidebar -->




    <!-- Main Container -->
    <div class="page-inner">
        <div class="page-title">
            <!-- Page Title -->
            <h3 class="breadcrumb-header">Events</h3>

            <!-- Page Path e.g Home/Events -->
            <div class="page-breadcrumb">
                <ol class="breadcrumb breadcrumb-with-header">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Events</a></li>
                    <li class="active">View Events</li>
                </ol>
            </div>
        </div>

        
        <div id="main-wrapper">
            <div class="row">
                <div class="col-md-12">

                    <!-- Row Grouping Table -->
                    <div class="panel panel-white">
                        <div class="panel-heading">
                            <h4 class="panel-title">Current Events</h4>
                        </div>
                        <div class="panel-body">
                       <div class="table-responsive">
                           <table id="example2" class="display table" style="width: 100%; cellspacing: 0;">
                               <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Age</th>
                                        <th>Start date</th>
                                        <th>Salary</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Age</th>
                                        <th>Start date</th>
                                        <th>Salary</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>System Architect</td>
                                        <td>Edinburgh</td>
                                        <td>61</td>
                                        <td>2011/04/25</td>
                                        <td>$320,800</td>
                                    </tr>
                                    <tr>
                                        <td>Garrett Winters</td>
                                        <td>Accountant</td>
                                        <td>Tokyo</td>
                                        <td>63</td>
                                        <td>2011/07/25</td>
                                        <td>$170,750</td>
                                    </tr>
                                    <tr>
                                        <td>Ashton Cox</td>
                                        <td>Junior Technical Author</td>
                                        <td>San Francisco</td>
                                        <td>66</td>
                                        <td>2009/01/12</td>
                                        <td>$86,000</td>
                                    </tr>
                                    <tr>
                                        <td>Cedric Kelly</td>
                                        <td>Senior Javascript Developer</td>
                                        <td>Edinburgh</td>
                                        <td>22</td>
                                        <td>2012/03/29</td>
                                        <td>$433,060</td>
                                    </tr>
                                    <tr>
                                        <td>Airi Satou</td>
                                        <td>Accountant</td>
                                        <td>Tokyo</td>
                                        <td>33</td>
                                        <td>2008/11/28</td>
                                        <td>$162,700</td>
                                    </tr>
                                    <tr>
                                        <td>Brielle Williamson</td>
                                        <td>Integration Specialist</td>
                                        <td>New York</td>
                                        <td>61</td>
                                        <td>2012/12/02</td>
                                        <td>$372,000</td>
                                    </tr>
                                    <tr>
                                        <td>Herrod Chandler</td>
                                        <td>Sales Assistant</td>
                                        <td>San Francisco</td>
                                        <td>59</td>
                                        <td>2012/08/06</td>
                                        <td>$137,500</td>
                                    </tr>
                                    <tr>
                                        <td>Rhona Davidson</td>
                                        <td>Integration Specialist</td>
                                        <td>Tokyo</td>
                                        <td>55</td>
                                        <td>2010/10/14</td>
                                        <td>$327,900</td>
                                    </tr>
                                    <tr>
                                        <td>Colleen Hurst</td>
                                        <td>Javascript Developer</td>
                                        <td>San Francisco</td>
                                        <td>39</td>
                                        <td>2009/09/15</td>
                                        <td>$205,500</td>
                                    </tr>
                                    <tr>
                                        <td>Sonya Frost</td>
                                        <td>Software Engineer</td>
                                        <td>Edinburgh</td>
                                        <td>23</td>
                                        <td>2008/12/13</td>
                                        <td>$103,600</td>
                                    </tr>
                                    <tr>
                                        <td>Jena Gaines</td>
                                        <td>Office Manager</td>
                                        <td>London</td>
                                        <td>30</td>
                                        <td>2008/12/19</td>
                                        <td>$90,560</td>
                                    </tr>
                                   
                                </tbody>
                           </table>
                       </div>
                        </div>
                    </div>
                    <div class="panel panel-white">
                        <div class="panel-heading">
                            <h4 class="panel-title">Add rows</h4>
                        </div>
                        <div class="panel-body">
                            <button type="button" class="btn btn-success m-b-sm" data-toggle="modal" data-target="#myModal">Add new row</button>
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
                            <div class="table-responsive">
                                <table id="example3" class="display table" style="width: 100%; cellspacing: 0;">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
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