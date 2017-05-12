var Task = GET.require('models/task.model');

exports.all = function(req, res) {
   Task.find({}, function(err, tasks) {
      if (err) 
         res.status(400).send(err);
      else 
         res.status(200).send(tasks);
   });
};

exports.create = function(req, res) {
   var newTask = new Task(req.body);

   newTask.save(function(err, task) {
      if (err) 
         res.status(400).send({errors: err.errors});
      else 
         res.status(200).send(task);
   });
};

exports.remove = function(req, res) {
   Task.remove({
      _id: req.params.taskId
   }, function(err) {
      if (err) {
         res.status(400).send(err);
      } else {
         res.status(200).send({message: 'Task deleted.'});
      }
   });
};
