var controller = require('./controller');

var express = require('express');
var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.store);

module.exports = router;
