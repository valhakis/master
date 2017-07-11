module.exports = function(Loc) {
  var express = require('express');
  var prism = express.Router();

  prism.get('/', function(req, res) {
    res.render('prism/index.html');
  });

  return prism;
};
