var express = require('express');
var router = express.Router();

router.use('/items', require('./item'));

module.exports = router;
