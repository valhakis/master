var VideoController = Loc.require('app/controllers/video');
var express = require('express');
var router = express.Router();

router.get('/', VideoController.index);

module.exports = router;
