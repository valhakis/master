(function() {
  var canvases = document.querySelector("#canvases");
  var canvas = document.createElement('canvas');
  canvases.appendChild(canvas);

  var context = canvas.getContext('2d');

  canvas.style.width = '50%';
  canvas.style.height = '300px';

  var width = canvas.width = canvas.offsetWidth;
  var height = canvas.height = canvas.offsetHeight;

  var centerX, centerY;

  centerX = width * 0.5;
  centerY = height * 0.5;

  var angle, speed, offset;

  offset = height * 0.4;
  speed = 0.1;
  angle = 0;

  var baseRadius, baseAlpha;

  baseRadius = 50;
  baseAlpha = 0.5;

  var render = function() {
    context.clearRect(0, 0, width, height);
    // circle 1
    var x, y;
    offset = height * 0.5;
    x = 50;
    y = centerY + Math.sin(angle) * offset;

    context.fillStyle = '#000';
    context.beginPath();
    context.arc(x, y, 50, 0, Math.PI*2, false);
    context.fill();

    // circle 2
    var radius;
    x = 200;
    y = centerY;
    offset = 50;

    radius = baseRadius + Math.sin(angle) * offset;

    context.fillStyle = '#000';
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI*2, false);
    context.fill();

    // circle 3
    var radius, alpha;
    radius = 50;
    x = 400;
    y = centerY;
    offset = 0.5;
    alpha = baseAlpha + Math.sin(angle) * offset;

    context.fillStyle = `rgba(0, 0, 0, ${alpha})`;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI*2, false);
    context.fill();

    // circle 4
    var x, y;
    offset = width * 0.25;
    x = centerX + Math.sin(angle) * offset;
    y = centerY;

    context.fillStyle = '#000';
    context.beginPath();
    context.arc(x, y, 50, 0, Math.PI*2, false);
    context.fill();

    angle += speed;

    requestAnimationFrame(render);
  };

  render();

})();

//for (var i=0; i<100; i++) {
//context.beginPath();
//context.moveTo(Math.random() * width, Math.random() * height);
//context.lineTo(Math.random() * width, Math.random() * height);
//context.stroke();
//}
