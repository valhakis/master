var handlebars = require('handlebars');
var fs = require('fs');
var path = require('path');
var root = path.join(__dirname, '..');
var Loc = {};

Loc.root = function(name) {
  return root + '/' + name;
};

Loc.require = function(name) {
  return require(root + '/' + name);
};

Loc.renderer = function(req, res, next) {
  res.render = function(path, data) {
    data = data || {};

    data.errors = req.flash('errors') || [];
    data.successes = req.flash('successes') || [];

    var source = fs.readFileSync(Loc.root(`views/${path}`), 'utf-8');
    var template = handlebars.compile(source);

    res.end(template(data));
  };

  next();
};

module.exports = Loc;
