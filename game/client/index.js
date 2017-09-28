import './style.scss';
import Prism from 'prismjs';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
// dark, tomorrow, twilight
import 'prismjs/themes/prism-twilight.css';

import angular from 'angular';
import moment from 'moment';

import app from './app';

var username = 'valhakis';

var mouse = {x: 0, y: 0};

class Boxen {
  constructor(ctx) {
    this.items = [];
    this.ctx = ctx;
  }

  update() {
    var ctx = this.ctx;

    this.items.forEach(function(item) {
      // DRAW A CIRCLE
      ctx.beginPath();
      ctx.arc(item.x, item.y, item.radius, 0, Math.PI*2, false);
      ctx.fill();
    });
  }

  create(x, y) {
    this.items.push({x: x, y: y, radius: 5});
  }
}

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var boxen = new Boxen(ctx);

var bg = {
  r: 20,
  g: 20,
  b: 20,
  a: 1
};

var width, height, centerX, centerY;

var render = function() {

  // CLEAR THE CANVAS
  ctx.clearRect(0, 0, width, height);

  // FILL BACKGROUND
  ctx.fillStyle = `rgba(${bg.r}, ${bg.g}, ${bg.b}, ${bg.a})`;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#FFF';
  ctx.strokeStyle = '#CCC';

  // DRAW USERNAME TEXT
  ctx.font = `20px Arial`;
  ctx.fillText(username, 3, 23);

  boxen.update();

  // DRAW A CIRCLE
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI*2, false);
  ctx.fill();

  // REQUEST ANIMATION FRAME
  requestAnimationFrame(render);
};

window.addEventListener('load', function() {
  width = canvas.width = canvas.clientWidth;
  height = canvas.height = canvas.clientHeight;

  centerX = width / 2;
  centerY = height / 2;

  render();
});

window.addEventListener('mousemove', function(event) {
  mouse.x = event.clientX - canvas.offsetLeft;
  mouse.y = event.clientY - canvas.offsetTop;
});

window.addEventListener('click', function(event) {
  boxen.create(mouse.x, mouse.y);
});

window.addEventListener('keydown', function(event) {

});

(function() {
  var div = document.createElement('div');
  div.classList.add('w3-panel', 'w3-blue');
  div.style.margin = '15px';
  div.style.padding = '5px';
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var date = new Date(this.responseText);
      div.innerHTML = moment(date).format('DD.MM.YYYY HH:mm:ss');
      div.innerHTML += ' | ';
      div.innerHTML += moment(new Date()).format('DD.MM.YYYY HH:mm:ss');
      document.body.appendChild(div);
    }
  };
  xhr.open('GET', '/game/date', true);
  xhr.send(null);
})();
