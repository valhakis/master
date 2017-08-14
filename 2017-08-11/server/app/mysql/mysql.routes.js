var express = require('express');
var router = express.Router();
var controller = require('./mysql.controller.js');

router.get('/', controller.index);
router.get('/task1', controller.task1);
router.get('/main.js', controller['main.js']);

module.exports = router;

