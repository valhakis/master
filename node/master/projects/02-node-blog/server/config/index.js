var path = require('path');

var root = path.join(__dirname, '../../../../../..');

var paths = {
   node_modules: root + '/node_modules',
   bower_components: root + '/bower_components',
};

console.log(paths.node_modules);

module.exports = {
   root: root,
   host: '192.168.0.2',
   port: '3300',
   paths: paths
};
