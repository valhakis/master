NewCanvas(function(canvas, context, width, height) {

  var centerX = width / 2;
  var centerY = height / 2;

  var arrowX = width / 2;
  var arrowY = height / 2;

  var mouseX, mouseY;

  var distanceX, distanceY;

  var angle = 0;

  var angleX = 0;
  var angleY = 0;

  var speedX = 0.08;
  var speedY = 0.023;

  var radiusX = 100;
  var radiusY = 200;

  var render = function() {
    context.clearRect(0, 0, width, height);

    distanceX = mouseX - arrowX;
    distanceY = mouseY - arrowY;

    angle = Math.atan2(distanceY, distanceX);

    arrowX = centerX + Math.cos(angleX) * radiusX;
    arrowY = centerY + Math.sin(angleY) * radiusY;

    angleX += speedX;
    angleY += speedY;

    context.save();
    context.translate(arrowX, arrowY);
    context.rotate(angle);

    context.beginPath();
    context.moveTo(20, 0);
    context.lineTo(-20, 0);
    context.moveTo(20, 0);
    context.lineTo(10, -10);
    context.moveTo(20, 0);
    context.lineTo(10, 10);
    context.stroke();

    context.restore();

    requestAnimationFrame(render);
  };

  canvas.addEventListener('mousemove', function(e) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
  });

  render();
});
