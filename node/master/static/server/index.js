// /static

var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
var escape = require('escape-html');
var sanitize = require('sanitize-html');
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

router.get('/example', function(req, res) {
  var file = '/home/thomas/tmp/sample.c';
  var out = '/home/thomas/tmp/sample.html';

  // var hnd = spawn("vim", ['sample.c', '-c', 'TOhtml|x|qa!', '>/dev/null'], {
   var hnd = spawn("vim", ['sample.c', '-c', 'TOhtml|w sample.html|q!|qa!', '>/dev/null'], {
    cwd: '/home/thomas/master/tmp/'
  });

  hnd.on('close', (code) => {
    console.log(`closed: ${code}`);
    res.send('working');
  });

});

router.get('/test', function(req, res) {
  res.send('test is working fine'); 
});

router.get('/view/:file', function(req, res) {
  var file = JSON.parse(req.params.file);
  // var hnd = spawn("vim", ['sample.c', '-c', 'TOhtml|w sample.html|q!|qa!', '>/dev/null'], {
  console.log(file.path);
  var hnd = spawn("vim", ['-R', `${file.path}`, '-c', 'TOhtml|w!sample.html|q!|qa!'], {
    cwd: '/home/thomas/master/tmp/',
    // stdio: 'inherit'
  });

  hnd.on('close', (code) => {
    console.log(`closed: ${code}`);
    res.sendFile('/home/thomas/master/tmp/sample.html');
    //res.send('working');
  });
  return;
  var source = fs.readFileSync(file.path, 'utf8');
  console.log(file);
  res.send(`
  <html>
    <head>
      <title>View</title>
    </head>
    <body>

      <h1>${file.name}</h1>

      <pre>${sanitize(escape(source))}</pre>

    </body>
  </html>
  `);

  // res.send(source);
  // res.send('okei');
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
    } else {
      var ext = path.extname(files[x]);
      newFile.ext = ext;
      switch (ext) {
        case '.c': newFile.type = 'c'; break;
        case '.cpp': newFile.type = 'cpp'; break;
        case '.js': newFile.type = 'javascript'; break;
        case '.css': newFile.type = 'css'; break;
        default: newFile.type = 'none'; break;
      }
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
