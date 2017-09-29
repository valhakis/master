var path = require('path');
var Mustache = require('mustache');
var fs = require('fs');

var Loc = App.loc['mongodb'] = {};

Loc._root = path.join(__dirname, '..');
Loc.root = function(name) {
  return Loc._root + '/' + name;
};

var partials = {
  // footer: Mustache.render(fs.readFileSync(Loc.root('partials/footer.mst'), 'utf-8'))
};

Loc.render = function(view, req, res) {
  // LOADS ALL PARTIALS 
  fs.readdirSync(Loc.root('partials')).forEach(function(file) {
    var basename = file.replace(/\.[^/.]+$/, "");
    partials[basename] = Mustache.render(fs.readFileSync(Loc.root('partials/' + file), 'utf-8'));
  });

  // MAKES A MUSTACHE TEMPLATE FROM SOURCE
  var source = fs.readFileSync(Loc.root('views' + '/' + view + '.mst'), 'utf-8');
  var rendered = Mustache.render(source, res.data, partials);
  res.end(rendered);
};

module.exports = App.loc['mongodb'];
