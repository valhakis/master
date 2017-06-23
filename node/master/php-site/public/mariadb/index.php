<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$con = new mysqli('localhost', 'admin', 'admin', 'php-site');
?>

<?php
if (isset($_POST)) {
  if (isset($_POST['action'])) {
    $action = $_POST['action'];
    if ($action == 'create-user') {
      CreateNewUser();
    }
  }
}

function CreateNewUser() {
  global $con;

  $email = $_POST['email'];
  $password = $_POST['password'];

  $check = $con->query("INSERT INTO users (email, password) values ('{$email}', '{$password}')");

  if (!$check) {
    echo $con->error;
  }
}
 ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>MariaDB</title>
</head>
<body>

  <h1>MariaDB</h1>

  <h2>Create User</h2>
  <form action="" method="POST">
    <input type="hidden" name="action" value="create-user">
    <div>
      <label>Email</label>
      <input type="email" name="email">
    </div>
    <div>
      <label>Password</label>
      <input type="password" name="password">
    </div>
    <button type="submit">Submit</button>
  </form>

<?php
$result = $con->query('SELECT id, email, password FROM users');

if (!$result) {
  die('UNABLE TO GET USERS FROM DATABASE');
}

$users = $result->fetch_all(MYSQLI_ASSOC);

var_dump($users);

if ($con->connect_error) {
  die('UNABLE TO CONNECT ' . $con->connect_error);
}

$check = $con->query("CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);");

if ($check !== TRUE) {
  echo 'TABLE HAS NOT BEEN CREATED <br>';
  echo $con->error;
}

?>

</body>
</html>
