var GameController = Loc.require('app/controllers/game');
var express = require('express');
var router = express.Router();

// router.get('/', GameController.renderIndex);
router.get('/', GameController.index);
router.post('/store', GameController.store);
router.get('/:gameId', GameController.show);

module.exports = router;
