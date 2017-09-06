<?php

$DUMP_ITEMS = [];
$OUTPUT = '';
$CARDS = '';

$NUMS = [
  'num1' => 32,
  'num2' => 22,
  'num3' => 82,
  'num4' => 98,
];

function Dump($item) {
  global $DUMP_ITEMS;
  array_push($DUMP_ITEMS, $item);
}

function LoPrint($msg) {
  global $OUTPUT;
  $OUTPUT .= $msg;
}

function Card($content) {
  global $CARDS;
  $CARDS .= $content;
}

function Logan($msg) {
  $msg = addslashes($msg);
  echo "<script>console.log('{$msg}')</script>";
}

class Person {
  public function __construct() {
  }
};

$person = new Person();

$color = "red";
$num = 100;

$num = $num * 5;

function Welcome($name) {
  global $num;
  LoPrint("Welcome $name, you are $num minutes lived.");
}

Welcome("William Valhakis");

Logan("Num is $num and color is $color.");

Card('
  <div class="w3-panel w3-card">
    <h5>PANEL</h5>
  </div>
');

Card('
  <div class="w3-panel w3-card">
    <h5>PANEL</h5>
  </div>
');

class Car {
  public $model = null;

  public function __construct($model) {
    $this->model = $model;
  }
}

$items = [ 'VOLVO', 'AUDI', 'TOYOTA' ];

$cars = [];

array_push($cars, new Car('VOLVO'));
array_push($cars, new Car('AUDI'));
array_push($cars, new Car('TOYOTA'));

Dump($items);
Dump($cars);

class Card {
  public static $numCards = 0;
  public static $cards = [];
  public $items = [];
  public $title = 'NO TITLE';
  public $content = 'NO CONTENT';

  public function __construct($title) {
    $this->title = $title;
    self::$numCards += 1;
    array_push(self::$cards, $this);
  }

  public static function initialize() {
    echo '<div class="w3-container">';
    printf("<p class='w3-panel'>Num cards: %s.</p>", self::$numCards);
    foreach(self::$cards as $card) {
      echo '<div class="w3-panel w3-card w3-red">';
      echo "<h2>{$card->title}</h2>";
      foreach($card->items as $item) {
        echo "<div class='w3-pale-red' style='margin-bottom: 15px; padding: 5px;'>{$item}</div>";
      }
      echo "<div class='w3-pale-red' style='margin-bottom: 15px; padding: 5px;'>{$card->content}</div>";
      echo '</div>';
    }
    echo '</div>';
  }

  public function setContent($content) {
    $this->content = $content;
  }

  public function addItem($item) {
    array_push($this->items, $item);
  }
}

foreach($cars as $car) {
  $card = new Card("MODEL TYPE: $car->model");
  $card->setContent(sprintf("The lorem ipsom of %s is lorem.", ucfirst(strtolower($car->model))));

  $len = strlen($car->model);
  $card->addItem("The string length of the model is $len");
}

?>
