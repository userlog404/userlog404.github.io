<?php

if(isset($_POST['email']) && $_POST['email'] != ''){
        //submit

    if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
    
        $to = "classyneon@gmail.com";
    
        $mailheader = "From:".$name."<".$email.">\r\n";
    
        mail($to, $subject, $message, $mailheader) or die("Error!");
    
        echo '<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="refresh" content="5; url=https://userlog404.github.io"/>
            <title>$Julius~M</title>
            <link rel="stylesheet" href="/fontawesome.css">
            <link rel="stylesheet" href="/style.css">
        </head>
        <body>
            <div class="container">
                <br>
                <br>
                <br>
                <h1>Thank you for contacting me. I will get back to you as soon as possible!</h1>
                <br>
                <br>
                <br>
                <p class="back">Taking you back <a href="https://userlog404.github.io">HOME 🙂</a>.</p>
            </div>
            
        </body>
        </html>
        ';
    }
}?>
