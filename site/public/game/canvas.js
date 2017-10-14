define(function(require) {
  var canvas = document.querySelector('#game-canvas');

  canvas.ctx = canvas.getContext('2d');

  return canvas;
});
