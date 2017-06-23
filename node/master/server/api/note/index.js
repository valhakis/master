var Note = GET.require('models/note');

var controller = {};

module.exports = function (app) {
   app.post('/api/notes', controller.create);
   app.get('/api/notes', controller.findAll);
   app.put('/api/notes/:noteId', controller.update);
   app.get('/api/notes/:noteId', controller.single);
   app.delete('/api/notes/:noteId', controller.remove);
};

controller.single = function(req, res) {
   Note.findOne({_id: req.params.noteId}, function(err, note) {
      if (err) return res.send(err);
      res.send(note);
   });
};

controller.update = function(req, res) {
   Note.findByIdAndUpdate(req.params.noteId, req.body, {new: true}, function(err, note) {
      if (err) return res.status(404).send(err);
      res.send(note);
   });
};

controller.findAll = function(req, res) {
   var result;
   if (req.query.removed) {
      result = { $ne: null };
   } else {
      result = null;
   }

   Note.find({
      removedAt: result
   }, function(err, notes) {
      if (err) return res.status(404).send(err);
      res.send(notes);
   });
};

controller.create = function(req, res) {
   Note.create({
      title: req.body.title,
      content: req.body.content
   }, function(err, note) {
      if (err) return res.send(err);
      res.send(note);
   });
};

controller.remove = function(req, res) {
   if (req.query.destroy) {
      Note.findOneAndRemove({_id: req.params.noteId}, function(err, note) {
         if (err) return res.send(err);
         res.send(note);
      });
   } else {
      Note.findOneAndUpdate({
         _id: req.params.noteId 
      }, {
         $set: {
            removedAt: new Date()
         }
      }, function(err, note) {
         if (err) return res.send(err);
         res.send(note);
      });
   }
};
