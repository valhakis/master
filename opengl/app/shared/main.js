var Handlebars = require('handlebars');
var fs = require('fs');
exports.render = function(name, req, res) {
  fs.readFile(Loc.root('views/' + name + '.hbs'), function(err, source) {
    if (err) {
      res.send(err);
    } else {
      var template = Handlebars.compile(source.toString());
      res.send(template(res.locals));
    }
  });
};
