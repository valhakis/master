<?php

// HANDLES REQUEST TO @PATH '/php/crud/index.php/demo' @OR /demo

$app->get('/demo', function($req, $res) {
  global $link;

  $data = [];

  // REMOVES 'employees' TABLE
  if (mysqli_query($link, "DROP TABLE employees")) {
    $data['INFORMATION'][] = "TABLE 'employees' HAS BEEN REMOVED";
  }

  // CHECKS IF 'employees' TABLE DOES NOT EXIST
  if (!mysqli_query($link, 'SELECT 1 FROM employees LIMIT 1')) {
    $data['INFORMATION'][] = "TABLE 'employees' DOES NOT EXIST";
    // CREATES 'employees' TABLE
    if (mysqli_query($link, file_get_contents('./employees.sql'))) {
      $data['INFORMATION'][] = "TABLE 'employees' HAS BEEN CREATED";
    } else {
      $data['ERRORS'][] = "FAILED TO CRAETE TABLE 'employees'";
    }
  }

  // INSERTS ONE EMPLOYEES TO DATABASE
  if ($stmt = mysqli_prepare($link, 'INSERT INTO employees (name, address, salary) VALUES (?, ?, ?)')) {
    $params = [];
    $employees = [
      [
        'name' => 'Viktor Valhakis',
        'address' => '6 Edgemont St. Sevierville, TN 37876',
        'salary' => '1500',
      ],
      [
        'name' => 'William Valhakis',
        'address' => '21 Yukon Lane Forest Hills, NY 11375',
        'salary' => '1800',
      ],
    ];
    mysqli_stmt_bind_param($stmt, "sss", $params['name'], $params['address'], $params['salary']);
    foreach($employees as $employee) {
      $params['name'] = $employee['name'];
      $params['address'] = $employee['address'];
      $params['salary'] = $employee['salary'];
      if (mysqli_stmt_execute($stmt)) {
        $data['SUCCESS'][] = 'EMPLOYEE HAS BEEN INSERTED TO DATABASE';
      } else {
        $data['ERRORS'][] = 'FAILED TO INSERT EMPLOYEE TO DATABASE';
      }
    }
    mysqli_stmt_close($stmt);
  }

  // FETCHES ALL EMPLOYEES
  if ($result = mysqli_query($link, 'SELECT * FROM employees')) {
    if (mysqli_num_rows($result) > 0) {
      while ($employee = mysqli_fetch_assoc($result)) {
        $data['employees'][] = $employee;
      }
      mysqli_free_result($result);
    } else {
      $data['ERRORS'][] = 'THERE ARE NO EMPLOYEES';
    }
  } else {
    $data['ERRORS'][] = 'FAILED TO FETCH EMPLOYEES';
  }

  return $res->withJson($data);
});
