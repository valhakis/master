
define(function(require) {
  var keyboard = {
    keys: {}
  };

  window.addEventListener('keydown', function(event) {
    keyboard.keys[event.key] = true;
  });

  window.addEventListener('keyup', function(event) {
    keyboard.keys[event.key] = false;
  });

  return keyboard;
});
