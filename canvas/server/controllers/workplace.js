

module.exports = function(Loc) {
  var fs = require('fs');
  var handlebars = require('handlebars');
  var db = Loc.require('server/workplace/database')(Loc).db;

  var controller = {};

  controller.renderIndex = function(req, res) {
    var template = handlebars.compile(fs.readFileSync(Loc.root('views/workplace/index.html'), 'utf-8'));
    res.status(200).end(template({}));
  };

  controller.renderDatabaseIndex = function(req, res) {
    var template = handlebars.compile(fs.readFileSync(Loc.root('views/workplace/database/index.html'), 'utf-8'));
    res.status(200).end(template({}));
  };

  controller.createWorksTable = function(req, res) {
    db.serialize(function() {
      db.run(`CREATE TABLE lorem (info TEXT);`, function(error) {
        if (error) {
          return res.json(JSON.parse(JSON.stringify(error)));
        } else {
          return res.json({message: 'TABLE HAS BEEN CREATED MY LORD'});
        }
      });
    });
  };

  return controller;
};
