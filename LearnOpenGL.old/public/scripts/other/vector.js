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
