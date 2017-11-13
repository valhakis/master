var express = require('express');
var router = module.exports = express.Router();
var controller = require('./controller');

router.get('/', controller.index);
router.post('/', controller.store);

router.get('/', function(req, res) {
  res.send('THE POSTS');
});
