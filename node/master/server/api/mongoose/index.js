var Mongoose = GET.require('models/mongoose');

var controller = new Controller();

module.exports = function(app) {
   app.get('/api/mongoose', controller.index);
   app.get('/api/mongooses', controller.allMongooses);
   app.post('/api/mongooses', controller.createMongoose);
};

function Controller () {}

Controller.prototype.index = function(req, res) {
   res.send(`I'm mongoose.`);
};

Controller.prototype.allMongooses = function(req, res) {
   Mongoose.find({}).exec().then(function(mongooses) {
      res.send(mongooses);
   }).catch(function (err) {
      res.send(err);
   });
};

Controller.prototype.createMongoose = function(req, res) {
   Mongoose.create({
      name: req.body.name
   }).then(function(mongoose) {
      res.send(mongoose);
   }).catch(function(err) {
      res.send(err);
   });
};
