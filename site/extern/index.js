var Loc = App.masterRequire('site/local');
var Note = Loc.require('server/db').Note;
var extern = {};

extern.allNotes = function(callback) {
  Note.all(function(err, notes) {
    if (err) {
      return callback(err);
    }
    callback(null, notes);
  });
};

module.exports = extern;
