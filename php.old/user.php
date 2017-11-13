<?php

$messages = [];

$page = 'User';

$object = new User;

$object->name = "Viktor";
$object->lname = "Valhakis";
$object->password = "password";

$object->save();

$object2 = clone $object;
$object2->name = "William";
$object2->save();

class User {
  public $name, $password, $lname;

  public function save() {
    global $messages;

    $messages[] = "<p>User $this->name $this->lname needs to be saved.</p>";
  }
}

function messagesList() {
  global $messages;
  $out = "";

  $index = 0;
  while ($index < count($messages)) {
    $out .= "<p>" . $messages[$index] . "</p>";

    $index += 1;
  }

  return $out;
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>USER</title>
  <link rel="stylesheet" href="shared.css">
</head>
<body>

<h1>USER</h1>
<?php include './links.php'; ?>

<h2>List of Messages</h2>
<?php echo messagesList(); ?>

</body>
</html>
