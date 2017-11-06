var express = require('express');
var router = module.exports = express.Router();

router.use('/common', require('./common/common.router'));
