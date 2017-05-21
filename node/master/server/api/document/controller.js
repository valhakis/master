var Document = GET.require('models/document.model');

exports.index = function(req, res) {
   Document.find({}).exec(function(err, documents) {
      if (err) return res.send(err);
      res.send(documents);
   });
};

exports.remove = function(req, res) {
   Document.findOneAndUpdate({_id: req.params.documentId}, {removedAt: new Date()}, function(err, document) {
      if (err) return res.send(err);
      res.send(document);
   });
};

exports.unRemove = function(req, res) {
   Document.findOneAndUpdate({_id: req.params.documentId}, {removedAt: null}, function(err, document) {
      if (err) return res.send(err);
      res.send(document);
   });
};
