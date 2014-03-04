<?php
 
if(isset($_POST['email'])) {
 
      
    $email_to = "iainbruceandrew@gmail.com";
 
    $email_subject = "hi!";
 
     
 
     
 
    function died($error) {
 
        // error code
 
        echo "sorry, there were error(s) found with the form you submitted!";
 
        echo "these errors appear below.<br /><br />";
 
        echo $error."<br /><br />";
 
        echo "please go back and fix these errors.<br /><br />";
 
        die();
 
    }
 
     
 
    // validation expected data exists
 
    if(!isset($_POST['first_name']) ||
  
        !isset($_POST['email']) ||
  
        !isset($_POST['comments'])) {
 
        died('sorry, there appears to be a problem with the form you submitted.');      
 
    }
 
     
 
    $first_name = $_POST['first_name']; // required
  
    $email_from = $_POST['email']; // required
  
    $comments = $_POST['comments']; // required
 
     
 
    $error_message = "";
 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
 
    $error_message .= 'the email address you entered does not appear to be valid!<br />';
 
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$first_name)) {
 
    $error_message .= 'the name you entered does not appear to be valid!<br />';
 
  }
 
  if(strlen($comments) < 2) {
 
    $error_message .= 'the comments you entered do not appear to be valid!<br />';
 
  }
 
  if(strlen($error_message) > 0) {
 
    died($error_message);
 
  }
 
    $email_message = "form details below.\n\n";
 
     
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 
     
 
    $email_message .= "First Name: ".clean_string($first_name)."\n";
  
    $email_message .= "Email: ".clean_string($email_from)."\n";
  
    $email_message .= "Comments: ".clean_string($comments)."\n";
 
     
 
     
 
// email headers
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $email_subject, $email_message, $headers); 
 
?>
 
 
 
<!-- success html -->
 
 
 
<p style="font-size:5em;font-family:futura;color:#0197DD;text-align:center;margin-top:3em">thanks!<p>

 
 
<?php
 
}
 
?>