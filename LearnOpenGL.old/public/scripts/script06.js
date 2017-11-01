(function() {
  var canvases = document.querySelector("#canvases");
  var canvas = document.createElement('canvas');
  canvases.appendChild(canvas);

  var context = canvas.getContext('2d');

  canvas.style.width = '50%';
  canvas.style.height = '300px';

  var width = canvas.width = canvas.offsetWidth;
  var height = canvas.height = canvas.offsetHeight;

  var rects = [
    {x: 10, y: 10, w: 200, h: 50, hover: false},
    {x: 50, y: 70, w: 150, h: 30, hover: false},
  ];

  var mouseX = -1, mouseY = -1;

  var mousemove = function(e) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
  };

  var click = function() {
    if (rects[0].hover) {
      console.log('SUCCESS 1');
    }
    if (rects[1].hover) {
      console.log('SUCCESS 2');
    }
  };

  var render = function() {
    context.clearRect(0, 0, width, height);

    var i=0, rect;
    while (i < 2) {
      var rect = rects[i];
      context.beginPath();
      context.rect(rect.x, rect.y, rect.w, rect.h);
      context.fillStyle = context.isPointInPath(mouseX, mouseY) ? 'red' : 'blue';
      if (context.isPointInPath(mouseX, mouseY)) {
        rects[i].hover = true;
      } else {
        rects[i].hover = false;
      }
      context.fill();
      i++;
    }
    requestAnimationFrame(render);
  };

  canvas.addEventListener('mousemove', mousemove);
  canvas.addEventListener('click', click);

  render();

})();

//for (var i=0; i<100; i++) {
//context.beginPath();
//context.moveTo(Math.random() * width, Math.random() * height);
//context.lineTo(Math.random() * width, Math.random() * height);
//context.stroke();
//}
