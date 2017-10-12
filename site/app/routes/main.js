var MainController = Loc.require('app/controllers/main');

var express = require('express');
var router = express.Router();

router.get('/', MainController.renderIndex);
router.get('/login', MainController.renderLogin);
router.get('/register', MainController.renderRegister);
router.post('/login', MainController.doLogin);
router.get('/demo', MainController.demo);
router.get('/profile', MainController.renderProfile);
router.get('/logout', MainController.doLogout);
router.get('/profile/posts', MainController.renderProfilePosts);

module.exports = router;
