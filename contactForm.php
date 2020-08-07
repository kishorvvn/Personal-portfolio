<?php
if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $name = $_POST['mail'];
  $name = $_POST['subject'];
  $name = $_POST['message'];

  $mailTo = "kishorkumar.chauhan@triosstudent.com"
  $headers = "From: ".$mailFrom;
  $txt = "You have received an e-mail from ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: Index.html?mailsend");
};

?>
