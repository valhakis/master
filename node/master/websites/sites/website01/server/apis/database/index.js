var handlebars = require('handlebars');
var config = App.rootRequire('/websites/sites/website01/config');
var express = require('express');
var fs = require('fs');

var router = express.Router();
var root = config.root;

var db = require('./db');

router.get('/', function(req, res) {
  db.numTables(function(num_tables) {
    db.getTables(function(tables) {
      var data = {
        num_tables: num_tables,
        tables: tables
      };
      var source = fs.readFileSync(root + '/views/database/index.hbs', 'utf8');
      var template = handlebars.compile(source);
      res.send(template(data));
    });
  });
});

router.get('/table/:tableName', function(req, res) {
  db.tableInfo(req.params.tableName, function() {
  });;
  // console.log(req.params.tableName);
  db.getTableSql(req.params.tableName, function(sql) {
    var source = fs.readFileSync(root + '/views/database/table/index.hbs', 'utf8');
    var template = handlebars.compile(source);
    var data = {
      sql: sql,
      tableName: req.params.tableName
    };
    res.send(template(data));
  });
});

router.post('/table/:tableName/add/column', function(req, res) {
  var data = {
    tableName: req.params.tableName,
    columnName: req.body.columnName,
    columnType: req.body.columnType
  };
  db.addColumn(data, function(err, data) {
    console.log(err, data);
  });
  res.redirect('back');
});

module.exports = router;
