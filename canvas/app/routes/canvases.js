var CanvasController = Loc.require('app/controllers/canvas');

var express = require('express');
var router = express.Router();

router.get('/', CanvasController.index);
router.get('/removed', CanvasController.renderRemoved);
router.get('/create', CanvasController.create);
router.post('/store', CanvasController.store);
router.get('/:id', CanvasController.show);
router.get('/:id/remove', CanvasController.remove);
router.get('/:id/delete', CanvasController.delete);
router.get('/:canvasId/posts/create', CanvasController.renderCreatePost);
router.post('/:canvasId/posts/store', CanvasController.storePost);
router.get('/:canvasId/codes/create', CanvasController.renderCreateCode);
router.post('/:canvasId/codes/store', CanvasController.storeCode);

module.exports = router;
