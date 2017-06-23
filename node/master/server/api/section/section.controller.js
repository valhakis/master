var Section = GET.require('models/section.model');

exports.all = function(req, res) {
   Section.find(function(err, sections) {
      if (err)
         res.status(400).send(err);
      else
         res.status(200).send(sections);
   });
};

exports.create = function(req, res) {
   Section.create(req.body, function(err) {
      if (err) 
         res.status(400).send(err);
      else
         Section.find(function(err, sections) {
            if (err) 
               res.status(400).send(err);
            else
               res.status(200).send(sections);
         });
   });
};

exports.remove = function(req, res) {
   Section.remove( {
      _id: req.params.sectionId
   }, function(err) {
      if (err) 
         res.status(400).send(err);
      else
         Section.find(function(err, sections) {
            if (err) 
               res.status(400).send(err);
            else
               res.status(200).send(sections);
         });
   });
};
