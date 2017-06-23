var express = require('express');
var app = express();

require('./app.config')(app);
require('./app.middleware')(app);
require('./app.routes')(app);

module.exports = app;
