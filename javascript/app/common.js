var fs = require('fs');
var Handlebars = require('handlebars');

exports.render = function(file_name, req, res) {
  fs.readFile(Loc.root(`views/${file_name}.hbs`), function(err, file_content) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(Handlebars.compile(file_content.toString())(res.locals));
    }
  });
};
