var Document = GET.require('models/document.model');
var Todo = GET.require('models/todo.model');

exports.renderIndex = function(req, res) {
   res.render('server/index', {
   });
};

exports.renderAbout = function(req, res) {
   res.render('server/about', {

   });
};

exports.middleware = function(req, res, next) {
   Document.find({}, function(err, documents) {
      Todo.find({}, function(err, todos) {
         if (err) return res.send(err);

         res.locals.documents = documents;
         res.locals.todos = todos;

         res.locals.server = function(path) {
            return `href="/${path}", class=""`;
         };
         res.locals.test = function() {
            return 'example';
         };
         res.locals.server_link = function(path) {
            return `p WHAT IS THIS`;
         };
         res.locals.path = req.path;
         // console.log(req.originalUrl);
         next();
      });
   });
};

exports.renderDocument = function(req, res) {
   Document.findOne({
      _id: req.params.documentId
   })
      .populate('todos')
      .exec(function(err, document) {
         if (err) return res.send(err);
         res.render('server/document', {
            document: document
         });
      });
   /*
   Document.findOne({
      _id: req.params.documentId
   }, function(err, document) {
      if (err) return res.send(err);
      res.render('server/document', {
         document: document
      });
   });
   */
};

exports.renderRoutes = function(req, res) {
   res.render('server/routes');
};
