var express = require('express');
var router = express.Router();
var ctrl = require('./controller');

// Post.sync();

module.exports = function(app) {
  require('./database');
  app.use('/sample', router);
  router.get('/', ctrl.renderIndex);
  router.post('/posts', ctrl.createPost);
  router.get('/posts', ctrl.findAllPosts);
};

