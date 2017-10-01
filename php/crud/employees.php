<?php

// RETURNS EMPLOYEES INDEX VIEW
$app->get('/employees', function($req, $res) {
  global $link;

  $data = [];

  // FETCHES ALL EMPLOYEES
  if ($result = mysqli_query($link, 'SELECT * FROM employees')) {
    if (mysqli_num_rows($result) > 0) {
      while ($employee = mysqli_fetch_assoc($result)) {
        $data['employees'][] = $employee;
      }
      mysqli_free_result($result);
    } else {
      $data['errors'][] = 'THERE ARE NO EMPLOYEES';
    }
  } else {
    $data['errors'][] = 'FAILED TO FETCH EMPLOYEES';
  }

  return $this->view->render($res, 'employees/index.twig', $data);
});

// RETURNS EMPLOYEES CREATE VIEW
$app->get('/employees/create', function($req, $res) {
  $data = [];

  return $this->view->render($res, 'employees/create.twig', $data);
});

// STORES EMPLOYEE TO THE DATABASE
$app->post('/employees/store', function($req, $res) {
  $body = $req->getParsedBody();


  return var_dump($body);
  //$employee = [
    //'name' => $body['name'],
    //'address' => $body['address'],
    //'salary' => $body['salary'],
  //];

  // return $res->withStatus(200)->write($employee);
  // return $res->withStatus(200)->withJson($employee);
  // return $res->withStatus(200)->write('HAVE TO STORE EMPLOYEE');
});
