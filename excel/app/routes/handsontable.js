var HandsontableController = Loc.require('app/controllers/handsontable');

var express = require('express');
var router = express.Router();

router.get('/', HandsontableController.renderIndex);

module.exports = router;
