var Person = GET.require('models/person.model');

exports.findAll = function(req, res) {
   /*
   Person
   .find({}, function(err, persons) {
      if (err) return res.send(err);
      res.send(persons);
   });
   */
   Person
      .find({})
      .populate('stories')
      .exec(function(err, persons) {
         if (err) return res.send(err);
         res.send(persons);
      });
   Person
   .findOne({})
   .populate('stories')
      .exec(function(err, person) {
         if (err) return console.log(err);
         console.log(person);
      });
};
