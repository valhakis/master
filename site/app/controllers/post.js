var Post = Loc.require('app/models/post');

exports.renderIndex = function(req, res) {
  Post.find({}, function(error, posts) {
    if (error) {
      res.locals.error = 'Failed to fetch posts.';
    } else {
      res.locals.posts = posts;
    }
    res.render('posts/index');
  });
};

exports.renderCreate = function(req, res) {
  res.render('posts/create');
};

exports.storePost = function(req, res) {
  var post = new Post(req.body);
  post.save(function(error) {
    if (error) {
      req.flash('errors', 'Failed to create a post.');
    } else {
      req.flash('successes', 'Post has been created.');
    }
    res.redirect('/site/posts');
  });
};

exports.renderShow = function(req, res) {
  Post.findOne({_id: req.params.postId}, function(error, post) {
    if (error) {
      res.locals.error = 'Failed to fetch post';
    } else {
      res.locals.post = post;
    }
    res.render('posts/show');
  });
};
