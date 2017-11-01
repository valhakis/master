<?php

$page = "Demo";

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DEMO</title>
  <link rel="stylesheet" href="shared.css">
</head>
<body>

<?php include './links.php'; ?>

<?php

$bankBalance = 0;
$loggedIn = false;

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

function longdate($timestamp) {
  return date("l F jS Y", $timestamp);
}

echo "<p>" . longdate(time() - 17 * 24 * 60 * 60) . "</p>";
$days = 17;
$hours = 24;
$minutes = 60;
$seconds = 60;
echo "<p>" . longdate(time() - $days * $hours * $minutes * $seconds) . "</p>";
echo "<p>The date is " . longdate(time()) . "</p>";

function example() {
  static $num = 0;
  echo "<p>Example function executed $num.</p>";
  $num += 1;
}

example();
example();
example();
example();

echo "<p>Sqrt number 1 is " . sqrt(1) . "</p>";
echo "<p>Sqrt number 2 is " . sqrt(2) . "</p>";
echo "<p>Sqrt number 3 is " . sqrt(3) . "</p>";
echo "<p>Sqrt number 4 is " . sqrt(4) . "</p>";

$cameFrom = $_SERVER['HTTP_REFERER'];
$cameFrom = htmlentities($cameFrom);

echo "<p>Came from $cameFrom</p>";

/* y = 3(abs(2x) + 4) */
$x = 5;
$y = 3 * (abs(2 * $x) + 4);

echo "<p>X is $x and Y is $y</p>";

$month = date("F");

echo "<p>The month is $month.</p>";

?>

<p>Here are the latest news.</p>

</body>
</html>
