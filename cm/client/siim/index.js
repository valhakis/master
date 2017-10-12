
var canvas = require('./canvas');
var keyboard = require('./keyboard');
var Bullet = require('./bullet');
var ctx = canvas.ctx;

var width = canvas.width;
var height = canvas.height;

var Player=require("./player");
var bullet=new Bullet(20,20,0);
var bullets=[];
/*
window.addEventListener('click', event => {

  var bullet=new Bullet(20,20);

bullets.push(bullet);
})
*/
bullets.push(bullet);

var p1=new Player(10,10,"green");

var p2=new Player(30,30,"red");

function render(){
  ctx.clearRect(0,0,width,height);

  if (keyboard.keys.w) {
    p1.y+=Math.sin(p1.angle);
    p1.x+=Math.cos(p1.angle);
  }
  if (keyboard.keys.s) {
    p1.y-=Math.sin(p1.angle);
    p1.x-=Math.cos(p1.angle);
  }
  if (keyboard.keys.a) {
    p1.angle-=.1;
  }
  if (keyboard.keys.d) {
    p1.angle+=.1;
  }


  if (keyboard.keys.i) {
    p2.y+=Math.sin(p2.angle);
    p2.x+=Math.cos(p2.angle);

  }
  if (keyboard.keys.k) {
    p2.y-=Math.sin(p2.angle);
    p2.x-=Math.cos(p2.angle);
    // p2.y+=p2.speed;
  }
  if (keyboard.keys.j) {
    p2.angle -= 0.1;
    // p2.x-=p2.speed;
  }
  if (keyboard.keys.l) {
    p2.angle += 0.1;
    // p2.x+=p2.speed;
  }

  p1.draw();
  p2.draw();


  /*bullets.push(new Bullet(p2.x-3,p2.y-5,p2.angle));
  bullets.forEach(bullet => {
    bullet.update();
  });
  */

  requestAnimationFrame(render);
}
render();


