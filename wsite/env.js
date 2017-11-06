var path = require('path');

var env = {};

env.bs_port = '4060';
env.port = '4050';
env.host = '192.168.0.3';
env.node_modules_dir = path.join(__dirname, '..', 'node_modules');
env.namespace = '/wsite';

module.exports = env;
