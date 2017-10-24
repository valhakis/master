function distance(x1, y1, x2, y2) {

  var dx = x1-x2;
  var dy = y1-y2;

  return Math.sqrt( dx*dx + dy*dy );
}

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

document.body.appendChild(canvas);
document.body.style.padding = '0px';
document.body.style.margin = '0px';

canvas.style.backgroundColor = '#151515';

var mouse = {
  x: 0,
  y: 0,
};

class Circle {
  constructor(opt) {
    this.color = opt.color || 'white';
    this.x = opt.x || 0;
    this.y = opt.y || 0;
    this.r = opt.r || 25;
    this.collision = false;
  }
  render() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);

    if (this.collision) {
      ctx.fillStyle = 'yellow';
    } else {
      ctx.fillStyle = this.color;
    }
    ctx.fill();
  }
  setPos(x, y) {
    this.x = x;
    this.y = y;
  }
  checkCollision(c2) {
    if (distance(this.x, this.y, c2.x, c2.y) < this.r+c2.r) {
      this.collision = true;
    } else {
      this.collision = false;
    }
  }
}

var w = canvas.width = window.innerWidth;
var h = canvas.height = window.innerHeight;

var circles = [];

var red = new Circle({
  x: w/2,
  y: h/2,
  color: '#ff0000'
});

var green = new Circle({
  x: w/2 + 200,
  y: h/2,
  color: '#00ff00'
});

var blue = new Circle({
  x: w/2 - 200,
  y: h/2,
  color: '#0000ff'
});

circles.push(red);
circles.push(green);
circles.push(blue);

window.addEventListener('mousemove', ev => {
  blue.setPos(ev.clientX, ev.clientY);
});

var render = function() {
  ctx.clearRect(0, 0, w, h);

  for (var i=0; i<circles.length; i++) {
    for (var j=0; j<circles.length; j++) {
      if (j == i) {
        continue;
      }
      circles[i].checkCollision(circles[j]);
    }
    circles[i].render();
  }

  requestAnimationFrame(render);
};

render();
