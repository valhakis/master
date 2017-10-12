var canvas = document.querySelector('#main-canvas');
var ctx = canvas.getContext('2d');

canvas.style.width = '100%';

var width = canvas.width = canvas.clientWidth;
var height = canvas.height = canvas.clientHeight;

ctx.translate(0, height/2);
ctx.scale(1, -1);

for (var angle=0; angle<Math.PI*2; angle += 0.01) {
  var x = angle * 100 + 5;
  var y = Math.sin(angle) * 100;

  ctx.fillRect(x, y, 5, 5);
}
