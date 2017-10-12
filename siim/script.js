var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var width = canvas.width = 500;
var height = canvas.height = 500;

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

var WASD = 0;
var IJKL = 1;

var line = {
  speed: 0.02,
  angle: 0,
  x1: centerX, 
  y1: centerY,
  x2: 0,
  y2: 0,
  radius: 100,
  render: function() {
    ctx.beginPath();
    this.x2 = this.x1 + Math.cos(this.angle) * this.radius;
    this.y2 = this.y1 + Math.sin(this.angle) * this.radius;

    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);

    ctx.stroke();

    this.angle += this.speed;
  }
};

var hooman = {
  movType: null,
  x: 0,
  y: 0,
  move: {
    left: false,
    right: false,
    up: false,
    down: false,
  },
  img: null,
  create: function(x, y, img, movType) {
    var human = Object.create(this);

    human.img = new Image();
    human.img.src = img;

    human.movType = movType;

    human.x = x;
    human.y = y;

    window.addEventListener('keydown', (event) => {
      human.keys[event.key] = true;
    });

    window.addEventListener('keyup', (event) => {
      human.keys[event.key] = false;
    });

    return human;
  },
  keys: null,
  width: 30,
  height: 30,
  speed: 1.9,
  render: function() {
    ctx.drawImage(this.img, this.x, this.y, 100, 100);
    this.movement();
  },
  movement: function() {
    if (this.move.up) {
      this.y -= this.speed;
    }

    if (this.move.down) {
      this.y += this.speed;
    }

    if (this.move.right) {
      this.x += this.speed;
    }

    if (this.move.left) {
      this.x -= this.speed;
    }
  }
};

var siim = hooman.create(10, 10, 'siim.jpg', WASD);

var monster = hooman.create(10, 300, 'monster.jpg', IJKL);

var render = function()
{
  ctx.clearRect(0, 0, width, height);

  line.render();

  siim.render();
  monster.render();

  requestAnimationFrame(render);
}

render();
