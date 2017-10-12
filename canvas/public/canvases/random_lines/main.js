var canvas = document.querySelector('#main-canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = canvas.clientWidth;
var height = canvas.height = canvas.clientHeight;

for (var i=0; i<100; i+=1) {
  ctx.beginPath();
  ctx.moveTo(Math.random() * width, Math.random() * height);
  ctx.lineTo(Math.random() * width, Math.random() * height);
  ctx.stroke();
}
