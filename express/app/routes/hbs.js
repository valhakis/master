var HbsController = Loc.require('app/controllers/hbs');
var express = require('express');
var router = express.Router();

router.get('/', HbsController.index);

module.exports = router;
