var Image = Loc.require('app/models/image');

exports.store = function(req, res) {
  Image.create({
    url: req.body.url
  }).then(image => {
    res.redirect(`/site/images/${image._id}`);
  });
};

exports.show = function(req, res) {
  Image.findOne({_id: req.params.imageId}).exec().then(image => {
    res.locals.image = image;
    res.render('images/show');
  });
};

exports.index = function(req, res) {
  Image.find({}).sort({createdAt: -1}).exec().then(images => {
    res.locals.images = images;
    res.render('images/index');
  });
};
