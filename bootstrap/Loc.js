var Loc = {};

var fs = require('fs');
var handlebars = require('handlebars');
var root = App.masterRoot('bootstrap');

var loadTemplate = function(path) {
  var source = fs.readFileSync(Loc.root(`views/${path}`), 'utf-8');
  var template = handlebars.compile(source);
  return template;
};

handlebars.registerPartial('navbar', function(data) {
  return loadTemplate('partials/navbar.hbs')(data);
});

handlebars.registerPartial('head', function(data) {
  return loadTemplate('partials/head.hbs')(data);
});

handlebars.registerPartial('foot', function(data) {
  return loadTemplate('partials/foot.hbs')(data);
});

Loc.render = function(req, res, next) {

  res.render = function(path, data) {
    var source = fs.readFileSync(Loc.root(`views/${path}`), 'utf-8');
    var template = handlebars.compile(source);
    res.end(template(data ? data : {}));
  };

  next();
};

Loc.root = function(name) {
  return root + '/' + name;
};

Loc.require = function(name) {
  return require(root + '/' + name);
};

module.exports = Loc;
