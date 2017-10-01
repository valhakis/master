<?php

// Music List

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../../vendor/autoload.php';

require './config.php';
require './database.php';

require './middleware.php';

$app = new \Slim\App($config);

$container = $app->getContainer();

$container['view'] = function($container) {
  $view = new \Slim\Views\Twig('./views', [ 
    'cache' => false
    // 'cache' => './cache' 
  ]);
  // Instantiate and add Slim specific extension
  $basePath = rtrim(str_ireplace('index.php', '', $container['request']->getUri()->getBasePath()), '/');
  $view->addExtension(new Slim\Views\TwigExtension($container['router'], $basePath));

  return $view;
};

$app->add(function(Request $req, Response $res, callable $next) {
  $newResponse = $next($req, $res);

  return $newResponse;
});

$app->add(New Mine\Middleware());
// or
$app->add(Mine\Middleware::class);

$app->get('/', function(Request $request, Response $response) {

  // return $this->view->render($response, "example.phtml", ["name" => 'Vladimir', "router" => $this->router]);

  return $this->view->render($response, 'home.twig', [
    'name' => 'Viktor Valhakis', 
  ]);

  $session = $request->getAttribute('session');

  $name = $session['name'];

  if (!$name) {
    $name = 'NO NAME';
  }

  $response->getBody()->write("THIS IS INDEX REQUEST, SESSION NAME: " . $name);

  return $response;
});

$app->get('/music', function($req, $res) {
  return $this->view->render($res, 'music.twig');
});

$app->get('/about', function($req, $res) {
  return $this->view->render($res, 'about.twig');
});

$app->get('/todos', function($req, $res) {
  return $this->view->render($res, 'todos/index.twig');
});

$app->get('/todos/create', function($req, $res) {
  return $this->view->render($res, 'todos/create.twig');
});

$app->get('/hello[/{name}]', function (Request $request, Response $response) {
  $session = $request->getAttribute('session');
  $name = $request->getAttribute('name');
  if (!$name) {
    $name = 'Nameless';
  }
  $session['name'] = $name;
  $response->getBody()->write("Hello, $name");

  return $response;
});

$app->get('/brilliant/{item}', function($request, $response, $args) {
  return $response->write($args['item'] . ' is brilliant');
});

$app->get('/status', function($req, $res) {
  return $res->withStatus(400)->write('Brilliant Request');
});

$app->get('/variables', function($req, $res) {
  // both _GET and _POST
  $var1 = $req->getParam('var1');

  // _POST
  $var2 = $req->getParsedBody()['var2'];

  // _GET
  $var3 = $req->getQueryParams()['var3'];
});

$app->get('/redirect', function($req, $res) {
  return $res->withStatus(302)->withHeader('Location', '/php/slim/index.php');
});

$app->get('/list', function($req, $res) {
  $data = [
    'name' => 'No Name',
    'age' => '32'
  ];

  return $res->withJson($data);
});

$app->run();
