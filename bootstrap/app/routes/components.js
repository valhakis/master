var ComponentController = Loc.require('app/controllers/component');
var express = require('express');
var router = express.Router();

router.get('/', ComponentController.index);

module.exports = router;
