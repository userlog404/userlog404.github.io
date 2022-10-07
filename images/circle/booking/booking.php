<?php
	$ownerEmail = $_POST["classyneon@gmail.com"];
	$headers = 'From:' . $_POST["sender"] . 'Content-Type: '. $_POST["sender"] .'; charset=UTF-8' . "\r\n";
	$subject = 'An order from your site visitor';
	$messageBody = "";	
	
	$arr=array();
	$arr=$_POST;
	foreach ($arr as $key => $value) {
	   echo "$key".': '."$value".'&';
	   if (($value != 'nope') && ($key != 'classyneon@gmail.com') && ($key != 'sender')) {
		   $messageBody .="$key" . ': '."$value" . "\n\n";
		}
	}
		
	try{
		echo $_POST['Email'];
		echo $subject;
		echo $messageBody;

		if(!mail($ownerEmail, $subject, $messageBody, $headers)){
			throw new Exception('mail failed');
		}else{
			echo 'mail sent';
		}
	}catch(Exception $e){
		echo $e->getMessage() ."\n";
	}
?>