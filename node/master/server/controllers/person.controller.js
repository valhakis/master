var Person = GET.require('models/person.model');

exports.renderIndex = function(req, res) {
   Person.find({}, function(err, persons) {
      if (err) return res.send(err);
      res.render('person/index', {
         persons: persons
      });
   });
};

exports.create = function(req, res) {
   Person.create({
      name: req.body.name
   }, function(err, person) {
      if (err) return res.send(err);
      if (req.body._redirect) {
         res.redirect(req.body._redirect);
      } else {
         res.send(person);
      }
   });
};
