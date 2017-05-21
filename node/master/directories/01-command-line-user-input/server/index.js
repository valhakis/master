var started = false;

var server;

exports.start = function() {
   if (!started) {
      started = true;
      console.log('I have to start the server.');
   } else {
      console.log('Server has already been started.');
   }
};

exports.started = started;
