<?php

require './config.php';
require './tutorial.class.php';

$end = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $end['operation'] = $_POST['operation'];

  if ($end['operation'] === 'createTable') {
    Tutorial::createTable();
  } else if ($end['operation'] === 'dropTable') {
    Tutorial::dropTable();
  }

  die(json_encode($end));
} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  require './tutorials.html';
} else {
  die('REQUEST METHOD NOT RECOGNIZED');
}
?>
