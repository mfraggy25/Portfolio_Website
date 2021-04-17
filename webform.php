<?php

$message_sent = false;
if (isset($_POST['email']) && $_POST['email'] != '') {

    if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {

        //submit the form
        $userName = $_POST['name'];
        $userEmail = $_POST['email'];
        $userNumber = $_POST['number'];
        $usermessageSubject = $_POST['subject'];
        $usermessage = $_POST['message'];

        $to = "michael.fragiskatos@gmail.com";
        $body = "";

        $body .= "From: " . $userName . "\r\n";
        $body .= "Email: " . $userEmail . "\r\n";
        $body .= "Number: " . $userNumber . "\r\n";
        $body .= "Message: " . $message . "\r\n";

        mail($to, $messageSubject, $body);

        $message_sent = true;
    }
}

?>

<?php
if ($message_sent) :
?>
    <h3>Thanks, we'll be in touch!</h3>
    <?else:
    ?>
    <form method="POST" action="webform.php">
        <div class="contact-form-in">
            <h2>Send a Message</h2>
            <div class="in-box-form">
                <div class="in-box-input row1">
                    <input type="text" id="name" name="required" placeholder="Name">
                </div>
                <div class="in-box-input row1">
                    <input type="email" id="email" name="required" placeholder="E-mail">
                </div>
                <div class="in-box-input row1">
                    <input type="number" id="number" name="required" placeholder="Number">
                </div>
                <div class="in-box-input row1">
                    <input type="text" id="subject" name="required" placeholder="Subject">
                </div>
                <div class="in-box-input row2">
                    <textarea name="" id="message" placeholder="Your Message Here"></textarea>
                </div>
                <button type="submit" class="btn text-left">Send</button>
            </div>
        </div>
    </form>
<?php
endif;
?>