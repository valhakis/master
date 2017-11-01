var distance = function(x1, y1, x2, y2) {
  var dx = x1-x2;
  var dy = y1-y2;
  return Math.sqrt( dx*dx + dy*dy );
}

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

var w = canvas.width = window.innerWidth;
var h = canvas.height = window.innerHeight;

var point1 = {
  x: w/2 - 100,
  y: h/2,
};

var point2 = {
  x: w/2 + 100,
  y: h/2,
};

setInterval(() => {
  point1.x += 10;
  point1.y += 10;
  point2.x -= 10;
  point2.y -= 10;
}, 1000);

var render = function() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'white';

  ctx.beginPath();
  ctx.arc(point1.x, point1.y, 20, 0, Math.PI*2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(point2.x, point2.y, 20, 0, Math.PI*2);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(point1.x, point1.y);
  ctx.lineTo(point2.x, point2.y);
  ctx.stroke();

  ctx.font = `12px Courier`;
  ctx.fillText(`distance: ${distance(point1.x, point1.y, point2.x, point2.y)}`, 10, 20);

  requestAnimationFrame(render);
};

render();

document.body.appendChild(canvas);

