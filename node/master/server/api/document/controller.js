var Document = GET.require('models/document.model');

exports.index = function(req, res) {
   Document.find({}).exec(function(err, documents) {
      if (err) return res.send(err);
      res.send(documents);
   });
};
