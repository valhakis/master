var Todo = GET.require('models/todo.model');

exports.all = function(req, res) {
   Todo.find(function(err, todos) {
      if (err)
         res.status(400).send(err);
      else
         res.status(200).send(todos);
   });
};

exports.create = function(req, res) {
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

exports.remove = function(req, res) {
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
};

exports.finished = function(req, res) {
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

exports.removePermanently = function(req, res) {
   Todo.remove({_id: req.params.todoId}, function(err, todo) {
      if (err) return res.send(err);
      res.send(todo);
   });
};
