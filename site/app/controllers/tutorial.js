var Tutorial = Loc.require('app/models/tutorial');
var Post = Loc.require('app/models/post');
var Code = Loc.require('app/models/code');

exports.renderIndex = function(req, res) {
  Tutorial.find({})
    .sort({createdAt: -1})
    .populate('author')
    .exec().then(tutorials => {
      res.locals.flashMessages = req.flash('flashMessages');
      res.locals.tutorials = tutorials;
      res.render('tutorials/index');
    }).catch(err => {
      res.locals.error = 'Failed to fetch tutorials.';
      res.locals.flashMessages = req.flash('flashMessages');
      res.render('tutorials/index');
    });
};

exports.renderCreate = function(req, res) {
  res.locals.flashMessages = req.flash('flashMessages');
  res.render('tutorials/create');
};

exports.renderShow = function(req, res) {
  Tutorial.findOne({ 
    _id: req.params.tutorialId 
  }).populate('author').populate({
    path: 'posts',
    populate: { path: 'author' }
  }).populate({
    path: 'codes',
    populate: { path: 'author' }
  }).exec().then(tutorial => {
    res.locals.tutorial = tutorial;
    res.locals.flashMessages = req.flash('flashMessages');
    res.render('tutorials/show');
  });
};

exports.store = function(req, res) {
  Tutorial.create({
    title: req.body.title,
    author: req.user._id,
  }).then((tutorial) => {
    req.flash('flashMessages', {type: 'success', message: 'Tutorial created successfully.'});
    res.redirect(`/site/tutorials/${tutorial._id}`);
  }).catch(err => {
    req.flash('flashMessages', {type: 'error', message: 'Failed to create a tutorial.'});
    res.redirect('/site/tutorials/create');
  });
};

exports.renderCreatePost = function(req, res) {
  Tutorial.findOne({_id: req.params.tutorialId}).then(tutorial => {
    res.locals.tutorial = tutorial;
    res.locals.flashMessages = req.flash('flashMessages');
    res.render('tutorials/posts/create');
  }).catch(err => {
    console.log(err);
    res.locals.flashMessages = req.flash('flashMessages');
    res.render('tutorials/posts/create');
  });
};

exports.storePost = function(req, res) {
  Tutorial.findOne({_id: req.params.tutorialId}).then(tutorial => {
    this.tutorial = tutorial;
    return Post.create({
      title: req.body.title,
      body: req.body.body,
      author: req.user._id
    });
  }).then(post => {
    this.post = post;
    this.tutorial.posts.push(this.post._id);
    return this.tutorial.save();
  }).then(() => {
    req.flash('flashMessages', {type: 'success', message: 'Post has been created.'});
    res.redirect(`/site/tutorials/${this.tutorial._id}`);
  }).catch(err => {
    req.flash('flashMessages', {type: 'error', message: 'Failed to create a post.'});
    res.redirect(`/site/tutorials/${this.tutorial._id}/posts/create`);
  });
};

exports.renderCreateCode = function(req, res) {
  Tutorial.findOne({_id: req.params.tutorialId}).exec().then(tutorial => {
    res.locals.tutorial = tutorial;
    res.render('tutorials/codes/create');
  });
};

exports.storeCode = function(req, res) {
  Code.create({
    title: req.body.title,
    body: req.body.body,
    language: req.body.language,
    author: req.user._id
  }).then(code => {
    this.code = code;
    return Tutorial.findOne({_id: req.params.tutorialId}).exec();
  }).then(tutorial => {
    this.tutorial = tutorial;
    tutorial.codes.push(this.code._id);
    return tutorial.save();
  }).then(() => {
    res.redirect(`/site/tutorials/${this.tutorial._id}`);
  });
};
