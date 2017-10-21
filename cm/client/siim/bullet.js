var ctx=require("./canvas").ctx;

class Bullet{
	constructor(x,y,direction)
	{
	this.x=x;
	this.y=y;
	this.direction=direction;
	
	}
	
	
	update()
	{
		ctx.fillRect(this.x,this.y,5,5);
		this.x += Math.cos(this.direction) * 8;
		this.y += Math.sin(this.direction) * 8;
	}
	
	
}

module.exports=Bullet;
