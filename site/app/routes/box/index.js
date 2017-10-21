var BoxController = Loc.require('app/controllers/box');
var express = require('express');
var router = express.Router();

router.get('/', BoxController.index);
router.post('/store', BoxController.store);
router.get('/:boxId', BoxController.show);
router.post('/:boxId/save', BoxController.save);

module.exports = router;
