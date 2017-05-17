var Document = GET.require('models/document.model');
var Todo = GET.require('models/todo.model');

/* Todo
 * text: String
 * document: ref 'Document'
 */

/* Document
 * name: String
 * todos: ref 'Todo'
 */


exports.create = function(req, res) {
   // res.send("I have to create a new document.");
   console.log(req.body);

   Document.create({
      name: req.body.name
   }, function(err, document) {
      if (err) return res.send(err);

      if (req.body._redirect) {
         res.redirect(req.body._redirect);
      } else { // jshint ignore:line
         // res.send(documents); 
      }
   });

};

exports.single = function(req, res) {
   Document.findOne({
      _id: req.params.documentId
   }, function(err, document) {
      if (err) return res.send(err);
      res.render('document/single');
      res.send(document);
   });
};

exports.createTodo = function(req, res) {
   Todo.create({
      text: req.body.text,
      _document: req.params.documentId
   }, function(err, todo) {
      if (err) return res.send(err);
      res.send(todo);
   });
};
