var Todo = Loc.require('server/app/models/todo');

exports.index = function(req, res) {

  var promise = Todo.find({});

  promise.sort({createdAt: -1});

  if (req.query.limit) {
    promise.limit(parseInt(req.query.limit));
  }

  promise.exec().then(todos => {
    res.status(200).send(todos);
  });

  promise.catch(err => {
    res.status(500).send(err);
  });

};

exports.store = function(req, res) {
  Todo.create({
    title: req.body.title
  }).then(todo => {
    res.status(200).send(todo);
  }).catch(err => {
    res.status(500).send(err);
  });
};
