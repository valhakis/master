var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = canvas.clientWidth;
var height = canvas.height = canvas.clientHeight;

var coin = {
  frameIndex: 0,
  tickCount: 0,
  ticksPerFrame: 0,
  numberOfFrames: 1,
  width: 50,
  height: 50,
  image: new Image(),
  update: function() {
    this.tickCount += 1;
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      this.frameIndex += 1;
    }
  },
  render: function() {
    ctx.drawImage(this.image, this.frameIndex*this.width/this.numberOfFrames, 0, this.width/this.numberOfFrames, this.height, 0, 0, this.width/this.numberOfFrames, this.height);

    this.update();
  }
};

coin.image.src = 'coin-sprite.png';

var render = function() {
  ctx.clearRect(0, 0, width, height);
  coin.render();

  requestAnimationFrame(render);
};
render();
