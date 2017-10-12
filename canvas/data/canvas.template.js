var canvas = document.querySelector('#main-canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = canvas.clientWidth;
var height = canvas.height = canvas.clientHeight;

ctx.fillRect(10, 0, 100, 100);
ctx.fillRect(width-110, 0, 100, 100);
