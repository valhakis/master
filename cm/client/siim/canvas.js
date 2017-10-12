document.body.style.margin = '0px';
document.body.style.padding = '0px';

var canvas=document.createElement("canvas");
document.body.appendChild(canvas);

canvas.style.display = 'block';
canvas.style.backgroundColor = '#FFF';

var height=canvas.height=window.innerHeight;
var width=canvas.width=window.innerWidth;

var ctx=canvas.getContext("2d");

canvas.ctx = ctx;

module.exports = canvas;
