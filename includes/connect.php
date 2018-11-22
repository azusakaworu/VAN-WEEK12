<?php
   $user="root";
   $pw="";
   

   try {
    $conn = new PDO("mysql:host=localhost;dbname=vue_video", "$user", "$pw");

    //$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //echo "connected";

  } catch(PDOException $exception) {
      echo'connect Error!'.$exception->getMessage();
  }

?>