var UserController = Loc.require('app/controllers/user');
var express = require('express');
var router = express.Router();

router.get('/', UserController.renderIndex);
router.get('/login', UserController.renderLogin);
router.get('/register', UserController.renderRegister);
router.post('/login', UserController.doLogin);
router.post('/register', UserController.doRegister);
router.post('/setPassword', UserController.setPassword);
router.post('/setName', UserController.setName);
router.get('/:userId', UserController.renderShow);

module.exports = router;
