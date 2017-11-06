var express = require('express');
var router = module.exports = express.Router();

router.use(function(req, res, next) {
  res.status(404).send('OPENGL 404');
});
