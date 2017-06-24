// /static

var morgan = require('morgan');
var fs = require('fs');
var path = require('path');
var root = path.join(__dirname, '..');
var glob = require('glob');
var globby = require('globby');

var inject = require('connect-inject');
var express = require('express');
var router = express.Router();

router.use(morgan('dev'));

router.use('**/*', function(req, res, next) {
  next();
});


router.use(inject({
  snippet: `<script src="/static/lib/main.js?v=${new Date()}"></script>`,
  ignore: ['.js', '.svg', '.css']
}));

// /static/teset
router.get('/test', function(req, res) {
  res.send('test is working fine');
});

router.get('/api/files', function(req, res) {
  var masterRoot = App.masterRoot;
  var files = findFiles(masterRoot);
  var paths = getFilePaths(files);
  res.send({
    files: files,
    paths: paths
  });
});

router.use(express.static(root + '/public'));

router.get('*', function(req, res) {
  res.status(404).sendFile(root + '/public/pages/404.html');
});

module.exports = router;

function findFiles(root) {
  var data = [];

  var files = fs.readdirSync(root);
  for (var x=0; x<files.length; x++) {
    if (files[x].match(/node_modules|bower_components|.git/)) continue;
    var newFile = {
      name: files[x],
      path: root + '/' + files[x]
    };
    newFile.isDir = fs.lstatSync(newFile.path).isDirectory();
    if (newFile.isDir) {
      newFile.files = findFiles(newFile.path);
    }
    data.push(newFile);
  }
  return data;
}

function getFilePaths(data) {
  var paths = [];
  for (var x=0; x<data.length; x++) {
    if (data[x].isDir) {
      paths = paths.concat(getFilePaths(data[x].files));
    } else {
      paths.push(data[x].path);
    }
  }
  return paths;
}
