define(function(require) {
  var ctx = require('./canvas').getContext('2d');
  return class Node {
    constructor(options) {
      this.id = options.id;
      this.x = options.x || 20;
      this.y = options.y || 20;
      this.w = options.w || 20;
      this.h = options.h || 20;
      this.children = options.children || [];
    }

    update() {
      this.draw();
    }

    draw() {
      ctx.save();
      ctx.fillStyle = 'white';
      ctx.translate(this.x, this.y);
      ctx.beginPath();
      ctx.rect(-this.w/2, -this.h/2, this.w, this.h);
      ctx.fill();
      ctx.restore();
    }
  };
});
