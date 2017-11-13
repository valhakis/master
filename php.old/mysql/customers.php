<?php

require './config.php';

if ($result = mysqli_query($con, 'SELECT * FROM customers')) {

  if ($result->num_rows < 1) {
    die('NO CUSTOMERS IN DATABASE');
  }

  $customers = [];
  while ($customer = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
    $customers[] = $customer;
  }
  echo json_encode($customers);

  mysqli_free_result($result);
}

mysqli_close($con);

