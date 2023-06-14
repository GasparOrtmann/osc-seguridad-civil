<?php
if (isset($_POST["sendEmailBtn"])){
    $name = $_POST["name"];
    if(empty($_POST["empresa"])){
      $empresa = "";
    }else{
      $empresa = "Empresa" + $_POST["empresa"];
    }
    $email = $_POST["email"];
    if(empty($_POST["telephone"])){
      $telephone = "";
    }else{
      $telephone = "Teléfono" + $_POST["telephone"];
    }
    $message = $_POST["message"];

    $to = "gasparortmann@gmail.com";
    $from = $name;
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
                  Email: '.$email.'<br/>
                  Nombre: '.$name.'<br/>'
                  .$empresa.'<br/>'
                 .$telephone.'
        </div>
			</body>
			</html>';
    $result = @mail($to, $from, $message, $headers);

    echo '<script>alert("Mensaje enviado correctamente")</script>';
    echo '<script>window.location.href="index.html";</script>';
}