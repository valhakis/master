var W3Controller = Loc.require('app/controllers/w3');
var express = require('express');
var router = express.Router();

router.get('/', W3Controller.renderIndex);
router.get('/demo', W3Controller.renderDemo);
router.get('/demo-2', W3Controller.renderDemo2);
router.get('/demo-3', W3Controller.renderDemo3);
router.get('/static', W3Controller.renderStatic);

module.exports = router;
