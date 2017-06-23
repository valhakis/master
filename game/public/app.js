/* global Rect */

var win = window;
var doc = document;

var canvas = doc.createElement('canvas');

var context = canvas.getContext('2d');

canvas.width = win.innerWidth;
canvas.height = win.innerHeight;

var mouseX = canvas.width / 2;
var mouseY = canvas.height / 2;

doc.body.appendChild(canvas);

var monster = new Monster();
var mouse = new Mouse();
var me = new Player('#FF0000');
var rectangles = new Rectangles();
var triangle = new Triangle();
var numbers = new Numbers();

var rect1 = new Rect(1, 100, 100, 50, 50, '#ff0', '#f89');
var rect2 = new Rect(2, 100, 200, 50, 50, '#F0f', '#44f');
var rect3 = new Rect(3, 200, 200, 10, 10, '#28f', '#842');

var rects = [rect1, rect2, rect3];

setInterval(function() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  me.update();
  mouse.update();
  triangle.update();
  rectangles.update();
  monster.update();
  numbers.update();

  for (var i=0; i<rects.length; i++) {
    rects[i].update();
  }

  var xDistance = me.x + me.width/2 - rect3.x - rect3.width / 2;
  var yDistance = me.y + me.height/2 - rect3.y - rect3.height / 2;
  var distance = Math.sqrt(xDistance*xDistance+yDistance*yDistance);
  var speed = 1;
  if (distance < 70) {
    speed = 0.11;
  } else {
    speed = 0.01;
  }

  if (distance > 1) {
    rect3.x += xDistance * speed;
    rect3.y += yDistance * speed;
  }

  Rect.prototype.checkCollision(rect1, rect2);
  Rect.prototype.checkCollision(rect3, rect1);
  Rect.prototype.checkCollision(rect3, rect2);

  Rect.prototype.checkCollision(rect1, monster);
  Rect.prototype.checkCollision(rect2, monster);
  Rect.prototype.checkCollision(rect3, monster);

  function RectCollision(rect1, rect2) {
    var check1 = rect1.x < rect2.x + rect2.width;
    var check2 = rect1.x + rect1.width > rect2.x;
    var check3 = rect1.y < rect2.y + rect2.height;
    var check4 = rect1.y + rect1.height > rect2.y;

    if (check1 && check2 && check3 && check4) {
      return true;
    }
    return false;
  }

  for (let i=0; i<rectangles.rectangles.length; i++) {
    if (RectCollision(monster, rectangles.rectangles[i])) {
      rectangles.remove(rectangles.rectangles[i]);
      //rectangles[i].remove();
    }
  }

}, 20);

