const fs        = require('fs');
const path      = require('path');
const watch     = require('node-watch');
const request   = require('request');

const root = path.join(__dirname, '..', '..');
const master = path.join(__dirname, '..', '..', '..', '..');

exports.master = master;
exports.root = root;

exports.masterRoot = master;

exports.rootRequire = function(name) {
   return require(root + '/' + name);
};

exports.require = function(name) {
   return require(root + '/' + name);
};

exports.restartNodemon = function() {
  var outfile = `${root}/server/tmp/restart.js`;
  fs.writeFile(outfile, 'restart', function(err) {
    if (err) return console.log(err);
  });
};

exports.restartBrowserSync = function() {
  var host = '192.168.0.3';
  var port = '3000';
  request(`http://${host}:${port}/__browser_sync__?method=reload`, function(err, res, body) {
    if (err) return console.log(`BROWSER-SYNC: ${err.message}`);
  });
};

watch(__dirname + '/index.js', { recursive: false }, function(event, name) {
  exports.restartNodemon();
});

