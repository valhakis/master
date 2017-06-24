process.stdout.write('\033c'); // clear console
var path = require('path');

var fs = require('fs');

var root = path.join(__dirname, '../..');

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

var data = {}
data.files = findFiles(root);
data.paths = getFilePaths(data.files);

console.log(getFilePaths(data.files));
fs.writeFileSync(__dirname + '/tmp/outfile.json', JSON.stringify(data, ' ', 2));
