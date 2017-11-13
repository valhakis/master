var express = require('express');
var router = module.exports = express.Router();

router.get('/', function(req, res) {
  res.send('WELCOME TO API');
});

router.use('/products', require('./product/product.router'));