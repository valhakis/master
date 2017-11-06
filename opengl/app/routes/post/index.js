var express = require('express');
var router = module.exports = express.Router();
var controller = require('./controller');

router.get('/:postId', controller.render_single);
