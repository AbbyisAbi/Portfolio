<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$subject = "A request has been submitted!";

$mailheader = "From:".$name."<".$email.">/r/n"; 

$recipient = "abbyjcurt@gmail.com";

mail($recipient, $subject, $message, $mailheader)
or die("Error!");

echo'
<!DOCTYPE html>

<html>
<head>
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@200;400;700&family=Roboto:wght@100;400;500;700;900&display=swap" rel="stylesheet">
	<title>
		Abigail Curtis | Front-End Web Developer
	</title>
</head>


<body>
   
    
        <div class="decorSquare1">
    
        </div>
        <div class="decorSquare2">
            
        </div>

    <section class="thankyou" id="thankyou">
        <h1 class="thankyouHeader">
            Thank you for contacting me! I will get back to you as soon as possible.
        </h1>
            
<a href="http://www.abigailcurtis.net" class="returnHome">Return home</a>        </div>
        
       


    

</body>

</html>
';

?>