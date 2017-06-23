var Code = GET.require('models/code.model');
var controller = {};

module.exports = function(router) {
   router.get('/codes', controller.all);
   router.post('/codes', controller.create);
   router.get('/codes/latest', controller.latest);
   router.delete('/codes/:codeId', controller.remove);
   router.get('/codes/:codeId', controller.findById);
   router.put('/codes/:codeId', controller.update);
};

controller.findById = function(req, res) {
   Code.findOne({_id: req.params.codeId}, function(err, code) {
      if (err) return res.status(500).send(err);
      res.send(code);
   });
};

controller.all = function(req, res) {
   Code.find({removedAt: null}, function(err, codes) {
      if (err) return res.send(err);
      res.send(codes);
   });
};

controller.create = function(req, res) {
   Code.create(req.body, function(err, code) {
      if (err) return res.send(err);
      res.send(code);
   });
};

controller.latest = function(req, res) {
   Code.find({}, {}, {
      sort: {
         createdAt: -1
      },
      limit: 3
   }, function(err, codes) {
      if (err) return res.send(err);
      res.send(codes);
   });
};

controller.remove = function(req, res) {
   Code.findOneAndUpdate({
      _id: req.params.codeId 
   }, {
      $set: {
         removedAt: new Date()
      }
   }, function(err, code) {
      if (err) return res.send(err);
      res.send(code);
   });
};

controller.update = function(req, res) {
   Code.findOneAndUpdate({_id: req.params.codeId}, req.body, function(err, code) {
      if (err) return res.status(500).send(err);
      res.send(code);
   });
};
