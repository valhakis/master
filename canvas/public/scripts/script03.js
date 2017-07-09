(function() {
  var canvases = document.querySelector("#canvases");
  var canvas = document.createElement('canvas');
  canvases.appendChild(canvas);

  var context = canvas.getContext('2d');

  canvas.style.width = '100%';
  canvas.style.height = '300px';

  var width = canvas.width = canvas.offsetWidth;
  var height = canvas.height = canvas.offsetHeight;

  for (var i=0; i<100; i++) {
    context.beginPath();
    context.moveTo(Math.random() * width, Math.random() * height);
    context.lineTo(Math.random() * width, Math.random() * height);
    context.stroke();
  }
})();
