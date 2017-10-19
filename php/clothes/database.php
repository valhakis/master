<?php

$container['db'] = function($c) {
  $db = $c['settings']['db'];
  $pdo = new PDO('mysql:host=' . $db['host'] . ';dbname=' . $db['name'], $db['user'], $db['pass']);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO__FETCH_ASSOC);

  return $pdo;
};

// CREATES CONNECTION TO THE DATABASE
$link = new mysqli('localhost', 'admin', 'admin', 'shared');

// CHECKS IF DATABASE CONNECTION WAS NOT SUCCESSFUL
if ($link->connect_error) {
  die('FAILED TO CONNECT TO DATABASE: ' . $link->connect_error);
}

// CREATES PRODUCTS TABLE IF TABLE DOES NOT EXIST
if (!$link->query('SELECT 1 FROM products LIMIT 1')) {
  $sql = file_get_contents('sql/products.sql');
  if (!$link->query($sql)) {
    die('Failed to create products table. ' . $link->error);
  }
}
