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

  class Circle {
    constructor(x, y, radius, speed, angle, outerRadius) {
      this.outerRadius = outerRadius || 100;
      this.radius = radius || 3;
      this.x = x || 0;
      this.y = y || 0;
      this.angle = angle || 0;
      this.speed = speed || 0.05;
    }

    render() {

      this.x = centerX + Math.cos(this.angle) * this.outerRadius;
      this.y = centerY + Math.sin(this.angle) * this.outerRadius;

      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      context.fill();

      this.angle += this.speed;
    }

    setPosition(x, y) {
      this.x = x;
      this.y = y;
    }

    setOuterRadius(radius) {
      this.outerRadius = radius;
    }

    setRadius(radius) {
      this.radius = radius;
    }
  }

  class Objects {
    constructor() {
      this.circle = new Circle();

      this.count = 10;
      this.slice = Math.PI * 2 / this.count;
      this.radius = 50;

      this.circle.setRadius(5);
      this.circle.setOuterRadius(this.radius);
    }

    render() {
      for (var i=0; i<this.count; i++) {
        var angle = i * this.slice;
        var x = centerX + Math.cos(angle) * this.radius;
        var y = centerY + Math.sin(angle) * this.radius;
        context.beginPath();
        context.arc(x, y, 3, 0, Math.PI * 2, false);
        context.fill();
      }
      this.circle.render();
    }
  }

  class Lissajous {
    constructor() {
      this.offsetX = 1400;
      this.offsetY = centerY;

      this.radiusX = 100;
      this.radiusY = 150;

      this.outer = this.createOuter();
      this.circle = this.createCircle();
    }

    createOuter() {
      var outer = {};

      outer.count = 10;
      outer.slice = Math.PI * 2 / outer.count;
      outer.radius = 150;

      outer.render = () => {
        for (var i=0; i<outer.count; i++) {
          // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
          var angleX = i * outer.slice;
          var angleY = i * outer.slice;
          var x = this.offsetX + Math.cos(angleX) * this.radiusX;
          var y = this.offsetY + Math.sin(angleY) * this.radiusY;
          context.beginPath();
          context.arc(x, y, 8, 0, Math.PI * 2, false);
          context.fill();
        }
      };

      return outer;
    }

    createCircle() {
      var circle = {
        angleX: 0,
        angleY: 0,
        speedX: 0.1,
        speedY: 0.2,
        x: 0,
        y: 0,
        radius: 5,
      };

      circle.render = () => {

        circle.x = this.offsetX + Math.cos(circle.angleX) * this.radiusX;
        circle.y = this.offsetY + Math.sin(circle.angleY) * this.radiusY;

        context.beginPath();
        context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
        context.fill();

        circle.angleX += circle.speedX;
        circle.angleY += circle.speedY;
      };

      return circle;
    }

    render() {
      this.circle.render();
      this.outer.render();
    }
  }

  var objects = new Objects();

  var lissajous = new Lissajous();

  var render = function() {
    context.clearRect(0, 0, width, height);

    renderOuterCircle();
    renderMovingCircle();
    ellipse.render();
    object.render();

    objects.render();

    lissajous.render();

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
