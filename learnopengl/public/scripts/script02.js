(function() {
  var canvases = document.querySelector("#canvases");
  var canvas = document.createElement('canvas');
  canvases.appendChild(canvas);

  var context = canvas.getContext('2d');

  canvas.style.width = '50%';
  canvas.style.height = '300px';

  var width = canvas.width = canvas.offsetWidth;
  var height = canvas.height = canvas.offsetHeight;

  context.translate(10, height / 2);
  context.scale(1, -1);
  for (var angle=0; angle<Math.PI*2; angle+= 0.01)
  {
    var x, y;

    context.fillStyle = '#0F0';
    x = angle * 100;
    y = Math.sin(angle) * 100;
    context.fillRect(x, y, 2, 2);

    context.fillStyle = '#F00';
    x = angle * 100;
    y = Math.cos(angle) * 100;
    context.fillRect(x, y, 2, 2);

    context.fillStyle = '#00F';
    x = angle * 100;
    y = Math.tan(angle) * 100;
    context.fillRect(x, y, 2, 2);
  }

})();
