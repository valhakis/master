var express = require('express');
var router = express.Router();

var controller = require('./controller');

router.get('/', controller.index);

router.use('/canvases', require('./canvases'));

module.exports = router;
