<?php
header("access-control-allow-origin: *");

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../../vendor/autoload.php';

require './config.php';

$app = new \Slim\App($config);

$checkProxyHeaders = true;
$trustedProxies = ['192.168.0.3', '192.168.0.2', '192.168.0.3:3000', '192.168.0.3:4000'];
$app->add(new RKA\Middleware\IpAddress($checkProxyHeaders, $trustedProxies));

$app->add(function($request, $response, $next) {
  $route = $request->getAttribute("route");

  $methods = [];

  if (!empty($route)) {
    $pattern = $route->getPattern();

    foreach ($this->router->getRoutes() as $route) {
      if ($pattern === $route->getPattern()) {
        $methods = array_merge_recursive($methods, $route->getMethods());
      }
    }
    //Methods holds all of the HTTP Verbs that a particular route handles.
  } else {
    $methods[] = $request->getMethod();
  }

  $response = $next($request, $response);


  return $response->withHeader("Access-Control-Allow-Methods", implode(",", $methods));
});

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

$app->get('/', function($req, $res) {
  return $this->view->render($res, 'home.twig');
});

require './demo.php';
require './employees.php';
require './example.php';

$app->run();

mysqli_close($link);
