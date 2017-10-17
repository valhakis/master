(function() {
  var canvases = document.querySelector("#canvases");
  var canvas = document.createElement('canvas');
  canvases.appendChild(canvas);

  var context = canvas.getContext('2d');

  canvas.style.width = '50%';
  canvas.style.height = '300px';

  var width = canvas.width = canvas.offsetWidth;
  var height = canvas.height = canvas.offsetHeight;

  context.lineWidth = 2;
  context.fillStyle = '#666';
  context.strokeStyle = '#111';

  context.fillRect(10, 10, 200, 200);
  context.strokeRect(10, 10, 200, 200);

})();
