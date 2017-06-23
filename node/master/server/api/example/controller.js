var example = APP.rootRequire('example');

exports.index = function(req, res) {
   res.send('working');
};

exports.start = function(req, res) {
   example.start(function(response) {
      res.send({
         message: "I have to start example.",
         response: response
      });
   });
};

exports.stop = function(req, res) {
   example.stop(function(response) {
      res.send({
         message: "I have to stop example.",
         response: response
      });
   });
};

exports.status = function(req, res) {
   example.status(function(open, response) {
      var message;
      if (open) {
         message = "EXAMPLE IS OPEN.";
      } else {
         message = "EXAMPLE IS NOT OPEN.";
      }
      res.send({
         open: open,
         message: message,
         response: response
      });
   });
};
