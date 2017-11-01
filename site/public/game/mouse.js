define(function(require) {

  var canvas = require('app/canvas');
  var mouse = {
    x: 0,
    y: 0,
  };

  window.addEventListener('mousemove', function(event) {
    mouse.x = event.clientX - canvas.offsetLeft;
    mouse.y = event.clientY - canvas.offsetTop + window.scrollY;
  });

  return mouse;
});
