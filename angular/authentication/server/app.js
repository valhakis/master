var express = require('express');
var app = express();

var routes = require('./routes');

require('./app.config')(app);
require('./app.middleware')(app);

routes(app);

module.exports = app;
