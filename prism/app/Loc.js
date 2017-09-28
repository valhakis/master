var path = require('path');
var fs = require('fs');
var Mustache = require('mustache');
var express = require('express');

exports._root = path.join(__dirname, '..');

exports.root = function(name) {
  return exports._root + '/' + name;
};

exports.static = function(name) {
  return express.static(exports.root(name));
};

var partials = { };


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
