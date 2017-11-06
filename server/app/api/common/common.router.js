// /api/common

var express = require('express');
var router = module.exports = express.Router();
var controller = require('./common.controller');

router.get('/master_file', controller.master_file);

router.get('/nsite_env_return', controller.nsite_env_return);
