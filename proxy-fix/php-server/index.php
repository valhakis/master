<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../../vendor/autoload.php';

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

$app = new \Slim\App($config);

$app->get('/', function($req, $res) {
  return $res->getBody()->write("
    <form action='' method='post'>
      <label>Name: </label>
      <input type='text' name='name'>
      <button type='submit'>Submit</button>
    </form>
  ");
});

$app->post('/', function($req, $res) {
  $data = [
    'var1' => $req->getParam('name'),
    'var2' => $req->getParsedBody('name'),
    'var3' => $req->getQueryParams('name'),
  ];
  return var_dump($data);
});

$app->run();
