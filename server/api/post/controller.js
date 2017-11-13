var Post = App.masterRequire('server/models/post');

exports.index = function(req, res) {
  Post.find({}).exec().then(posts => {
    res.status(200).send(posts);
  }).catch(err => {
    res.status(500).send(err);
  });
};

exports.store = function(req, res) {
  Post.create({
    title: req.body.title,
    body: req.body.body,
  }).then(post => {
    res.status(200).send(post);
  }).catch(err => {
    res.status(500).send(err);
  });
};
