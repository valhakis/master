define(function(require) {
  var jquery = require('jquery/dist/jquery');

  var canvas = $('#game-canvas')[0];

  var mode = require('app/mode');
  var mouse = require('app/mouse');
  var Player = require('app/player');
  var Button = require('app/button');

  window.canvas = canvas;

  var ctx = canvas.getContext('2d');

  var w = canvas.width = canvas.clientWidth;
  var h = canvas.height = canvas.clientHeight;

  var centerX = w / 2;
  var centerY = h / 2;

  var players = [
    new Player(100, 100),
    new Player(200, 100),
    new Player()
  ];

  var buttons = [
    new Button(0, 0, "Default", function() {
      mode.set('default')
    }),
    new Button(201, 0, "Lines", function() {
      mode.set('lines')
    }),
  ];

  mode.modes.forEach(mode => {
    mode.initialize();
  });

  var render = function() {
    ctx.clearRect(0, 0, w, h);

    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI*2);
    ctx.fill();

    if (mode.is('default')) {
      players.forEach(player => {
        player.update();
      });
    } else if (mode.is('lines')) {

    }

    buttons.forEach(button => {
      button.update();
    });

    requestAnimationFrame(render);
  };

  render();
});
