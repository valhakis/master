<?php

define('DB_HOST', 'localhost');
define('DB_USER', 'admin');
define('DB_PASS', 'admin');
define('DB_NAME', 'shared');

$link = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

if ($link === false) {
  die('FAILED TO CONNECT TO DATABASE' . mysql_connect_error());
}

$config = [
  'settings' => [
    'determineRouteBeforeAppMiddleware' => false,
    'debug' => true,
    'addContentLengthHeader' => false,
    'displayErrorDetails' => true,
    'logger' => [
      'name' => 'slim-app',
      'level' => Monolog\Logger::DEBUG,
      'path' => __DIR__ . '/logs/app.log',
    ],
    'db' => [
      'driver' => 'mysql',
      'host' => 'localhost',
      'database' => 'slim',
      'username' => 'admin',
      'password' => 'admin',
      'charset'   => 'utf8',
      'collation' => 'utf8_unicode_ci',
      'prefix'    => '',
    ]
  ]
];
