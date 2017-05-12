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
   Todo.remove({
      _id: req.params.todoId
   }, function(err, todo) {
      if (err) 
         res.status(400).send(err);
      else
         Todo.find(function(err, todos) {
            if (err) 
               res.status(400).send(todos);
            else
               res.status(200).send(todos);
         });
   });
};
