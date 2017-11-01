var canvas = require('./canvas');
var keyboard = require('./keyboard');
var audio = new Audio('http://localhost/audio.wav'); 
var Bullet = require('./bullet').Bullet;
var bullet = require('./bullet');

var ctx = canvas.ctx;

var width = canvas.width;
var height = canvas.height;

var Player=require("./player");
/*
window.addEventListener('click', event => {

  var bullet=new Bullet(20,20);

bullets.push(bullet);
})
*/

var p1=new Player(10,10,"green", {r: 0, g: 255, b: 0});

var p2=new Player(30,30,"red", {r: 255, g: 0, b: 0});
var players=[p1,p2];

function render(){
  ctx.clearRect(0,0,width,height);
	
	//collision
	players.forEach(player =>{
		if(player.x<0){player.x=0;}
		if(player.y<0){player.y=0;}
		if(player.x>width){player.x=width;}
		if(player.y>height){player.y=height;}
	});
	
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
	
  p1.update();
  p2.update();
	

  /*bullets.push(new Bullet(p2.x-3,p2.y-5,p2.angle));
  bullets.forEach(bullet => {
    bullet.update();
  });
  */
  bullet.bullets.forEach((b, index) => {
    b.update();
    
    if (p1.circleCollision(b)) {
      delete bullet.bullets[index];
	  p1.color.g -= 20;
	  
	  audio.play();
	  if (p1.color.g < 0) {
		p1.destroyed = true;
	  } 
    }

    if (p2.circleCollision(b)) {
      delete bullet.bullets[index];
	  p2.color.r -=20;
	  audio.play();
	  if (p2.color.r < 0) {
		p2.destroyed = true;
	  }
    }
  });

  requestAnimationFrame(render);
}
render();


