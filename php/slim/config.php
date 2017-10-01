<?php

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
