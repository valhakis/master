var express = require('express');
var router = express.Router();

var AuthController = require('./auth.controller');

router.post('/login', AuthController.LogUserIn);

module.exports = router;
