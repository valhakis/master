var TutorialController = Loc.require('app/controllers/tutorial');

var express = require('express');
var router = express.Router();

router.get('/', TutorialController.renderIndex);
router.get('/create', TutorialController.renderCreate);

module.exports = router;
