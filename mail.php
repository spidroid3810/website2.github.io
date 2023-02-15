<?php
//get data from form  

$name = $_POST['name'];
$last = $_POST['last'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message= $_POST['message'];
$to = "spidrox381@gmail.com";
$subject = "Mail From website";
$txt ="First Name = ". $name . "\r\n Last Name = ". $last . "\r\n Email = " . $email . "\r\n Phone = " . $phone . "\r\n Message =" . $message;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thanks.html");
?>