(function() {
  var canvases = document.querySelector("#canvases");
  var canvas = document.createElement('canvas');
  canvases.appendChild(canvas);

  var context = canvas.getContext('2d');

  canvas.style.width = '100%';
  canvas.style.height = '500px';

  var width = canvas.width = canvas.offsetWidth;
  var height = canvas.height = canvas.offsetHeight;

  var centerX, centerY;

  centerX = width * 0.5;
  centerY = height * 0.5;

  var radius, angle, speed, x, y;

  radius = 200;
  angle = 0;
  speed = 0.01;

  var renderOuterCircle = function() {
    for (var a=0; a<Math.PI*2; a += 0.1) {
      x = centerX + Math.cos(a) * radius;
      y = centerY + Math.sin(a) * radius;
      var x, y;
      context.fillRect(x, y, 3, 3);
    }
  };

  var renderMovingCircle = function() {
    x = centerX + Math.cos(angle) * radius;
    y = centerY + Math.sin(angle) * radius;
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI*2, false);
    context.fill();
  };

  var ellipse = {
    x: 0,
    y: 0,
    angle: 0,
    speed: 0.05,
    xOffset: 200,
    yOffset: centerY,
    xRadius: 100,
    yRadius: 150,
    renderOuter: function() {
      for (var a=0; a<Math.PI*2; a += 0.1) {
        x = this.xOffset + Math.cos(a) * this.xRadius;
        y = this.yOffset + Math.sin(a) * this.yRadius;
        var x, y;
        context.fillRect(x, y, 3, 3);
      }
    },
    render: function() {
      this.x = this.xOffset + Math.cos(this.angle) * this.xRadius;
      this.y = this.yOffset + Math.sin(this.angle) * this.yRadius;

      this.renderOuter();

      context.beginPath();
      context.arc(this.x, this.y, 10, 0, Math.PI*2, false);
      context.fill();

      this.angle += this.speed;
    }
  };

  var object = {
    x: 0, y: 0,
    xRadius: 100, yRadius: 150,
    xOffset: 450, yOffset: centerY,
    speedX: 0.1, speedY: 0.2,
    angleX: 0, angleY: 0,
    renderOuter: function() {
      for (var angleX=0, angleY=0; angleX+angleY<Math.PI*6; angleX += this.speedX, angleY += this.speedY) {
        var x, y;
        angleX += this.speedX;
        angleY += this.speedY;
        x = this.xOffset + Math.cos(angleX) * this.xRadius;
        y = this.yOffset + Math.sin(angleY) * this.yRadius;
        context.fillRect(x, y, 3, 3);
      }
    },
    render: function() {
      this.x = this.xOffset + Math.cos(this.angleX) * this.xRadius;
      this.y = this.yOffset + Math.sin(this.angleY) * this.yRadius;

      this.renderOuter();

      context.beginPath();
      context.arc(this.x, this.y, 10, 0, Math.PI*2, false);
      context.fill();

      this.angleX += this.speedX;
      this.angleY += this.speedY;
    }
  };

  var render = function() {
    context.clearRect(0, 0, width, height);

    renderOuterCircle();
    renderMovingCircle();
    ellipse.render();
    object.render();

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
