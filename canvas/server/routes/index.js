var express = require('express');
var routes = express.Router();
var Loc = App.masterRequire('canvas/Local');

routes.use('/plan', require('./plan'));

module.exports = routes;
