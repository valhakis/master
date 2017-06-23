var Post = GET.require('models/post.model');

exports.all = function(req, res) {
   Post.find({}, function(err, posts) {
      if (err)
         res.send(err);
      else
         res.send(posts);
   });
};

exports.create = function(req, res) {
   Post.create(req.body, function(err, post) {
      if (err)
         res.send(err);
      else
         res.send(post);
   });
};

exports.remove = function(req, res) {
   Post.remove({ _id: req.params.postId }, function(err, post) {
      if (err) 
         res.send(err);
      else
         res.send(post);
   });
};
