var Kitten = GET.require('models/kitten.model');

exports.all = function(req, res) {
   Kitten.find({}, function(err, kittens) {
      if (err)
         res.send(err);
      else
         res.send(kittens);
   });
};

exports.create = function(req, res) {
   Kitten.create(req.body, function(err, kitten) {
      if (err)  {
         res.status(400).send(err);
      } else {
         res.send(kitten);
         kitten.speak();
      }
   });
};

exports.remove = function(req, res) {
   Kitten.remove({ _id: req.params.kittenId }, function(err, kitten) {
      if (err)
         res.send(err);
      else
         res.send(kitten);
   });
};
