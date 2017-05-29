var express = require('express');
var app = express();

var routes = require('./routes');

require('./app.config')(app);
require('./app.middleware')(app);

require('./sample/routes')(app);

routes(app);

require('./testing')(app);

module.exports = app;
