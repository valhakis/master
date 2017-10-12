var mouseX = -1;
var mouseY = -1;

var width = 500;
var height = 400;

var canvas = document.createElement('canvas');
var ctx = canvas.getContext("2d");

canvas.width = width;
canvas.height = height;

var requestId;

var frame = 0;

class Keyboard {
  constructor() {
    this.keys = {};
  }
}

class Person {
  constructor(name, options) {
    this.keys = {
      boost: options && options.boost ? options.boost : 'q',
      up: options && options.up ? options.up : 'w',
      down: options && options.down ? options.down : 's',
      left: options && options.left ? options.left : 'a',
      right: options && options.right ? options.right : 'd',
    };
    this.name = name || 'no name';
    this.x = options && options.x ? options.x : 0;
    this.y = options && options.y ? options.y : 0;
    this.w = 100;
    this.h = 20;
    this.speed = 1;
    this.baseSpeed = 1;
  }

  render() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.w, this.h);
    ctx.fillStyle = '#FF0';
    ctx.fill();
    
    if (keyboard.keys[this.keys.boost]) {
      this.speed = this.baseSpeed * 4;
    } else {
      this.speed = this.baseSpeed;
    }

    this.renderName();
    this.doMovement();
  }

  doMovement() {
    if (keyboard.keys[this.keys.up]) {
      this.y -= this.speed;
    }
    if (keyboard.keys[this.keys.down]) {
      this.y += this.speed;
    }
    if (keyboard.keys[this.keys.left]) {
      this.x -= this.speed;
    }
    if (keyboard.keys[this.keys.right]) {
      this.x += this.speed;
    }
  }

  renderName() {
    ctx.fillStyle = '#000';
    var fontSize = 12;
    ctx.font = `${fontSize}px Arial`;
    var txt = ctx.measureText(this.name);
    ctx.fillText(this.name, this.x + this.w/2 - txt.width/2, this.y + this.h/2 + fontSize/3);
  }
}

var persons = [
  new Person('William Valhakis', {
    boost: 'q',
    x: 50,
    y: 50,
    up: 'i',
    down: 'k',
    left: 'j',
    right: 'l',
  }),
  new Person('Donald Trump', {
    x: 50,
    y: 10,
    up: 'w',
    down: 's',
    left: 'a',
    right: 'd',
  })
];

var keyboard = new Keyboard();

class Vertices {

  createBtn(text, x, y, w, h, color, hoverColor) {
    return {
      text: text,
      hover: false,
      color: color,
      hoverColor: hoverColor,
      x: x,
      y: y,
      click: function(x, y) {
        if ((x > this.x && x < this.x+this.w) && (y > this.y && y < this.y+this.h)) {
          if (this.onclick) {
            this.onclick(x, y);
          }
        }
      },
      w: w,
      h: h,
      draw: function() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        if (ctx.isPointInPath(mouseX, mouseY)) {
          this.hover = true;
        } else {
          this.hover = false;
        }
        if (this.hover) {
          ctx.fillStyle = this.hoverColor;
        } else {
          ctx.fillStyle = this.color;
        }
        ctx.fill();
        ctx.fillStyle = '#000';
        var fontSize = 12;
        ctx.font = `${fontSize}px Arial`;
        var txt = ctx.measureText(this.text);
        ctx.fillText(this.text, this.x + this.w/2 - txt.width/2, this.y + this.h/2 + fontSize/3);
      }
    };
  }

  constructor() {
    this.btn = this.createBtn("create vertex", 10, 10, 80, 40, "#fff", "#ff0");
    this.btn.onclick = function() {
      console.log('YOU CLICKED MAN');
    };
  }

  draw() {
    this.btn.draw();
  }
}

class Box {
  constructor() {
    this.color = '#F00';
    this.x = 10;
    this.y = 10;
    this.w = 100;
    this.h = 100;
    this.speed = 9;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);

    // keyboard input / movement
    if (keyboard.keys.w) {
      this.y -= this.speed;
    }

    if (keyboard.keys.a) {
      this.x -= this.speed;
    }

    if (keyboard.keys.s) {
      this.y += this.speed;
    }

    if (keyboard.keys.d) {
      this.x += this.speed;
    }

    // border collision
    // left 
    if (this.x < 0) {
      this.x = 0;
    }
    // top
    if (this.y < 0) {
      this.y = 0;
    }
    // right
    if (this.x > width-this.w) {
      this.x = width-this.w;
    }
    // bottom
    if (this.y > height-this.h) {
      this.y = height-this.h;
    }
  }
}

class Lin {
  constructor() {
    this.count = 10;
  }

  draw() {
    ctx.fillStyle = '#ccc';
    ctx.strokeStyle = '#ccc';

    for (var i=0; i<this.count; i++) {
      var x1 = Math.random() * width;
      var y1 = Math.random() * height;

      var x2 = Math.random() * width;
      var y2 = Math.random() * height;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  }

  increment() {
    this.count += 1;
  }
}

class Line {
  constructor() {
    this.x1 = 150;
    this.y1 = 200;

    this.x2 = 500;
    this.y2 = 200;
  }

  draw() {

    ctx.fillStyle = '#0f0';
    ctx.strokeStyle = '#0f0';

    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();

    ctx.fillStyle = '#f00';
    ctx.fillRect(this.x1-5, this.y1-5, 10, 10);
    ctx.fillStyle = '#f0f';
    ctx.fillRect(this.x2-5, this.y2-5, 10, 10);
  }

  setPosition(x, y) {
    this.x2 = this.x1;
    this.y2 = this.y1;

    this.x1 = x;
    this.y1 = y;
  }

  click(x, y) {
    // console.log(x, y);
  }
}

var box = new Box();
var lin = new Lin();
var vertices = new Vertices();
var line = new Line();

var render = function() {
  ctx.clearRect(0, 0, width, height);

  box.draw();
  lin.draw();
  line.draw();
  vertices.draw();

  for (var i=0; i<persons.length; i++) {
    var person = persons[i];
    person.render();
  }

  // lin.increment();

  requestId = requestAnimationFrame(render);

  frame += 1;
};

render();

document.body.appendChild(canvas);

var keydown = function(e) {
  keyboard.keys[e.key] = true;
};

var keyup = function(e) {
  keyboard.keys[e.key] = false;
};

var mousedown = function(e) {
  var x = e.clientX - canvas.offsetLeft;
  var y = e.clientY - canvas.offsetTop;
  // line.setPosition(x, y);
};

var mouseup = function(e) {
  // console.log('up');
};

var click = function(e) {
  // console.log('click');
  var x = e.clientX - canvas.offsetLeft;
  var y = e.clientY - canvas.offsetTop;
  line.setPosition(x, y);
  vertices.btn.click(x, y);
};

var mousemove = function (e) {
  mouseX = e.clientX - canvas.offsetLeft;
  mouseY = e.clientY - canvas.offsetTop;
  // console.log(mouseX, mouseY);
};

window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);
window.addEventListener('mousedown', mousedown);
window.addEventListener('mouseup', mouseup);
window.addEventListener('click', click);
window.addEventListener('mousemove', mousemove);
