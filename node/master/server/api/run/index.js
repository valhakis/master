var spawn = require('child_process').spawn;
var controller = {};

var process = {};

module.exports = function(app) {
   app.post('/api/run', controller.run);
};

controller.run = function(req, res) {
   console.log(req.body);

   res.send({message: "Where are my potatoes."});
};
