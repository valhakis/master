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
    var source = fs.readFileSync(Loc.root(path), 'utf-8');
    var template = handlebars.compile(source);
    data = data || {};
    res.end(template(data));
    // console.log('example', path);
  };
  next();
};

module.exports = Loc;
