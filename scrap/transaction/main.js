requirejs(['./Character'], function(Character) {

  var info = 'An exchange or transfer of goods, services, or funds electronic transactions.';

  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');

  var w = canvas.width = window.innerWidth;
  var h = canvas.height = window.innerHeight;

  var donaldImage = new Image();
  donaldImage.src = 'donald.png';

  var obamaImage = new Image();
  obamaImage.src = 'obama.png';

  var character1 = new Character({
    x: 20,
    y: 40,
    name: 'Donald John Trump',
    image: donaldImage,
    funds: 50000,
  });
  var character2 = new Character({
    x: w - 400,
    y: 40,
    name: 'Barack Hussein Obama II',
    image: obamaImage,
    funds: 8000,
  });

  var render = function() {
    ctx.clearRect(0, 0, w, h);

    ctx.font = '20px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(info, 20, 20);

    character1.update();
    character2.update();

    requestAnimationFrame(render);
  };
  render();
});
