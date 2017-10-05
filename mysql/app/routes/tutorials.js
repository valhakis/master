var tutorial = Loc.require('app/controllers/tutorial');

var express = require('express');
var router = express.Router();

router.get('/', tutorial.index);

module.exports = router;
