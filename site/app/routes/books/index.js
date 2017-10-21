var BookController = Loc.require('app/controllers/book');
var express = require('express');
var router = express.Router();

router.get('/', BookController.renderIndex);
router.get('/create', BookController.renderCreate);
router.post('/store', BookController.store);
router.get('/:bookId', BookController.show);
router.post('/:bookId/posts/store', BookController.storePost);
router.post('/:bookId/codes/store', BookController.storeCode);

module.exports = router;
