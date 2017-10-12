var gl;
var canvas = document.querySelector('canvas');
var app = angular.module('app', []);
var xApp = document.querySelector('[ng-app=app]');

gl = canvas.getContext('webgl');

makeProgram(function() {
  gl.clearColor(0.1, 0.1, 0.1, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
});

app.run(function($rootScope) {
  $rootScope.name = localStorage.getItem('name') || 'no name is set';
});

app.config(function() {

});

var num = parseInt(localStorage.getItem("clicks")) || 0;

var clicks = document.body.querySelector("custom[name=clicks]");
clicks.innerText = num;

document.body.querySelector("form[name='set-name-form']").addEventListener('submit', function(event) {
  event.preventDefault();
  localStorage.setItem('name', this.elements.name.value);
  angular.element(xApp).scope().name = this.elements.name.value;
  this.elements.name.value = '';
  return false;
});

function increment() {
  num += 1;

  localStorage.setItem("clicks", num);
  clicks.innerText = num;
}

function reset() {
  num = 0;
  localStorage.setItem("clicks", num);
  clicks.innerText = num;
}

function loadSource(path, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path, false);
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && (this.status == 200 || this.status == 0)) {
      callback(this.responseText);
    }
  };
  xhr.send(null);
}

function makeProgram(callback) {
  var vs = gl.createShader(gl.VERTEX_SHADER);
  var fs = gl.createShader(gl.FRAGMENT_SHADER);

  loadSource('default.vs', function() {

  });
}
