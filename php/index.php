<?php

require('./config.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <base href="/php">
  <meta charset="UTF-8">
  <title>PHP</title>
  <link rel="stylesheet" href="/lib/w3.css">
</head>
<body>

<div class="w3-bar w3-dark-gray">
  <a class="w3-bar-item w3-hover-black" href="/">HOME</a>
  <a class="w3-bar-item w3-hover-black" href="/php/blog/public/">BLOG</a>
  <a class="w3-bar-item w3-hover-black" href="/php/example/public/">EXAMPLE</a>
</div>

<div class="w3-card w3-panel">
  <a class="w3-btn w3-purple" href="/php/slim/index.php">Slim</a>
</div>

<div class="w3-container-fluid">
  <ul>
    <li>What do I want to do with PHP ?
    <ul>
      <li><a href="/database">Learn Database Frameworks</a></li>
      <li><a href="http://kodu.me:3000/php/proxy">PROXY</a></li>
    </ul>
  </li>
  </ul>
</div>

<div class="w3-container">
  <?php echo $OUTPUT; ?>

  <br> <br>

  <a class="w3-btn w3-black" href="/php">RESET / HOME</a>
  <br> <br>

  <form action="" method="GET">
    <button name="nums" value="true">NUMS</button>
  </form>
</div>

<?php if (isset($_GET['nums']) && $_GET['nums'] == true) {
echo '<div class="w3-container">';
var_dump($NUMS);
echo '</div>';
  } ?>

<div class="w3-container">
  <?php echo $CARDS; ?>
  <div class="w3-panel w3-card">
    <h5>PANEL</h5>
  </div>
</div>

<div class="w3-container">
<h1>DUMP ITEMS</h1>
<?php
  foreach($DUMP_ITEMS as $item) {
    echo '<div class="w3-panel w3-card">';
    var_dump($item);
    echo '</div>';
  }
?>
</div>

<?php Card::initialize(); ?>

<?php

?>

</body>
</html>
