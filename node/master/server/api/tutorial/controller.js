var Tutorial = GET.require('models/tutorial.model');

exports.findAll = function(req, res) {
   Tutorial.find({ 
      removedAt: null 
   }, function(err, tutorials) {
      if (err) return res.send(err);
      res.send(tutorials);
   });
};

exports.create = function(req, res) {
   Tutorial.create(req.body, function(err, tutorial) {
      if (err) return res.send(err);
      res.send(tutorial);
   });
};

exports.remove = function(req, res) {
   Tutorial.findOneAndUpdate({
      _id: req.params.tutorialId 
   }, {
      $set: {
         removedAt: new Date()
      }
   }, function(err, tutorial) {
      if (err) return res.send(err);
      res.send(tutorial);
   });
};
