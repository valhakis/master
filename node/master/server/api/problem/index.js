var Problem = GET.require('models/problem');

var controller = {};

module.exports = function (app) {
   app.get('/api/problems', controller.findAll);
   app.post('/api/problems', controller.create);
   app.get('/api/problems/:problemId', controller.single);
   app.delete('/api/problems/:problemId', controller.remove);
   app.put('/api/problems/:problemId', controller.update);
};

controller.findAll = function(req, res) {
   Problem.find({removedAt: null}, function(err, problems) {
      if (err) return res.status(500).send(err);
      res.send(problems);
   });
};

controller.create = function(req, res) {
   Problem.create(req.body, function(err, problem) {
      if (err) return res.status(500).send(err);
      res.send(problem);
   });
};

controller.single = function(req, res) {
   Problem.findOne({_id: req.params.problemId}, function(err, problem) {
      if (err) return res.status(500).send(err);
      res.send(problem);
   });
};

controller.remove = function(req, res) {
   Problem.findOneAndUpdate({
      _id: req.params.problemId
   }, {
      removedAt: new Date()
   }, function(err, problem) {
      if (err) return res.status(500).send(err);
      res.send(problem);
   });
};

controller.update = function(req, res) {
   Problem.findOneAndUpdate({
      _id: req.params.problemId
   }, req.body, function(err, problem) {
      if (err) return res.status(500).send(err);
      res.send(problem);
   });
};
