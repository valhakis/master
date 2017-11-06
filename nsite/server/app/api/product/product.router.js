var express = require('express');
var router = module.exports = express.Router();
var product_controller = require('./product.controller');

router.get('/', product_controller.index);

