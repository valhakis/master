var TutorialController = Loc.require('app/controllers/tutorial');

var express = require('express');
var router = express.Router();

router.get('/', TutorialController.renderIndex);
router.get('/create', TutorialController.renderCreate);
router.get('/:tutorialId', TutorialController.renderShow);
router.post('/store', TutorialController.store);
router.get('/:tutorialId/posts/create', TutorialController.renderCreatePost);
router.post('/:tutorialId/posts/store', TutorialController.storePost);
router.get('/:tutorialId/codes/create', TutorialController.renderCreateCode);

module.exports = router;
