<a href="/php/mysql/customers.php">customers</a>

<?php

require './config.php';

if ($result = mysqli_query($con, 'SHOW TABLES')) {

  var_dump($result);

  while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
    var_dump($row);
  }

  mysqli_free_result($result);
}

mysqli_close($con);

