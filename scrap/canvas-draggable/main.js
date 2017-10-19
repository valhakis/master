var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var w = canvas.width = window.innerWidth;
var h = canvas.height = window.innerHeight;

var mx=0;
var my=0;

var image = new Image();

image.src = 'cherry.png';

var position = {
  x: w/2-512/4/2,
  y: h/2-512/4/2,
};

var size = {
  w: 512/4,
  h: 512/4,
};

var mouseover = false;
var dragging = false;

window.addEventListener('mousedown', event => {
  if (mouseover) {
    dragging = true;
    position.x = mx-size.w/2;
    position.y = my-size.h/2;
  }
});

window.addEventListener('mouseup', event => {
  dragging = false;
});

window.addEventListener('mousemove', event => {
  mx = event.clientX;
  my = event.clientY;

  // CHECKS IF MOUSE IS OVER
  if (mx > position.x && mx < position.x + size.w && my > position.y && my < position.y + size.h) {
    mouseover = true;
  } else {
    mouseover = false;
  }

  // MOVES IMAGE TO MOUSE POSITION IF DRAGGING
  if (dragging) {
    position.x = mx-size.w/2;
    position.y = my-size.h/2;
  }
});

var render = function() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'white';

  // DRAWS THE IMAGE AND RECTANGLE BEHIND IT
  ctx.save();
  if (dragging) {
    ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
  } else if (mouseover) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
  } else {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
  }
  ctx.translate(position.x, position.y);
  ctx.fillRect(0, 0, size.w, size.h);
  ctx.drawImage(image, 0, 0, size.w, size.h);
  ctx.restore();

  // DRAWS RECTANGLE TO MOUSE POSITION
  ctx.save();
  ctx.translate(mx, my);
  ctx.fillStyle = 'white';
  ctx.fillRect(-5, -5, 10, 10);
  ctx.restore();

  // DRAWS LINES TO MOUSE POSITION
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.moveTo(mx, 0);
  ctx.lineTo(mx, h);
  ctx.moveTo(0, my);
  ctx.lineTo(w, my);
  ctx.stroke();
  ctx.restore();

  requestAnimationFrame(render);
};
render();
