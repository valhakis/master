var express = require('express');
var router = express.Router();
var PostController = Loc.require('controllers/post');

router.get('/', PostController.index);

module.exports = router;
