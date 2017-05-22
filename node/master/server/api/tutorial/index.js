var Tutorial = GET.require('models/tutorial.model');
var controller = {};

module.exports = function(router) {
   router.get('/tutorials/:tutorialId', controller.single);
   router.get('/tutorials', controller.findAll);
   router.post('/tutorials', controller.create);
   router.post('/tutorials/:tutorialId/codes', controller.createPost);
   router.delete('/tutorials/:tutorialId', controller.remove);
   router.put('/tutorials/:tutorialId/recover', controller.recover);
};

controller.createPost = function(req, res) {
   Tutorial.findOneAndUpdate({
      _id: req.params.tutorialId
   }, {
      $push: {
         codes: req.body
      }
   }, function(err, tutorial) {
      if (err) return res.status(500).send(err);
      res.send(tutorial);
   });
};

controller.findAll = function(req, res) {
   var query = {removedAt: req.query.removed ? {$ne: null} : null};
   Tutorial.find(query, function(err, tutorials) {
      if (err) return res.status(500).send(err);
      res.send(tutorials);
   });
};

controller.create = function(req, res) {
   Tutorial.create(req.body, function(err, tutorial) {
      if (err) return res.status(500).send(err);
      res.send(tutorial);
   });
};

controller.remove = function(req, res) {
   if (req.query.destroy) {
      Tutorial.remove({_id: req.params.tutorialId}, function(err, tutorial) {
         if (err) return res.status(500).send(err);
         res.send(tutorial);
      });
   } else {
      Tutorial.findOneAndUpdate({
         _id: req.params.tutorialId 
      }, {
         $set: {
            removedAt: new Date()
         }
      }, function(err, tutorial) {
         if (err) return res.status(500).send(err);
         res.send(tutorial);
      });
   }
};

controller.recover = function(req, res) {
   Tutorial.findOneAndUpdate({
      _id: req.params.tutorialId 
   }, {
      $set: {
         removedAt: null
      }
   }, function(err, tutorial) {
      if (err) return res.status(500).send(err);
      res.send(tutorial);
   });
};

controller.single = function(req, res) {
   Tutorial.findOne({_id: req.params.tutorialId}).then(function(tutorial) {
      res.send(tutorial);
   }).catch(function(err) {
      if (err) return res.status(500).send(err);
   });
};
