<?php

$app->get('/example', function($req, $res) {
  return $res->withStatus(200)->write("
    <html>
      <head>
        <title>EXAMPLE</title>
      </head>
      <body>
        <form action=\"\" method=\"POST\">
          <label for=\"name\">Name: </label>
          <input type=\"text\" name=\"name\">
          <button type=\"submit\">SUBMIT</button>
        </form>
      </body>
    </html>
  ");
});

$app->post('/example', function($req, $res) {
  $data = [
    'var1' => $req->getParam('name'),
    'var2' => $req->getParsedBody('name'),
    'var3' => $req->getQueryParams('name'),
  ];
  return var_dump($data);
  // return $res->withStatus(200)->withJson($data);
});
