<?php

header("Cache-Control: no-cache, must-revalidate");
header("Expires: Mon, 26 Jul 2010 05:00:00 GMT");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");


// Kickstart the framework
require('packages/loader.php');

// Kickstart the framework
$f3 = require('packages/lib/base.php');

session_start();


include_once('controller/connection.php');
$f3->config('config.ini');

$f3->route('POST /api/admin/group/add/group', function () {
    global $conn;
    include_once("groups/add_groups.php");
});
$f3->route('POST /api/admin/group/remove/group', function () {
    global $conn;
    include_once("groups/remove_a_group.php");
});
$f3->route('POST /api/admin/group/add/member', function () {
    global $conn;
    include_once("groups/add_members.php");
});
$f3->route('POST /api/admin/group/remove/member', function () {
    global $conn;
    include_once("groups/remove_members.php");
});
$f3->route('POST /api/user/group/send/message', function () {
    global $conn;
    include_once("groups/send_group_messages.php");
});
$f3->route('POST /api/user/group/get/messages', function () {
    global $conn;
    include_once("groups/get_group_messages.php");
});
$f3->route('POST /api/user/group/get/list', function () {
    global $conn;
    include_once("groups/get_group_list.php");
});
//auth
$f3->route('POST /api/auth/login', function () {
    global $conn;
    include_once("auth/login.php");
});
$f3->route('POST /api/auth/register', function () {
    global $conn;
    include_once("auth/register.php");
});

$f3->route('POST /api/auth/profile/update', function () {
    global $conn;
    include_once("auth/update_profile.php");
});

//news
$f3->route('POST /api/admin/news/create', function () {
    global $conn;
    include_once("news/create-news.php");
});
$f3->route('GET /api/user/news/get', function () {
    global $conn;
    include_once("news/get-news.php");
});
//testimonies
$f3->route('POST /api/admin/testimonies/create', function () {
    global $conn;
    include_once("testimonies/testimonies-create.php");
});
$f3->route('GET /api/user/testimonies/get', function () {
    global $conn;
    include_once("testimonies/testimonies-get.php");
});
//post
$f3->route('POST /api/user/post/create', function () {
    global $conn;
    include_once("post/create-post.php");
});
$f3->route('GET /api/user/post/get', function () {
    global $conn;
    include_once("post/get-post.php");
});
$f3->route('POST /api/user/post/remove', function () {
    global $conn;
    include_once("post/delete-post.php");
});

//event
$f3->route('POST /api/user/event/create', function () {
    global $conn;
    include_once("event/create-event.php");
});
$f3->route('GET /api/user/event/get', function () {
    global $conn;
    include_once("event/get-event.php");
});
$f3->route('POST /api/user/event/remove', function () {
    global $conn;
    include_once("event/delete-event.php");
});
//errors
$f3->set('ONERROR', function ($f3) {
    print($f3["ERROR"]["text"]);
    die();
});


$f3->run();
