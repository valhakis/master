// /api/common/master_file

var fs = require('fs');

exports.master_file = function(req, res) {
  var file = req.query.file;
  var source = fs.readFileSync(App.masterRoot(file), 'utf-8');
  res.send(source);
};

exports.nsite_env_return = function(req, res) {
  var env = App.masterRequire('/nsite/env.js');
  res.send(env);
};
