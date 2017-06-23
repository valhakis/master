var Todo = GET.require('models/todo.model');
var controller = {};

module.exports = function(router) {
   router.get('/todos', controller.all);
   router.get('/todos/:todoId', controller.findById);
   router.post('/todos', controller.create);
   router.delete('/todos/:todoId', controller.remove);
   router.delete('/todos/:todoId/permanently', controller.removePermanently);
   router.put('/todos/:todoId/finished', controller.finished);
   router.put('/todos/:todoId/done', controller.setDone);
   router.put('/todos/:todoId/notDone', controller.setNotDone);
   router.put('/todos/:todoId/recover', controller.recover);
};

controller.findById = function(req, res) {
   Todo.findById(req.params.todoId, function(err, todo) {
      if (err) return res.status(500).send(err);
      res.send(todo);
   });
};

controller.recover = function(req, res) {
   Todo
      .findOneAndUpdate({
         _id: req.params.todoId
      },{
         $set:{
            removedAt: null
         }
      }, function(err, todo) {
         if (err) return res.status(500).send(err);
         res.send(todo);
      });
};

controller.all = function(req, res) {
   var query = {
      removedAt: req.query.removed ? {$ne: null} : null
   };
   Todo.find(query, function(err, todos) {
      if (err)
         res.status(400).send(err);
      else
         res.status(200).send(todos);
   });
};

controller.create = function(req, res) {
   Todo.create({
      text: req.body.text,
      done: false
   }, function(err, todo) {
      if (err)
         res.status(400).send(err);
      else
         Todo.find(function(err, todos) {
            if (err) 
               res.status(400).send(err);
            else
               res.status(200).send(todos);
         });
   });
};

controller.remove = function(req, res) {
   if (req.query.destroy) {
      Todo.findOneAndRemove({
         _id: req.params.todoId 
      }, function(err, todo) {
         if (err) return res.send(err);
         res.send(todo);
      });
   } else {
      Todo.findOneAndUpdate({
         _id: req.params.todoId 
      }, {
         $set: {
            removedAt: new Date()
         }
      }, function(err, todo) {
         if (err) return res.send(err);
         res.send(todo);
      });
   }
};

controller.finished = function(req, res) {
   Todo.findOneAndUpdate({
      _id: req.params.todoId 
   }, {
      $set: {
         finishedAt: new Date()
      }
   }, function(err, todo) {
      if (err) return res.send(err);
      res.send(todo);
   });
};

controller.removePermanently = function(req, res) {
   Todo.remove({_id: req.params.todoId}, function(err, todo) {
      if (err) return res.send(err);
      res.send(todo);
   });
};

controller.setDone = function(req, res) {
   Todo.findOneAndUpdate({
      _id: req.params.todoId 
   }, {
      $set: {
         finishedAt: new Date()
      }
   }, function(err, todo) {
      if (err) return res.status(500).send(err);
      res.send(todo);
   });
};

controller.setNotDone = function(req, res) {
   Todo.findOneAndUpdate({
      _id: req.params.todoId 
   }, {
      $set: {
         finishedAt: null
      }
   }, function(err, todo) {
      if (err) return res.send(err);
      res.send(todo);
   });
};
