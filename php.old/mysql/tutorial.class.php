<?php

class Tutorial {
  public function createTable() {
    global $con, $end;

    if (mysqli_query($con, file_get_contents('./tutorials.sql'))) {
      $end['successes'][] = 'Table \'tutorials\' has been created.';
    } else {
      $end['errors'][] = mysqli_error($con);
    }
  }

  public function dropTable() {
    global $con, $end;

    if (mysqli_query($con, 'DROP TABLE tutorials')) {
      $end['successes'][] = 'Table \'tutorials\' has been dropped.';
    } else {
      $end['errors'][] = mysqli_error($con);
    }
  }
};
