var LiteServer = APP.rootRequire('lite-server');

exports.start = function(req, res) {
   LiteServer.start(function() {
      res.send("I have to start lite-server.");
   });
};

exports.stop = function(req, res) {
   LiteServer.stop(function() {
      res.send("I have to stop lite-server.");
   });
};

exports.status = function(req, res) {
   LiteServer.status(function(open) {
      res.send({
         open: open
      });
   });
};
