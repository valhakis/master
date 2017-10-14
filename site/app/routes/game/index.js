var GameController = Loc.require('app/controllers/game');
var express = require('express');
var router = express.Router();

router.get('/', GameController.renderIndex);

module.exports = router;
