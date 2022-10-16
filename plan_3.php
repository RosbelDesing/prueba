<?php


if (isset($_POST['send'])){ 
    if (!empty($_POST['name']) && !empty($_POST['message']) && !empty($_POST['email']) && !empty($_POST['tel']) && !empty($_POST['lang'])) {
        $name = $_POST['name'];
        $message = $_POST['message'];
        $email = $_POST['email'];
        $tel = $_POST['tel'];
        $lang = $_POST['lang'];
        $adressee = 'jorgerosbelcruzarias@gmail.com';
        $header = "Reply-To:" . $email . "\n";
        $Full_message = $message . "\nReply-to: " . $email;
        $plan = "Solicitud del Plan #3: Hoteles y restaurantes";
        $mail = mail($adressee,$plan,$name,$tel,$lang,$Full_message,$header);
}
        if ($mail) {
            echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>";
        }
}