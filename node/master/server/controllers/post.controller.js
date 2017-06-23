var Post = GET.require('models/post.model');

exports.renderIndex = function(req, res) {
   res.render('post/index');
};

exports.renderNew = function(req, res) {
   res.render('post/new');
};

exports.renderList = function(req, res) {
   Post.find({}).exec().then(function(posts) {
      res.render('post/list', {
         posts: posts
      });
   }).catch(function(err) {
      res.send(err);
   });
};

exports.create= function(req, res) {
   Post.create({
      title: req.body.title,
      body: req.body.body
   }).then(function(post) {
      if (req.body.__redirect) {
         return res.redirect(req.body.__redirect);
      } 
      res.send(post);
   }).catch(function(err) {
      res.send(err);
   });
};
