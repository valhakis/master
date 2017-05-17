var Person = GET.require('models/person.model');
var Story = GET.require('models/story.model');

exports.renderIndex = function(req, res) {
   res.render('story/index', {
      person: req.session.person
   });
};

exports.authenticate = function(req, res) {
   Person
      .findOne({ name: req.body.name })
      .populate('stories')
      .exec(function(err, person) {
         if (err) 
            return res.send(err);
         if (!person) 
            return res.send({ message: `Did not find ${req.body.name} from the database.` });

         console.log(person);
         req.session.person = person;

         if (req.body._redirect) {
            return res.redirect(req.body._redirect);
         }
         res.send(person);
      });
};

exports.create = function(req, res) {
   console.log(req.body._creator);
   Story.create({
      title: req.body.title,
      _creator: req.body._creator
   }, function(err, story) {
      if (err) return res.send(err);

      console.log(story);
      if (req.body._redirect) 
         return res.redirect(req.body._redirect);

      res.send(story);
   });
};

exports.middleware = function(req, res, next) {
   if (req.session && req.session.person) {
      Person
         .findOne({ _id: req.session.person._id })
         .populate('stories')
         .exec(function(err, person) {
            if (err) return res.send(err);
            if (!person) return res.send({message: `Did not find person.`});
            req.session.person = person;
            next();
         });
   } else {
      next();
   }
};
