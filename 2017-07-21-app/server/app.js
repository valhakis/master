var express = require('express');
var Prism = require('prismjs');
require('prismjs/components/prism-c');
require('prismjs/components/prism-makefile');
var fs = require('fs');

var app = express();

app.get('/01/makefile', function(req, res) {
  var source = fs.readFileSync(App.root('public/01/makefile'), 'utf-8');
  if (req.query.raw) {
    res.end(source);
    return;
  }
  res.header('Content-Type', 'text/html');
  source = Prism.highlight(source, Prism.languages.makefile);
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="/lib/prismjs/themes/prism.css">
  </head>
  <body>
    <pre>${source}</pre>
  </body>
  </html>
  `);
});

app.get('/01/src/main.c', function(req, res) {
  var source = fs.readFileSync(App.root('public/01/src/main.c'), 'utf-8');
  if (req.query.raw) {
    res.end(source);
    return;
  }
  res.header('Content-Type', 'text/html');
  source = Prism.highlight(source, Prism.languages.c);
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="/lib/prismjs/themes/prism.css">
  </head>
  <body>
    <pre>${source}</pre>
  </body>
  </html>
  `);
});

app.use('/', express.static(App.root('public')));

app.use('/lib', express.static(App.masterRoot('node_modules')));

module.exports = app;
