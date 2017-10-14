var Post = Loc.require('app/models/post');
var User = Loc.require('app/models/user');

exports.renderIndex = function(req, res) {
  Post.find({}).populate('author').sort({
    createdAt: -1
  }).exec(function(error, posts) {
    if (error) {
      res.locals.error = 'Failed to fetch posts.';
    } else {
      res.locals.posts = posts;
    }
    res.locals.flashMessages = req.flash('flashMessages');
    res.render('posts/index');
  });
};

exports.renderCreate = function(req, res) {
  res.render('posts/create');
};

exports.storePost = function(req, res) {
  var post = new Post({
    name: req.body.name,
    title: req.body.title,
    body: req.body.body,
    author: req.user._id,
  });
  post.save().then(() => {
    return User.update({_id: req.user._id}, {$push: {posts: post._id}});
  }).then(() => {
    req.flash('flashMessages', {type: 'success', message: 'Post has been created.'});
    res.redirect('/site/posts');
  }).catch((err) => {
    console.log(err);
    req.flash('flashMessages', {type: 'error', message: 'Failed to create a post.'});
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
