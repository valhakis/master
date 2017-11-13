<?php

require './config.php';

if ($result = mysqli_query($con, 'SELECT * FROM users')) {

  if ($result->num_rows < 1) {
    die('NO USERS IN DATABASE');
  }

  $users = [];
  while ($user = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
    $users[] = $user;
  }
  echo json_encode($users);

  mysqli_free_result($result);
}

mysqli_close($con);

