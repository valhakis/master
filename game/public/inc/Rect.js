function Rect(id, x, y, width, height, color, secondaryColor) {
  this.id = id;
  var ctx = context;

  this.collisions = {};

  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.secondaryColor = secondaryColor;

  this.update = function() {
    var collision = false;

    for (var key in this.collisions) {
      if (this.collisions.hasOwnProperty(key)) {
        if (this.collisions[key] === true) {
          collision = true;
          break;
        }
      }
    }
    // console.log(this.collisions);
    if (collision) {
      ctx.fillStyle = this.secondaryColor;
    } else {
      ctx.fillStyle = this.color;
    }
    ctx.fillRect(this.x, this.y, this.width, this.height);

  };

  this.check = function() {

  };
}
Rect.prototype.checkCollision = function(rect1, rect2) {
  var check1 = rect1.x < rect2.x + rect2.width;
  var check2 = rect1.x + rect1.width > rect2.x;
  var check3 = rect1.y < rect2.y + rect2.height;
  var check4 = rect1.y + rect1.height > rect2.y;

  if (check1 && check2 && check3 && check4) {
    rect1.collisions[rect2.id] = true;
    rect2.collisions[rect1.id] = true;
    return true;
  } 
  rect1.collisions[rect2.id] = false;
  rect2.collisions[rect1.id] = false;

  return false;
};

Rect.prototype.collision = function(rect1, rect2) {
  var check1 = rect1.x < rect2.x + rect2.width;
  var check2 = rect1.x + rect1.width > rect2.x;
  var check3 = rect1.y < rect2.y + rect2.height;
  var check4 = rect1.y + rect1.height > rect2.y;

  if (check1 && check2 && check3 && check4) {
    return true;
  }
  return false;
};
