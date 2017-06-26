var canvas = document.querySelector('#canvas');

canvas.width = 500;
canvas.height = 200;

var ctx = canvas.getContext('2d');

function Player(x, y) {
  this.keys = {
    'w': false,
    'a': false,
    's': false,
    'd': false,
  };

  this.move = {
    up: false,
    left: false,
    right: false,
    down: false
  };

  this.w = 20;
  this.h = 20;
  this.x = x;
  this.y = y;
}

Player.prototype.render = function() {
  ctx.fillRect(this.x, this.y, this.w, this.h);

  if (this.keys['w'])
  {
    this.y -= 1;
  }

  if (this.keys['s'])
  {
    this.y += 1;
  }

  if (this.keys['a'])
  {
    this.x -= 1;
  }

  if (this.keys['d'])
  {
    this.x += 1;
  }
};

var me = new Player(0, 0);

var socket = io('http://192.168.0.3:4000');

var players = [];

function renderPlayer(player) {
  player.render();
}

var renderer = {};

socket.on('update', function(data) {
  console.log(socket.players);
});

setInterval(function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  players.forEach(renderPlayer);
  socket.emit('update');
}, 10);

var keys = {};
document.addEventListener('keydown', function(event) {
  me.keys[event.key] = true;
});

document.addEventListener('keyup', function(event) {
  me.keys[event.key] = false;
});

socket.on('move', function(data) {
  player.move[data.direction] = data.state;
});

var keys = {
  w: 87,
  a: 65,
  s: 83,
  d: 68,
  up: 38,
  down: 40,
  left: 37,
  right:39
};

var player = {
  x: 250,
  y: 250,
  move: {
    left: false,
    right: false,
    down: false,
    up: false
  }
};

var key = {
  up: {
    keycodes: [87, 38],
    active: false
  },
  down: {
    keycodes: [83, 40],
    active: false
  },
  left: {
    keycodes: [64, 37],
    active: false
  },
  right: {
    keycodes: [68, 39],
    active: false
  }
};


// w: 87,
// a: 65,
// s: 83,
// d: 68,
// up: 38,
// down: 40,
// left: 37,
// right:39

var keyboard = {};
document.addEventListener('keydown', function(event) {
  var keycode = event.keyCode;

});

document.addEventListener('keyup', function(event) {
  var keycode = event.keyCode;
  if (keys[keycode] != false) {
    keys[keycode] = false;
    socket.emit('keyboard', {keycode: keycode, state: false});
  }
});

var btn = document.querySelector('#log-num-players');

socket.on('log-num-players', function(numPlayers) {
  console.log(`num playesr: ${numPlayers}`);
});

btn.addEventListener('click', function() {
  socket.emit('log-num-players');
});

socket.on('message', function(message) {
  console.log('MESSAGE: ' + message);
});
