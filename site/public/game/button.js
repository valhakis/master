define(function(require) {
  var canvas = require('app/canvas');
  var mouse = require('app/mouse');
  var ctx = canvas.getContext('2d');

  var fontSize = 20;

  return class Button {
    constructor(x, y, label, click) {
      this.click = click;
      this.mouseover = false;
      this.x = x;
      this.y = y;
      this.w = 200;
      this.h = 50;
      this.label = label;

      window.addEventListener('click', () => {
        if (this.mouseover) {
          this.click();
        }
      });
    }

    update() {
      ctx.beginPath();

      ctx.rect(this.x, this.y, this.w, this.h);

      if (this.mouseover) {
        ctx.fillStyle = 'red';
      } else {
        ctx.fillStyle = 'white';
      }
      ctx.fill();

      ctx.fillStyle = 'black';
      ctx.font = `${fontSize}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.label, this.x + this.w/2, this.y + this.h/2);

      if (mouse.x > this.x && mouse.x < this.x+this.w && mouse.y > this.y && mouse.y < this.x+this.h) {
        this.mouseover = true;
      } else {
        this.mouseover = false;
      }
    }
  };
});
