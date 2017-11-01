var D3Controller = Loc.require('app/controllers/d3');
var express = require('express');
var router = express.Router();

router.get('/', D3Controller.renderIndex);

module.exports = router;
