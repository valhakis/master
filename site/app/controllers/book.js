var Book = Loc.require('app/models/book');
var Post = Loc.require('app/models/post');
var Code = Loc.require('app/models/code');

exports.renderIndex = function(req, res) {
  Book.find({}).sort({createdAt: -1}).exec().then(books => {
    res.locals.books = books;
    res.locals.layout = 'books';
    res.render('books/index');
  });
};

exports.renderCreate = function(req, res) {
  res.locals.layout = 'books';
  res.render('books/create');
};

exports.store = function(req, res) {
  console.log(req.body);
  Book.create({
    title: req.body.title,
    author: req.body.author
  }).then(book => {
    req.flash('success', 'Book has been stored.');
    res.redirect(`/site/books/${book._id}`);
  }).catch(err => {
    req.flash('error', 'There was an error when storing a book');
    res.redirect('/site/books/create');
  });
};

exports.show = function(req, res) {
  Book.findOne({_id: req.params.bookId})
  .populate('posts')
  .populate('codes')
  .exec().then(book => {
    res.locals.book = book;
    res.locals.layout = 'books';
    res.render('books/show');
  });
};

exports.storePost = function(req, res) {
  Book.findOne({_id: req.params.bookId}).then(book => {
    this.book = book;
    return Post.create({
      title: req.body.title,
      body: req.body.body,
      author: req.user._id
    });
  }).then(post => {
    this.post = post;
    this.book.posts.push(post._id);
    return this.book.save();
  }).then(() => {
    res.redirect(`/site/books/${this.book._id}`);
  }).catch(err => {
    console.log(err);
  });
};

exports.storeCode = function(req, res) {
  Book.findOne({_id: req.params.bookId}).then(book => {
    this.book = book;
    return Code.create({
      title: req.body.title,
      body: req.body.body,
      author: req.user._id,
      language: req.body.language,
    });
  }).then(code => {
    this.code = code;
    this.book.codes.push(code._id);
    return this.book.save();
  }).then(() => {
    res.redirect(`/site/books/${this.book._id}`);
  }).catch(err => {
    console.log(err);
  });
};
