var express = require('express');
var app = module.exports = express();

require('./config');
require('./middleware');
require('./routes');
