var express = require('express');
var router = express.Router();

var root = __dirname;

router.use(express.static(root + '/public'));

module.exports = router;
