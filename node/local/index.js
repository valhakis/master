var path = require('path');
var handlebars = require('handlebars');
var fs = require('fs');

var root = path.join(__dirname, '..');

var Loc = {};

Loc.root = function(name) {
  return root + '/' + name;
};

Loc.render = function(req, res, next) {
  res.render = function(path, data) {
    var template = handlebars.compile(fs.readFileSync(Loc.root(`views/${path}`), 'utf-8'));
    data = data || {};
    res.end(template(data));
  };

  next();
};

module.exports = Loc;
