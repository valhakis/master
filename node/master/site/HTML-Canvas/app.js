/* set up */
var win = window;
var canvas = document.getElementById('canvas');

var circle = {};

var mouseX, mouseY;

var mouseover = false;


var PI = Math.PI;

var ctx = canvas.getContext('2d');

var width, height;

function render() {
  canvas.width = win.innerWidth; 
  canvas.height = win.innerHeight;
  width = canvas.width;
  height = canvas.height;

  /* clear the canvas */
  ctx.clearRect(0, 0, width, height);

  /* draw line */
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(width,height);
  //ctx.stroke();

  /* draw second line */
  //ctx.beginPath();
  ctx.moveTo(0, height);
  ctx.lineTo(width, 0);
  ctx.stroke();

  /* draw circle */
  ctx.beginPath();
  // ctx.arc(x, y, r, startAngle, endAngle, counterclockwise);
  circle.x = width / 2;
  circle.y = height / 2;
  circle.r = 100;

  ctx.arc(circle.x,circle.y,circle.r,0,2*PI);
  if (mouseover) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fill();
  } else {
    ctx.stroke();
  }


  /* draw text */
  ctx.font = "18px Arial Narrow";
  ctx.fillText("William Valhakis", 5, height - 5);

  /* stroke text */
  ctx.font = "40px Arial Narrow";
  ctx.strokeText("William Valhakis", 5, height - 20);

  /* render mouse box */
  ctx.rect(mouseX - 50, mouseY - 50, 100, 100);
  ctx.stroke();


}

setInterval(function() {
  render();
}, 100);

canvas.addEventListener('mousemove', function(event) {
  event.preventDefault();
  mouseX = event.clientX;
  mouseY = event.clientY;
  //console.log(event);
});
