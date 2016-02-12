<?php
/**
 * mail.php
 * 
 * Project: portfolio
 * User:    Félix Dion Robidoux
 * Date:    09/02/2015
 * Time:    8:44 AM
 */

$valide = false;

if (isset($_POST["txtNom"]))
{
	if (isset($_POST["txtEmail"]))
	{
		if (isset($_POST["txtMessage"]))
		{
			$valide = true;
		}
		else
		{
			echo "ERREUR";
		}
	}
	else
	{
		echo "ERREUR";
	}
}
else
{
	echo "ERREUR";
}

// Grosse condition
if ($valide)
{
	$message = $_POST["txtMessage"];
	$message = wordwrap($message, 70, "\r\n");

	$headers = 'From: '. $_POST["txtEmail"] . "\r\n" .
	           'Reply-To: '. $_POST["txtEmail"] . "\r\n" .
	           'X-Mailer: PHP/' . phpversion();

	mail('felix.robidoux@gmail.com', 'MESSAGE DE '.$_POST["txtNom"], $message, $headers);
}

http_redirect("http://www.fdrobidoux.com");