var ImageController = Loc.require('app/controllers/image');

var express = require('express');
var router = express.Router();

router.get('/', ImageController.index);
router.post('/store', ImageController.store);
router.get('/:imageId', ImageController.show);

module.exports = router;
