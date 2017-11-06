var ctx=require("./canvas").ctx;
var bullet = require('./bullet');
var M = require('./M');
var Bullet = bullet.Bullet;

class Player
{

  constructor(x,y,id,color){
    this.color = color;
    this.bullets = [];
    this.x=x;
    this.y=y;
    this.id=id;
	this.destroyed = false;
    this.speed=0.7;
    this.angle = 0;
	this.r=10;
    console.log("done");

    window.addEventListener('keypress', event => {
      if (event.key == ' ') {
        this.shoot();
      }
    });

    // SHOOTS EVERY HLAF A SECOND
    /*
    setInterval(() => {
      this.shoot();
    }, 500);
    */
  }
  update(){
	  if (!this.destroyed) {
		  this.draw();
	  }
	

  }
  move(){

  }

  draw(){
    // UPDATES BULLETS
    //this.bullets.forEach(bullet => {
      //bullet.update();
    //});

    // DRAWS THE PLAYER
    ctx.save();

    ctx.translate(this.x, this.y);

    ctx.strokeStyle="black";
    ctx.beginPath();
    ctx.fillStyle=`rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 1.0)`;
    ctx.rotate(this.angle);
    // ctx.rect(this.x,this.y,10,10);
    //ctx.rect(-5, -5, 10, 10);
	ctx.arc(0,0,this.r,0,2*Math.PI);
    ctx.moveTo(0,0);
    ctx.lineTo(15,0);
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }

  shoot() {

    var dis = 20;

    var x = this.x + Math.cos(this.angle) * dis;
    var y = this.y + Math.sin(this.angle) * dis;

    var newBullet = new Bullet(x, y, this.angle);
    bullet.bullets.push(newBullet);
  }

  circleCollision(elm) {
    return M.distance(this.x, this.y, elm.x, elm.y) < this.r+elm.r;
  }

}
module.exports=Player;
