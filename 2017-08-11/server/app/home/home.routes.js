var controller = require('./home.controller');

var express = require('express');
var router = express.Router();

router.get('/run', controller.run);

module.exports = router;
