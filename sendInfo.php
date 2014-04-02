<?php
function SendRequestInformation($name, $email, $phone, $location, $blades) {
	// require_once("phpmailer/class.phpmailer.php"); 
	require_once('class.phpmailer-lite.php');
	
	$mail = new PHPMailerLite(); # set up the PHP mailer functions
	$mail->IsMail(); // telling the class to use native PHP mail()
	
	$mail->SetFrom('info@radisys.com', 'T Series Contact Form');
	$ToMail = "kevint@clear.net"; #"kevin.thornton@radisys.com";  # INSIDE SALES EMAIL --?????????
	$ToName = "Kevin Thornton"; # Kevin Thornton
	$mail->AddAddress($ToMail, $ToName);

	# regular vars
	$FromMail = "info@radisys.com"; # kevin.thornton
	# mail vars
	$mail->From     = $FromMail; 		 //put the from email address here
	$mail->FromName = ("T Series Configurator Contact Form");	 //put the from friendly name here
	$mail->Mailer   = "smtp"; 				//use this to send via SMTP protocal using systems MTA
	$mail->IsHTML(true); 					//allow us to try HTML formatted email
	
	//Prepare the HTML body
	$body = "<p>This email is from the Radisys T Series Configurator Contact Form<br><br></p>\n\n";
	$body .= "<p>Name: $name <br>\n";
	$body .= "Email: $email <br>\n";
	$body .= "Phone Number: $phone <br>\n";
	$body .= "Location: $location <br>\n";
	$body .= "Blade Configuration: <br/>\n $blades <br/>\n";
	$body .= "<br></p>\n";
	
	$mail->MsgHTML($body);
	$mail->Subject = "Radisys T Series Configurator Contact Form";
	
		
	if (!$mail->Send()) { //all is well in the world
 		// echo "Mailer Error: " . $mail->ErrorInfo;
		$ErrorMsg = "<p>Please contact <a href=\"mailto:kevin.thornton@radisys.com\">support</a> with the following error message.</p><p>Something went wrong with the T Series Configurator Contact form. $mail->ErrorInfo</p>";
		return $ErrorMsg;
	} else {  //an error occurred
		header( 'Location: http://staging.radisys.com/t-series-configurator/information-sent/' ) ;
		print "<p>mail sent</p>";	
		return ""; // all OK 
	}
} # send request info


# was this posted?
if(isset($_POST['customerEmail'])) {
	// print "<p>form submitted</p>";
	#test the PHP form data for any funny stuff
	$ValueArray = array();
	$PostErrorMsg = "";
	// values
	$ValueArray["name"] = $_POST['customerName'] != '' ? strip_tags($_POST['customerName']) : '';
	$ValueArray["email"] = $_POST['customerEmail'] != '' ? strip_tags($_POST['customerEmail']) : '';
	$ValueArray["phone"] = $_POST['customerPhone'] != '' ? strip_tags($_POST['customerPhone']) : '';
	$ValueArray["location"] = $_POST['customerLocation'] != '' ? strip_tags($_POST['customerLocation']) : '';
	
	
	// combine the blades into one string
	$bladeConfig = "";
	if($_POST['pp81Blades'] != '') {
		$bladeConfig = "PP81 Blades: " . $_POST['pp81Blades'] . "\n";
	} 
	if($_POST['xe100Blades'] != '') {
		$bladeConfig = "XE100 Blades: " . $_POST['xe100Blades'] . "\n";
	} 
	if($_POST['4648Blades'] != '') {
		$bladeConfig = "4648 Blades: " . $_POST['4648Blades'] . "\n";
	} 
	if($_POST['7240Blades'] != '') {
		$bladeConfig = "7240 Blades: " . $_POST['7240Blades'] . "\n";
	} 
	if($_POST['optionalSoftware1'] != '') {
		$bladeConfig = "Include: Statistical Load Balancing\n";
	} 
	if($_POST['optionalSoftware2'] != '') {
		$bladeConfig = "Include: Backplane Redundancy\n";
	} 
	
	if($PostErrorMsg == "") {	
		#print "<p>no errors in PostErrorMsg</p>  ";
		$SentErrorMsg = SendRequestInformation($ValueArray['name'], $ValueArray['email'], $ValueArray['phone'], $ValueArray['location'], $bladeConfig);
		if ($SentErrorMsg == "") {
			print "<p>Thank you for providing this information to us. We will respond to your request within 3 busniess days.</p>";
		} else {
			# something went wrong with the mail
			error_reporting(E_ALL);
			ini_set("display_errors", 1);
			print "<html>" . $SentErrorMsg . "</html>";
		}	
	} else {
		# PostErrorMsg had values in it which means that something went wrong with the form submission
		print "<p>It would appear that something went wrong with the form or you did not have Javascript turned on. The following values were missing:<br/> ";
		print $PostErrorMsg;
		print "<br/> Please go back and fill out all the elements in the form.</p>";
		
	}
} 
?>

</body>
</html>