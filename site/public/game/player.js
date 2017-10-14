define(function(require) {
  var mouse = require('app/mouse');
  var canvas = require('app/canvas');
  var keyboard = require('app/keyboard');
  var ctx = canvas.ctx;

  var w = canvas.width = canvas.clientWidth;
  var h = canvas.height = canvas.clientHeight;

  var keys = keyboard.keys;

  return class Player {
    constructor(x=w/2, y=h/2) {
      this.x = x;
      this.y = y;
      this.color = "white";
      this.angle = 0;
      this.r = 20;
      this.speed = 2.8;
    }

    update() {
      ctx.save();

      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);

      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.strokeStyle = 'white';

      ctx.arc(0, 0, this.r, 0, Math.PI*2);
      ctx.moveTo(0, 0);
      ctx.lineTo(30, 0);

      ctx.stroke();
      ctx.fill();

      ctx.restore();

      this.angle += 0.1;

      if (keys['w']) {
        this.y -= this.speed;
      }
      if (keys['a']) {
        this.x -= this.speed;
      }
      if (keys['s']) {
        this.y += this.speed;
      }
      if (keys['d']) {
        this.x += this.speed;
      }
    }
  };
});
