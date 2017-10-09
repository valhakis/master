var AuthController = Loc.require('app/controllers/auth');

var express = require('express');
var router = express.Router();

router.get('/google', AuthController.google);
router.get('/google/callback', AuthController.googleCallback);

router.get('/facebook', AuthController.facebook);
router.get('/facebook/callback', AuthController.facebookCallback);

router.get('/github', AuthController.github);
router.get('/github/callback', AuthController.githubCallback);

module.exports = router;
