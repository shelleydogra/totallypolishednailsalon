<?php

if(isset($_POST['submit'])) {
	
	$to = "cliff.dogra@gmail.com";
	$subject = "Potential Client from totallypolishednailsalon.com Contact Form";
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$comment = $_POST['comment'];
		
		
	if (!$_POST['name']) {
		$errName = 'Please Enter Your Name.';
	}
		
	$body = "From: $name\n Phone: $phone\n Email: $email\n Message:\n $comment\n";

	
/*
	mail($to, $subject, $body);
	header('location: contact-thanks.html');
*/
	

	if (!$errName) {
		if (mail($to, $subject, $body)) {
			header('location: contact-thanks.html');
		} else {
			echo 'error';
		}
	} else {
		echo 'Not Sent';
	}


}

?>