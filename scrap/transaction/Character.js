define(function(require) {

  var Check = require('Check');

  var ctx = document.querySelector('canvas').getContext('2d');
  return class Character {
    constructor(options) {
      this.x = options.x || 0;
      this.y = options.y || 0;
      this.name = options.name || 'NO NAME';
      this.image = options.image;
      this.funds = options.funds;
      this.check = new Check();

      var targetWidth = 300;
      var multiplyer = this.image.width / targetWidth;
      var newWidth = this.image.width / multiplyer;
      var newHeight = this.image.height / multiplyer;

      this.image.width = newWidth;
      this.image.height = newHeight;

      multiplyer = this.check.image.width / targetWidth;
      this.check.image.width = this.check.image.width / multiplyer;
      this.check.image.height = this.check.image.height / multiplyer;
    }

    update() {
      ctx.save();

      ctx.translate(this.x, this.y);
      ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height);

      // DRAWS FUNDS
      ctx.fillText(`Available Balance: ${this.funds}`, 0, this.image.height + 30);

      ctx.drawImage(this.check.image, 0, this.image.height + 80, this.check.image.width, this.check.image.height);
      // DRAW FUNDS ON CHECK
      var x = 190;
      var y = this.image.height + 88 + 119;

      var fontSize = 12;
      ctx.fillRect(x, y, 80, 20);
      ctx.font = `bold ${fontSize}px Courier`;
      ctx.textBaseline = 'middle';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'right';
      ctx.fillText(`$${this.funds.toLocaleString(undefined, {minimumFractionDigits: 2})}`, x+75, y+fontSize/2+5);

      ctx.restore();
    }
  };
});
