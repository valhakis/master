var path = require('path');
var fs = require('fs');
var handlebars = require('handlebars');
var layouts = require('handlebars-layouts');
var express = require('express');

module.exports = function(name, done) {

  Loc[name] = {
    partials: [],
    _root: path.join(__dirname, '..'),
    require: function(name) {
      return require(this._root + '/' + name);
    },
    root: function(name) {
      return this._root + '/' + name;
    },
    registerPartial: function(name, path) {
      this.partials.push({ name: name, path: path });
    },
    static: function(name) {
      return express.static(this.root(name));
    },
    render: function(path, req, res) {
      this.partials.forEach(partial => {
        handlebars.registerPartial(partial.name, fs.readFileSync(this.root(`views/${partial.path}.hbs`), 'utf-8'));
      });
      var source = fs.readFileSync(this.root(`views/${path}.hbs`), 'utf-8');
      var template = handlebars.compile(source);
      res.end(template(res.locals));
    },
    source: function(path) {
      return fs.readFileSync(this._root + '/' + path, 'utf-8');
    },
  };

  done();
}
