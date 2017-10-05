var loc = Loc['stack'];

var main = loc.require('app/controllers/main');

var express = require('express');
var router = express.Router();

router.get('/', main.index);

module.exports = router;
