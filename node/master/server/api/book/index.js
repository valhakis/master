var Book = GET.require('models/book');
var bookCtrl = new BookCtrl();

// c -> create
// r -> read
// u -> update
// d -> delete

module.exports = function(app) {
   app.get('/api/books', bookCtrl.list);
   app.post('/api/books', bookCtrl.create);
   app.delete('/api/books/:bookId', bookCtrl.remove);
};

function BookCtrl() {}

BookCtrl.prototype.create = function(req, res) {
   Book.create(req.body).then(function(book) {
      res.send(book);
   }).catch(function(err) {
      res.send(err);
   });
};

BookCtrl.prototype.list = function(req, res) {
   Book.find({removedAt: null}).exec().then(function(books) {
      res.send(books);
   }).catch(function(err) {
      res.send(err);
   });
};

BookCtrl.prototype.remove = function(req, res) {
   Book.findByIdAndUpdate(req.params.bookId, {
      $set: {
         removedAt: new Date()
      }
   }, function(err, book) {
      if (err) return res.send(err);
      res.send(book);
   });
};
