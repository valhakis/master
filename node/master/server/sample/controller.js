var mu = require('mu2');
var Post = require('./database').Post;

exports.renderIndex = function(req, res) {
  mu.clearCache();
  mu.compileAndRender(__dirname + '/index.mu', {}).pipe(res);
};

exports.createPost = function(req, res) {
  Post.create(req.body).then(post => {
    res.send(post);
  });
};

exports.findAllPosts = function(req, res) {
  Post.findAll().then(posts => {
    res.send(posts);
  });
};
