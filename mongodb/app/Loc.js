var path = require('path');
var Mustache = require('mustache');
var fs = require('fs');

exports._root = path.join(__dirname, '..');
exports.root = function(name) {
  return exports._root + '/' + name;
};

var partials = {
  // footer: Mustache.render(fs.readFileSync(exports.root('partials/footer.mst'), 'utf-8'))
};

exports.render = function(view, req, res) {
  // LOADS ALL PARTIALS 
  fs.readdirSync(exports.root('partials')).forEach(function(file) {
    var basename = file.replace(/\.[^/.]+$/, "");
    partials[basename] = Mustache.render(fs.readFileSync(exports.root('partials/' + file), 'utf-8'));
  });

  // MAKES A MUSTACHE TEMPLATE FROM SOURCE
  var source = fs.readFileSync(exports.root('views' + '/' + view + '.mst'), 'utf-8');
  var rendered = Mustache.render(source, res.data, partials);
  res.end(rendered);
};
