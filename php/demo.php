<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DEMO</title>
</head>
<body>

<?php
define("ROOT_LOCATION", "/usr/local/www/");

echo 'Today is ' . date('l') . '.';

$sql = "INSERT INTO users (surname, firstname, email) VALUES(
  'valhakis',
  'william',
  'william.valhakis@gmail.com'
);";

$sql = "SELECT surname, firstname, email FROM users WHERE email='william.valhakis@gmail.com'";

$x = 0;

$x += 1;

echo "<br>";

echo "X is $x";

$current = null;

$items = ['William', 'Thomas', 'Anna'];

echo "<br>";

echo $items[0];
echo $items[1];
echo $items[2];

$current = $items[2];

echo "<p>Current: $current.</p>";

$team = array('Bill', 'Mary', 'Mike', 'Chris', 'Anne');

$tix = [
  ['X', ' ', 'O'],
  [' ', 'X', ' '],
  ['O', ' ', 'X'],
];

$number = 12345 * 67890;
echo "Number: $number (substr 3 1) is " . substr($number, 3, 1);

$pi = 3.1415927;
$radius = 5;

echo "<p>" . $pi * ($radius * $radius) . "</p>";

$dir = ROOT_LOCATION;

echo "<p>Directory: $dir</p>";

echo "<p>Current line of " . __FILE__ . " is " . __LINE__ . "<p>";

?>

<p>Here are the latest news.</p>

</body>
</html>
