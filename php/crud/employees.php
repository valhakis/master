<?php

// RETURNS EMPLOYEES INDEX VIEW
$app->get('/employees', function($req, $res) {
  global $link;

  $data = [];

  // FETCHES ALL EMPLOYEES
  if ($result = mysqli_query($link, 'SELECT * FROM employees ORDER BY createdAt DESC')) {
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
  global $link;
  $body = $req->getParsedBody();

  $success = false;

  if ($stmt = mysqli_prepare($link, 'INSERT INTO employees (name, address, salary) VALUES (?, ?, ?)')) {
    $params = [];
    mysqli_stmt_bind_param($stmt, "sss", $params['name'], $params['address'], $params['salary']);
    $params['name'] = trim($body['name']);
    $params['address'] = trim($body['address']);
    $params['salary'] = trim($body['salary']);
    if (mysqli_stmt_execute($stmt)) {
      $success = true;
    } else {
      $success = false;
    }
    mysqli_stmt_close($stmt);
  }

  if ($success) {
  } else {
  }
  return $res->withStatus(302)->withHeader('Location', '/php/crud/index.php/employees');
});

// RETURNS EMPLOYEE SHOW VIEW
$app->get('/employees/show/{id}', function($req, $res, $args) {
  global $link;

  $data = [];

  if ($stmt = mysqli_prepare($link, 'SELECT * FROM employees WHERE id = ?')) {
    $params = [];
    mysqli_stmt_bind_param($stmt, "i", $params['id']);
    $params['id'] = trim($args['id']);

    if (mysqli_stmt_execute($stmt)) {
      $result = mysqli_stmt_get_result($stmt);

      if (mysqli_num_rows($result) >= 1) {
        $employee = mysqli_fetch_array($result, MYSQLI_ASSOC);
        mysqli_stmt_close($stmt);

        $data['employee'] = $employee;

        return $this->view->render($res, 'employees/show.twig', $data);
      }
    }
  }

});

// RETURNS EMPLOYEE UPDATE PAGE
$app->get('/employees/update/{id}', function($req, $res, $args) {
  global $link;
  $data = [];
  $params = [];

  if ($stmt = mysqli_prepare($link, 'SELECT * FROM employees WHERE id=?')) {
    mysqli_stmt_bind_param($stmt, 'i', $params['id']);
    $params['id'] = $args['id'];
    if (mysqli_stmt_execute($stmt)) {
      $result = mysqli_stmt_get_result($stmt);
      if (mysqli_num_rows($result) == 1) {
        $employee = mysqli_fetch_array($result, MYSQLI_ASSOC);
        $data['employee'] = $employee;
      }
    }
  }

  return $this->view->render($res, 'employees/update.twig', $data);
});

// UPDATE EMPLOYEE IN DATABASE
$app->post('/employees/update/{id}', function($req, $res, $args){
  global $link;
  $body = $req->getParsedBody();

  if ($stmt = mysqli_prepare($link, 'UPDATE employees SET name=?, address=?, salary=? WHERE id=?')) {
    mysqli_stmt_bind_param($stmt, "sssi", $params['name'], $params['address'], $params['salary'], $params['id']);
    $params['name'] = trim($body['name']);
    $params['address'] = trim($body['address']);
    $params['salary'] = trim($body['salary']);
    $params['id'] = trim($args['id']);

    if (mysqli_stmt_execute($stmt)) {
      return $res->withStatus(302)->withHeader('Location', '/php/crud/index.php/employees/show/' . $params['id']);
    }

    mysqli_stmt_close($stmt);
  }
});

// REMOVES EMPLOYEE FROM DATABASE
$app->get('/employees/remove/{id}', function($req, $res, $args){
  global $link;
  $params = [];

  if ($stmt = mysqli_prepare($link, 'DELETE FROM employees WHERE id=?')) {
    mysqli_stmt_bind_param($stmt, 'i', $params['id']);
    $params['id'] = trim($args['id']);

    if (mysqli_stmt_execute($stmt)) {
      return $res->withStatus(302)->withHeader('Location', '/php/crud/index.php/employees');
    }
    mysqli_stmt_close($stmt);
  }
});
