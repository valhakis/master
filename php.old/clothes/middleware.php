<?php

namespace Mine;

use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

class Middleware
{
  function __invoke(Request $req, Response $res, callable $next) {

    $newResponse = $next($req, $res);

    return $newResponse;
  }
}
