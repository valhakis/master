var express = require('express');
var router = express.Router();

var UserController = require('./user.controller');

router.get('/', UserController.AllUsers);
router.post('/', UserController.CreateUser);

module.exports = router;
