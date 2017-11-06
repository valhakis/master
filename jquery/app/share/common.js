var Handlebars = require('handlebars');
var express = require('express');
var fs = require('fs');

exports.render = function(name, req, res) {
  fs.readFile(Loc.root('app/views/' + name + '.hbs'), function(err, context) {
    if (err) {
      res.send(err);
    } else {
      res.send(Handlebars.compile(context.toString())(res.locals));
    }
  });
};
