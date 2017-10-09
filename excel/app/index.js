var express = require('express');
var app = express();

require('./config')(app);
require('./middleware')(app);
require('./routes')(app);

module.exports = app;
