NewCanvas(function(canvas, context, width, height) {

  var vector = {
    _x: 1,
    _y: 0,

    create: function(x, y) {
      var object = Object.create(this);
      object.setX(x);
      object.setY(y);
      return object;
    },

    setX: function(x) {
      this._x = x;
    },
    getX: function() {
      return this._x;
    },
    setY: function(y) {
      this._y = y;
    },
    getY: function() {
      return this._y;
    },
    setAngle: function(angle) {
      var length = this.getLength();
      this._x = Math.cos(angle) * length;
      this._y = Math.sin(angle) * length;
    },
    getAngle: function() {
      return Math.atan2(this._y, this._x);
    },
    setLength: function(length) {
      var angle = this.getAngle();
      this._x = Math.cos(angle) * length;
      this._y = Math.sin(angle) * length;
    },
    getLength: function() {
      return Math.sqrt(this._x * this._x + this._y * this._y);
    },
    add: function(vec) {
      return vector.create(this._x + vec.getX(), this._y + vec.getY());
    },
    subtract: function(vec) {
      return vector.create(this._x - vec.getX(), this._y - vec.getY());
    },
    multiply: function(val) {
      return vector.create(this._x * val, this._y * val);
    },
    divide: function(v) {
      return vector.create(this._x / val, this._y / val);
    },

    addTo: function(vec) {
      this._x += vec.getX();
      this._y += vec.getY();
    },
    subtractFrom: function(vec) {
      this._x -= vec.getX();
      this._y -= vec.getY();
    },
    multiplyBy: function(val) {
      this._x *= val;
      this._y *= val;
    },
    divideBy: function(val) {
      this._x /= val;
      this._y /= val;
    },
  };

  var position = vector.create(100, 100);
  var velocity = vector.create(0, 0)
  velocity.setLength(3); // 3 pixels per frame
  velocity.setAngle(Math.PI / 6); // 30 degrees

  var render = function() {
    context.clearRect(0, 0, width, height);

    position.addTo(velocity);

    context.fillStyle = '#333';
    context.strokeStyle = '#F00';
    context.lineWidth = 5;

    context.beginPath();
    context.arc(position.getX(), position.getY(), 50, 0, Math.PI * 2, false);
    context.stroke();
    context.fill();
    

    requestAnimationFrame(render);
  };

  render();
});
