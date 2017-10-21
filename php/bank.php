<?php
$notes = [];

$page = "Bank";
$bankBalance = 0;

$fp = fopen("data.txt", 'wb');

for ($x=1; $x<=100; $x++) {
  $notes[] = "Number is $x.";
}

for ($x=0; $x<count($notes); $x++) {
  $written = fwrite($fp, $notes[$x]);
  if ($written == FALSE) {
    break;
  }
}

fclose($fp);

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>BANK</title>
  <link rel="stylesheet" href="shared.css">
  <link rel="stylesheet" href="bank.css">
</head>
<body>

<h1>BANK</h1>

<?php include './links.php'; ?>

<p>Page is <?php echo $page; ?>.</p>
<p>Bank Balance: <?php echo $bankBalance; ?>.</p>

<div id="true">
<?php
$num = 0;
while ($num < 10) {
  echo "<p>You are true.</p>";

  $num += 1;
}
?>
</div>

<div id="numbers">
<?php
$index = 0;
while ($index < count($notes)) {
  echo "<p>{$notes[$index]}</p>";
  $index += 1;
}
?>
</div>

<div>
<?php $result = (int) (17 / 3); ?>
<?php echo "<p>17 / 3 = $result (int)</p>" ?>
</div>

</body>
</html>
