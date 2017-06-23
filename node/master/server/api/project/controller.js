var Project01 = APP.rootRequire('projects/01-example');

exports.project01 =  {};

exports.project01.start = function(req, res) {
   Project01.start(function() {
      res.send('I HAVE STARTED PROJECT 01');
   });
};

exports.project01.stop = function(req, res) {
   Project01.stop(function() {
      res.send('I HAVE STOPPED PROJECT 01');
   });
};

exports.project01.status = function(req, res) {
   Project01.status(function(open) {
      res.send({
         open: open
      });
   });
};
