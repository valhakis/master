var Post = Loc.require('models/post');

exports.index = function(req, res) {
  Post.find({}).then(posts => {
    res.send(posts);
  });
};

exports.store = function(req, res) {
  Post.create({
    title: req.body.title,
    body: req.body.body,
  }).then(post => {
    res.send(post);
  });
};

exports.delete = function(req, res) {
  Post.remove({_id: req.params.postId}).then(() => {
    res.send({success: 'ok'});
  });
};
