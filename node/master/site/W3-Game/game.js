/* global Component */
var win = window;

var keys = {};

var canvas = document.createElement('canvas');

  canvas.width = win.innerWidth;
  canvas.height = win.innerHeight;

var context = canvas.getContext('2d');
document.body.appendChild(canvas);

var players = [];

var player1 = new Player(0, 0, 20, 20, "#FF0000", {
  controls: {
    up: 'w',
    left: 'a',
    down: 's',
    right: 'd'
  }
});

var player2 = new Player(0, 50, 20, 20, "#0000FF", {
  controls: {
    up: 'i',
    left: 'j',
    down: 'k',
    right: 'l'
  }
});

players.push(player1);
players.push(player2);

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var players = JSON.parse(xhr.responseText);
    for (var i=0; i<players.length; i++) {
      var player = new Player(0, 0, 20, 20, "#FF0000", {
        controls: null
      });
      // players.push(player);
    }
  }
};
xhr.open('GET', '/api/players');
xhr.send();

setInterval(function() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (var i=0; i<players.length; i++) {
    players[i].update();
  }
  // context.fillRect(0, 0, 20, 20);
}, 20);

win.addEventListener('resize', function() {
  canvas.width = win.innerWidth;
  canvas.height = win.innerHeight;
});

win.addEventListener('keydown', function(event) {
  keys[event.key] = true;
});

win.addEventListener('keyup', function(event) {
  keys[event.key] = false;
});

var i = 0;

var game = {
  keys: {
    w: false,
    a: false,
    s: false,
    d: false
  },
  context: null,
  canvas: document.createElement('canvas'),
  piece: null,
  area: null,
  interval: null,
  score: null,
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  start: function() {
    var _this = this;
    console.log('START OF THE GAME');
    this.canvas.width = win.innerWidth;
    this.canvas.height = win.innerHeight;
    this.context = this.canvas.getContext('2d');

    this.context.fillStyle = '#ffffff';
    this.context.strokeStyle = '#ffffff';

    document.body.appendChild(this.canvas);

    win.addEventListener('resize', function() {
      _this.canvas.width = win.innerWidth;
      _this.canvas.height = win.innerHeight;
    });

    win.addEventListener('keydown', function(event) {
      _this.keys[event.key] = true;
    });

    win.addEventListener('keyup', function(event) {
      _this.keys[event.key] = false;
    });

    this.interval = setInterval(function() {
      _this.render();
    }, 20);
  },
  render: function() {
    var ctx = this.context;
    this.clear();

    for (var i=0; i<players.length; i++) {
      players[i].update();
    }

    //i++;
    ctx.rect(i, 100, 200, 200);
    ctx.stroke();
  }
};

// game.start();

// var player = new Player(0, 0, 50, 50);

game.piece = new Component(30, 30, 'red', 10, 120);
game.piece.gravity = 0.05;
game.score = new Component("30px", "Consolas", "black", 280, 40, "text");

game.area = {
  canvas: document.createElement('canvas'),
  start: function() {
    this.canvas.width = win.innerWidth;
    this.canvas.height = win.innerHeight;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNo = 0;
    this.interval = setInterval(game.update, 20);
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  update: function() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
  }
};


function Component(width, height, color, x, y, type) {
  this.type = type;
  this.score = 0;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.gravity = 0;
  this.gravitySpeed = 0;
  this.update = function() {
    var ctx = game.area.context;
    if (this.type == 'text') {
      ctx.font = this.width + ' ' + this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  };
  this.newPos = function() {
    this.gravitySpeed += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed;
    this.hitBottom();
  };

  this.hitBottom = function() {
    var rockbottom = game.area.canvas.height - this.height;
    if (this.y > rockbottom) {
      this.y = rockbottom;
      this.gravitySpeed = 0;
    }
  };

  this.crashWidth = function(otherObject) {
    var myLeft = this.x;
    var myRight = this.x + (this.width);
    var myTop = this.y;
    var myBottom = this.y + (this.height);

    var otherLeft = otherObject.x;
    var otherRight = otherObject.x + (otherObject.width);
    var otherTop = otherObject.y;
    var otherBottom = otherObject.y + (otherObject.height);

    var crash = true;

    if ((myBottom < otherTop) || (myTop > otherBottom) || (myRight < otherLeft) || (myLeft > otherRight)) {
      crash = false;
    }

    return crash;
  };
}


function Player(x, y, width, height, color, options) {
  var ctx = context;
  this.speed = 1.0;

  this.options = options;

  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;

  this.update = function() {
    if (keys[this.options.controls.up]) {
      this.y -= this.speed;
    }
    if (keys[this.options.controls.left]) {
      this.x -= this.speed;
    }
    if (keys[this.options.controls.down]) {
      this.y += this.speed;
    }
    if (keys[this.options.controls.right]) {
      this.x += this.speed;
    }

    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.stroke();
  };
}
