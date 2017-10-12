var fs = require('fs');

exports.index = function(req, res) {
  var source = fs.readFileSync(App.root('server/app/todo/todo.index.view.html'), 'utf-8');
  res.end(source);
};

exports.new = function(req, res) {
  var source = fs.readFileSync(App.root('server/app/todo/new.view.html'), 'utf-8');
  res.end(source);
};
