<?php


// email send

use PHPMailer\PHPMailer\PHPMailer;

require_once 'PHPMailer/PHPMailer.php';
require_once 'PHPMailer/Exception.php';
require_once 'PHPMailer/SMTP.php';
// end

$mail = new PHPMailer();
//Tell PHPMailer to use SMTP
$mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 2;
//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';
//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';
$mail->IsHTML(true);
$mail->SMTPDebug = false;

// $mail->Host = gethostbyname('smtp.gmail.com');
// if your network does not support SMTP over IPv6
//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;
//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'tls';
//Whether to use SMTP authentication
$mail->SMTPAuth = true;

// end email setup




function confiGmail($email, $pasword, $user_name)
{
    global $mail;
    //Username to use for SMTP authentication - use full email address for gmail
    $mail->Username = $email;
    //Password to use for SMTP authentication
    $mail->Password = $pasword;
    //Set who the message is to be sent from
    $mail->setFrom($email, $user_name);
}


function sendGmail($to, $subject, $message)
{
    global $mail;
    //Set who the message is to be sent to
    $mail->addAddress($to);
    //Set the subject line
    $mail->Subject = $subject;
    //Read an HTML message body from an external file, convert referenced images to embedded,
    $mail->Body = $message;
    //send the message, check for errors
    if (!$mail->send()) {
        die("Mailer Error: " . $mail->ErrorInfo);
    } else {
        return true;
    }
}
