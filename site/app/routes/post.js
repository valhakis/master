var PostController = Loc.require('app/controllers/post');

var express = require('express');
var router = express.Router();

router.get('/', PostController.renderIndex);
router.get('/create', PostController.renderCreate);
router.post('/store', PostController.storePost);
router.get('/:postId', PostController.renderShow);

module.exports = router;
