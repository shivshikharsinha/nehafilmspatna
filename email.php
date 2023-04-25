<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  
  $to = "shiv.shikhar.3@gmail.com";
  $subject = "New message from " . $name;
  $body = "Name: " . $name . "\n\nEmail: " . $email . "\n\nMessage: " . $message;
  $headers = "From: " . $email;
  
  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully";
  } else {
    echo "Message sending failed";
  }
}
?>
