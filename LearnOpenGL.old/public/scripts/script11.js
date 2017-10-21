NewCanvas(function(canvas, context, width, height) {
  var intervalId;

  var MAX_FRAME = 30;
  var X = 0, Y = 1;

  var frame = 0;

  var position = [0, 0];
  var velocity = [9, 3];

  var render = function() {

    position[X] += velocity[X];
    position[Y] += velocity[Y];

    context.clearRect(0, 0, width, height);
    context.fillRect(position[X], position[Y], 5, 5);

    if (frame >= MAX_FRAME) {
      position = [0, 0];
      velocity = [9, 3];
      frame = 0;
    }

    frame += 1;
  };

  intervalId = setInterval(render, 100);

});
