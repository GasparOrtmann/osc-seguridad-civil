<?php
if (isset($_POST["sendEmailBtn"])){
    $name = $_POST["name"];
    $empresa = $_POST["empresa"];
    $email = $_POST["email"];
    $telephone = $_POST["telephone"];
    $message = $_POST["message"];

    $from = $name;
    $to = "gasparortmann@gmail.com";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: '.$email.'<'.$email.'>' . "\r\n".'Reply-To: '.$email."\r\n" . 'X-Mailer: PHP/' . phpversion();
    $message = '<!doctype html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport"
					  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
				<meta http-equiv="X-UA-Compatible" content="ie=edge">
				<title>Document</title>
			</head>
			<body>
			<span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">'.$message.'</span>
				<div class="container">
                 '.$message.'<br/>
                    <br/>
                  Email: '.$fromEmail.'<br/>
                  Nombre: '.$name.'<br/>';
                  if (strlen($_POST["empresa"]) > 0) { 
                    'Empresa: '.$empresa.'<br/>';
                  }
                  if (strlen($_POST["telephone"]) > 0) { 
                    'Teléfono: '.$telephone.'';
                  }  
                  '
				</div>
			</body>
			</html>';
    $result = @mail($to, $from, $message, $headers);

    echo '<script>alert("Email sent successfully !")</script>';
    echo '<script>window.location.href="index.php";</script>';
}
?>