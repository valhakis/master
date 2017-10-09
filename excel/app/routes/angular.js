var AngularController = Loc.require('app/controllers/angular');

var express = require('express');
var router = express.Router();

router.get('/demo', AngularController.renderDemo);

module.exports = router;
