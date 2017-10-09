// TIME STRING
(function() {
  var xTime = document.querySelector('#time');

  xTime.innerHTML = moment().format('D MMMM');

  var update = function() {
    xTime.innerHTML = moment().format('D MMMM Y HH:mm:ss');
  };

  update();
  setInterval(update, 1000);
})();

// CLOCK
(function() {
  var xCanvas = document.querySelector('canvas');
  var ctx = xCanvas.getContext('2d');
  ctx.imageSmoothingEnabled = true;

  var drawHand = function(pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  };

  var update = function() {
    ctx.resetTransform();

    ctx.clearRect(0, 0, xCanvas.width, xCanvas.height);

    var radius = xCanvas.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.90;

    // DRAW WHITE CIRCLE
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;

    // DRAW ANOTHER CIRCLE
    ctx.beginPath(); 
    ctx.arc(0, 0, radius*1.02, 0, 2*Math.PI);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'white';
    ctx.stroke();

    // DRAW NUMBERS
    ctx.strokeStyle = 'black';
    var angle;
    ctx.font = `${radius * 0.15}px Arial`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'black';

    for (var i=1; i<=12; i++) {
      angle = i * Math.PI / 6;
      ctx.rotate(angle);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-angle);
      ctx.fillText(i.toString(), 0, 0);
      ctx.rotate(angle);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-angle);
    }

    // DRAW TIME
    var now = new Date();
    var hh = now.getHours();
    var mm = now.getMinutes();
    var ss = now.getSeconds();

    hh = hh % 12;
    hh = (hh * Math.PI/6) + (mm * Math.PI/(6*60)) + (ss * Math.PI/(360*60));
    drawHand(hh, radius * 0.5, radius * 0.05);

    mm = (mm * Math.PI / 30) + (ss * Math.PI / (30*60));
    drawHand(mm, radius * 0.8, radius * 0.04);

    ss = (ss * Math.PI / 30);
    drawHand(ss, radius * 0.9, radius * 0.02);
  }

  update();
  setInterval(update, 1000);
})();
