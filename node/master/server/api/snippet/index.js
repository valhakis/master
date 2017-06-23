const Snippet = GET.require('models/snippet');

var controller = {};

module.exports = function(app) {
   app.get('/api/snippets', controller.all);
   app.post('/api/snippets', controller.create);
   app.put('/api/snippets/:snippetId', controller.update);
   app.delete('/api/snippets/:snippetId', controller.remove);
};

controller.all = function(req, res) {
   Snippet.find({removedAt: null}, function(err, snippets) {
      if (err) return res.send(err);
      res.send(snippets);
   });
};

controller.findById = function(req, res) {
   Snippet.findById(req.params.snippetId, function(err, snippet) {
      if (err) return res.send(err);
      res.send(snippet);
   });
};

controller.update = function(req, res) {
   Snippet.findOneAndUpdate({_id: req.params.snippetId}, req.body, {new: true}, function(err, snippet) {
      if (err) return res.send(err);
      res.send(snippet);
   });
};

controller.create = function(req, res) {
   Snippet.create(req.body, function(err, snippet) {
      if (err) return res.send(err);
      res.send(snippet);
   });
};

controller.remove = function(req, res) {
   Snippet.findOneAndUpdate({_id: req.params.snippetId}, {removedAt: new Date()}, function(err, snippet) {
      if (err) return res.send(err);
      res.send(snippet);
   });
};
