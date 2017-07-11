NewCanvas(function(canvas, context, width, height) {
  var Particle = {
    position: null,
    velocity: null,

    create: function(x, y, speed, direction) {
      var object = Object.create(this);
      object.position = vector.create(x, y);
      object.velocity = vector.create(0, 0);
      object.velocity.setLength(speed);
      object.velocity.setAngle(direction);
      return object;
    },

    update: function() {
      this.position.addTo(this.velocity);
    },
  };

  var particle = Particle.create(100, 100, 4, Math.PI / 6);

  var count_particles = 20;
  var particles = [];

  for (var i=0; i<count_particles; i++) {
    var particle = Particle.create(width / 2, height / 2, Math.random() * 4 + 1, Math.random() * Math.PI * 2);
    particles.push(particle);
  }

  var render = function() {
    context.clearRect(0, 0, width, height);

    for (var i=0; i<count_particles; i++) {
      var particle = particles[i];

      particle.update();
      context.fillStyle = '#333';
      context.strokeStyle = '#F00';
      context.lineWidth = 5;

      context.beginPath();
      context.arc(particle.position.getX(), particle.position.getY(), 25, 0, Math.PI * 2, false);
      context.stroke();
      context.fill();
    }

    requestAnimationFrame(render);
  };

  render();
});
