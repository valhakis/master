<?php

$url = 'http://www.google.com';
$page = file($url);

foreach($page as $part) {

  $part = preg_replace('<img src="', '<img src="'.$url, $part);
  
  echo $part;
}

?>
