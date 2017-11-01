var Box = Loc.require('app/models/box');

exports.show = function(req, res) {
  Box.findOne({_id: req.params.boxId}).populate('author').exec().then(box => {
    res.locals.box = box;
    res.render('boxen/show');
  });
};

exports.index = function(req, res) {
  Box.find({}).sort({createdAt: -1}).populate('author').exec().then(boxen => {
    res.locals.boxen = boxen;
    res.render('boxen/index');
  });
};

exports.store = function(req, res) {
  Box.create({
    title: req.body.title,
    author: req.user._id,
    files: {
      html: '',
      javascript: '',
      css: ''
    }
  }).then(box => {
    res.redirect(`/site/boxen/${box._id}`);
  });
};

exports.save = function(req, res) {
  Box.update({
    _id: req.params.boxId
  }, {
    $set: {
      'files.html': req.body.html,
      'files.javascript': req.body.javascript,
      'files.css': req.body.css,
    }
  }).exec().then(box => {
    res.send(box);
  });
};
