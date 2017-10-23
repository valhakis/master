var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var mouse = {x: 0, y: 0};

window.addEventListener('mousemove', event => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

var w = canvas.width = window.innerWidth;
var h = canvas.height = window.innerHeight;

var lastTime = new Date;
var fps;
var fontSize = 15;

class Circle {
  constructor(opt) {
    this.x = opt.x || 0;
    this.y = opt.y || 0;
    this.r = opt.r || 20;
    this.fill = opt.fill || "red";
  }
  update() {
    ctx.beginPath();
    ctx.fillStyle = this.fill;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
    ctx.fill();

    if (this.collidesPoint(mouse)) {

    }
  }
  collidesPoint(point) {
    // point.x, point.y
  }
}

var GenRandomCircles = function() {
  var circles = [];
  for (var i=0; i<100; i++) {
    var r = 20;
    var circle = new Circle({
      x: Math.floor(Math.random() * (w-r*2+1) + r),
      y: Math.floor(Math.random() * (h-r*2+1) + r),
      r: r,
    });
    circles.push(circle);
  }
  return circles;
};

var circles = GenRandomCircles();

var render = function() {

  var currentTime = new Date;
  fps = Math.floor(1000 / (currentTime - lastTime));
  lastTime = currentTime;

  ctx.font = `${fontSize}px Arial`;

  ctx.clearRect(0, 0, w, h);

  ctx.fillStyle = '#FFFFFF';

  // DRAWS THE CIRCLE
  ctx.beginPath();
  ctx.arc(w/2, h/2, 30, 0, Math.PI*2);
  ctx.fill();

  // DRAWS CIRCLE AT MOUSE POSITION
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI*2);
  ctx.fill();

  // DRAWS FRAMES PER SECOND TEXT
  ctx.fillText(`FPS: ${fps}`, 0, fontSize);

  // UPDATES ALL CIRCLES
  for (var i=0; i<circles.length; i++) {
    circles[i].update();
  }

  requestAnimationFrame(render);
};
render();