function Player() {
  var ctx = context;

  this.x = 5;
  this.y = 5;
  this.width = 40;
  this.height = 40;

  this.update = function() {
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}

canvas.addEventListener('click', function(event) {
  rectangles.new(event.clientX, event.clientY);
  monster.moveTo(event.clientX, event.clientY);
});

canvas.addEventListener('mousemove', function(event) {
  mouse.set(event.clientX, event.clientY);

  mouseX = event.clientX;
  mouseY = event.clientY;
});

function Rectangle(x, y) {
  var ctx = context;

  this.width = 20;
  this.height = 20;

  this.x = x;
  this.y = y;

  this.update = function() {
    ctx.fillStyle = '#FFF000';
    ctx.fillRect(this.x - this.width/2, this.y - this.width/2, this.width, this.height);
  };
}

function Rectangles() {
  this.rectangles = [];
  var ctx = context;

  this.new = function(x, y) {
    this.rectangles.push(new Rectangle(x, y));
  };

  this.update = function() {
    for (var i=0; i<this.rectangles.length; i++) {
      this.rectangles[i].update();
    }
  };

  this.remove = function(rectangle) {
    if (this.rectangles.splice(this.rectangles.indexOf(rectangle), 1)) {
      monster.points += 1;
    }
  };
}

function Mouse() {
  var ctx = context;

  this.x = canvas.width / 2;
  this.y = canvas.height / 2;

  this.width = 10;
  this.height = 10;

  this.update = function() {
    // draw mouse rect
    ctx.fillStyle = '#00FF00';
    ctx.fillRect(this.x - this.width/2, this.y - this.height/2, this.width, this.height);

    // draw line from me to mouse rect
    ctx.strokeStyle = '#F3283F';
    ctx.beginPath();
    ctx.moveTo(me.x+me.width/2, me.y+me.height/2);
    ctx.lineTo(this.x+this.width/2, this.y+this.height/2);
    ctx.stroke();

    // draw dots on the line

    var index = 0;

    while (index < this.x) {
      index += 10;
      let currentX = index;
      let currentY = 10;
      ctx.fillRect(currentX, currentY, 10, 10);
    }

    index = 0;
    while (index < this.y) {
      index += 10;
      let currentX = 10;
      let currentY = index;
      ctx.fillRect(currentX, currentY, 10, 10);
    }

    /* THIS IS WHAT I NEED */
    var mouseX = this.x;
    var mouseY = this.y;

    var xDistance = mouseX - me.x - me.width / 2;
    var yDistance = mouseY - me.y - me.height / 2;
    var distance = Math.sqrt(xDistance*xDistance+yDistance*yDistance);
    var speed = 0.05;

    if (distance > 1) {
      me.x += xDistance * speed;
      me.y += yDistance * speed;
    }


    /* THIS IS WHAT I NEED */

    var lineXWidth = this.x - me.x;

    ctx.beginPath();
    ctx.moveTo(canvas.width-10, canvas.height-10);
    ctx.lineTo(canvas.width-lineXWidth-10, canvas.height-10);
    ctx.stroke();

    var lineYHeight = this.y - me.y;

    ctx.beginPath();
    ctx.moveTo(canvas.width - 10, canvas.height - 10);
    ctx.lineTo(canvas.width - 10, canvas.height - lineYHeight - 10);
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(canvas.width-10, canvas.height - lineYHeight - 10);
    ctx.lineTo(canvas.width-lineXWidth-10, canvas.height-10);
    ctx.stroke();

    var startX = me.x;
    var endX = this.x;
    var currentX = startX;
    while (currentX < endX) {
      currentX += 10;
      let x = currentX;
      let y = this.y;
      ctx.fillRect(x, y, 10, 10);
    }
  };

  this.set = function(x, y) {
    this.x = x;
    this.y = y;
  };
}

function Triangle() {
  var ctx = context;

  // sine = opposite / hypotenuse
  // cosine = adjacent / hypotenuse
  // tangent = opposite / adjacent

  // x^2 + y^2 = r^2

  var A = {x: 10, y: canvas.height-10};
  var B = {x: 80, y: canvas.height-50};
  var C = {x: 80, y: canvas.height-10};

  this.update = function() {
    ctx.strokeStyle = '#FFFF00';
    ctx.beginPath();
    ctx.moveTo(A.x, A.y);
    ctx.lineTo(B.x, B.y);
    ctx.lineTo(C.x, C.y);
    ctx.lineTo(A.x, A.y);
    ctx.stroke();
  };
}

function Numbers() {
  var ctx = context;
  this.update = function() {
    ctx.fillStyle = '#00FF00';
    //ctx.font = "12px Arial Narrow";
    // ctx.fillText(i, i, canvas.height);
    // ctx.fillText(i, i, canvas.height);
    for (var i=0; i<canvas.width; i += 10) {
      ctx.strokeStyle = 'rgba(255, 0, 0, 0.3)';
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.stroke();
    }
  };
}

function Monster() {
  this.collisions = {};
  this.points = 0;
  this.id = '3232';
  var _this = this;
  this.x = canvas.width - 10;
  this.y = 10;
  this.width = 10;
  this.height = 10;
  this.color = '#000';

  this.target = {
    x: this.x,
    y: this.y
  };

  var ctx = context;
  this.update = function() {
    this.width = 10 + this.points;
    this.height = 10 + this.points;
    ctx.font = "20px Arial Narrow";
    ctx.fillText(this.points, this.x - this.width / 2, this.y - this.height/2);

    ctx.fillStyle = this.color;
    ctx.fillRect(this.x-this.width/2, this.y-this.width/2, this.width, this.height);

    if (this.moving) {
      var xDistance = this.target.x - this.x;
      var yDistance = this.target.y - this.y;
      var distance = Math.sqrt(xDistance*xDistance+yDistance*yDistance);
      var speed = 0.09 + (this.points/1000);

      if (distance > 1) {
        this.x += xDistance * speed;
        this.y += yDistance * speed;
      }
    }
  };

  this.moveTo = function(x, y) {
    this.moving = true;
    this.target.x = x;
    this.target.y = y;
  };
}

