<?php

  include 'functions.php';

  if (isset($_GET['MOVIE'])){
      //PASS the connection and the movie id to a function
      $data = get_single_video($conn,$_GET['MOVIE']);
      echo json_encode($data);
      
  }else {
      //pass the connection and the movie id to a function
    $data = get_all_videos($conn,);
    echo json_encode($data);
  }


?>