var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = canvas.clientWidth;
var height = canvas.height = canvas.clientHeight;

class Box {
  constructor() {
    this.speed = 2.0;

    this.x = 15;
    this.y = 15;

    this.w = 50;
    this.h = 50;
  }

  update() {
    this.draw();

    this.x += this.speed;
  }

  draw() {
    ctx.save();
    ctx.fillStyle = 'rgba(0, 255, 0, 1)';
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.restore();
  }
};

var box = new Box();

var render = function() {
  ctx.clearRect(0, 0, width, height);

  box.update();

  requestAnimationFrame(render);
};

render();
