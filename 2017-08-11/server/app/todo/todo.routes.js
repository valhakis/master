var express = require('express');
var router = express.Router();
var controller = require('./todo.controller');

router.get('/', controller.index);
router.get('/new', controller.new);

module.exports = router;
