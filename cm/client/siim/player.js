var ctx=require("./canvas").ctx;
var Bullet = require('./bullet');

class Player
{

  constructor(x,y,id){
    this.bullets = [];
    this.x=x;
    this.y=y;
    this.id=id;
    this.speed=0.7;
    this.angle = 0;
    console.log("done");

    setInterval(() => {
      this.shoot();
    }, 500);
  }
  update(){


  }
  move(){

  }

  draw(){
    // UPDATES BULLETS
    this.bullets.forEach(bullet => {
      bullet.update();
    });

    // DRAWS THE PLAYER
    ctx.save();

    ctx.translate(this.x, this.y);

    ctx.strokeStyle="black";
    ctx.beginPath();
    ctx.fillStyle=this.id;
    ctx.rotate(this.angle);
    // ctx.rect(this.x,this.y,10,10);
    ctx.rect(-5, -5, 10, 10);

    ctx.moveTo(0,0);
    ctx.lineTo(10,0);
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }

  shoot() {
    var bullet = new Bullet(this.x-2.5,this.y-2.5,this.angle);
    this.bullets.push(bullet);
  }

}
module.exports=Player;
