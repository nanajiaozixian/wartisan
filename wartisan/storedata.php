<?php 

if ( isset($_POST['mailbox'])){
    
    $file = "email.txt";
    $current = file_get_contents($file);
    $email = stripcslashes($_POST['mailbox']);
    if (strstr($current,$email) == null){     
        $current .= $email."\r\n";
    }
    file_put_contents($file, $current);
}

?>