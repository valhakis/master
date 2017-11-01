var ctx=require("./canvas").ctx;

var bullets = [];

class Bullet{
  constructor(x,y,direction)
  {
    this.speed = 2;
    this.x=x;
    this.y=y;
    this.direction=direction;
    this.r=4;
  }


  update()
  {
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
    ctx.fill();
    this.x += Math.cos(this.direction) * this.speed;
    this.y += Math.sin(this.direction) * this.speed;
  }


}

module.exports= {
  Bullet: Bullet,
  bullets: bullets,
};
