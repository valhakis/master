var Vector = {
	_x: 1,
	_y: 1,
	create: function(x, y) {
		var obj = Object.create(this);

		obj.setX(x);
		obj.setY(y);

		return obj;
	},

	// SET, GET X VALUE
	// =============================
	setX: function(value) {
		this._x = value;
	},
	getX: function(value) {
		return this._x;
	},

	// SET, GET Y VALUE
	// =============================
	setY: function(value) {
		this._y = value;
	},
	getY: function(value) {
		return this._y;
	},

	// SET, GET ANGLE
	// =============================
	setAngle: function(angle) {
		var length = this.getLength();
		this._x = Math.cos(angle) * length;
		this._y = Math.sin(angle) * length;
	},
	getAngle: function() {
		return Math.atan2(this._y, this._x);
	},

	// SET, GET LENGTH
	// =============================
	setLength: function(length) {
		var angle = this.getAngle();
		this._x = Math.cos(angle) * length;
		this._y = Math.sin(angle) * length;
	},
	getLength: function() {
		return Math.sqrt(this._x * this._x + this._y * this._y);
	},

	// ADD, SUBTRACT, MULTIPLY, DIVIDE AND RETURN VECTOR 
	// ===================================================
	add: function(v2) {
		return Vector.create(this._x + v2.getX(), this._y + v2.getY());
	},

	subtract: function(v2) {
		return Vector.create(this._x - v2.getX(), this._y - v2.getY());
	},

	multiply: function(value) {
		return Vector.create(this._x * value, this._y * value);
	},

	divide: function(value) {
		return Vector.create(this._x / value, this._y / value);
	},

	// ADD, SUBTRACT, MULTIPLY, DIVIDE TO EXISTING VECTOR 
	// ===================================================
	addTo: function(v2) {
		this._x += v2.getX();
		this._y += v2.getY();
	},

	subtractFrom: function(v2) {
		this._x -= v2.getX();
		this._y -= v2.getY();
	},

	multiplyBy: function(value) {
		this._x *= value;
		this._y *= value;
	},

	divideBy: function(value) {
		this._x /= value;
		this._y /= value;
	},
};

var Particle = {
  position: null,
  gravity: null,
  velocity: null,
  mass: 1,
  create: function(x, y, speed, direction, gravity) {
    var obj = Object.create(this);

    obj.position = Vector.create(x, y);
    obj.velocity = Vector.create(0, 0);
    obj.velocity.setLength(speed);
    obj.velocity.setAngle(direction);
    obj.gravity = Vector.create(0, gravity || 0);

    return obj;
  },
  accelerate: function(acceleration) {
    this.velocity.addTo(acceleration);
  },
  update: function() {
    this.velocity.addTo(this.gravity);
    this.position.addTo(this.velocity);
  },
  angleTo: function(particle) {
    return Math.atan2(particle.position.getY()-this.position.getY(), particle.position.getX()-this.position.getX());
  },
  distanceTo: function(particle) {
    var dx = particle.position.getX() - this.position.getX();
    var dy = particle.position.getY() - this.position.getY();
    return Math.sqrt(dx*dx + dy*dy);
  },
  gravitateTo: function(particle) {
    var gravity = Vector.create(0, 0);
    var distance = this.distanceTo(particle);

    gravity.setLength(particle.mass / (distance*distance));
    gravity.setAngle(this.angleTo(particle));

    this.velocity.addTo(gravity);
  }
};

var Acceleration = {
  particle: Particle.create(0, 0, 8, -Math.PI/2),
  acceleration: Vector.create(0.1, 0.1),
  create: function(game) {
    var object = Object.create(this);
    object.game = game;
    object.initialize();
    return object;
  },
  initialize: function() {
    // this.particle.position.setX(this.game.centerX);
    this.particle.position.setY(this.game.height);
  },
  update: function() {
    var ctx = this.game.context;

    this.particle.accelerate(this.acceleration);
    this.particle.update();

    ctx.fillStyle = "#FFF";

    ctx.beginPath();
    ctx.arc(this.particle.position.getX(), this.particle.position.getY(), 20, 0, Math.PI*2);
    ctx.fill();
  }
};

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var centerX = width / 2;
var centerY = height / 2;

var sun = Particle.create(centerX, centerY, 0.0, 0);
var planet = Particle.create(centerX+200, centerY, 1, -Math.PI/2);
var kuu =  Particle.create(centerX+100, centerY, 2, Math.PI/2);

planet.mass = 1500;
sun.mass = 200;

var render = function() {
  ctx.clearRect(0, 0, width, height);
  kuu.gravitateTo(planet);
  kuu.gravitateTo(sun);
  planet.gravitateTo(sun);
  planet.update();
  sun.update();
  kuu.update();

 ctx.beginPath();
  ctx.fillStyle = "#00FFFF";
  ctx.arc(kuu.position.getX(), kuu.position.getY(), 5, 0, Math.PI*2);
  ctx.fill();


  ctx.beginPath();
  ctx.fillStyle = "#FFFF00";
  ctx.arc(this.sun.position.getX(), this.sun.position.getY(), 20, 0, Math.PI*2);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "#00FF00";
  ctx.arc(planet.position.getX(), planet.position.getY(), 5, 0, Math.PI*2);
  ctx.fill();

  ctx.strokeStyle = "#000";
  ctx.beginPath();
  ctx.arc(this.sun.position.getX(), this.sun.position.getY(), 200, 0, Math.PI*2);
  ctx.stroke();

  requestAnimationFrame(render);
};

render();
