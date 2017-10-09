var Canvas = Loc.require('app/db/models/canvas');

exports.index = function(req, res) {
  Canvas.find({}, function(err, canvases) {
    if (err) {
      res.send(err);
    } else {
      res.send(canvases);
    }
  });
};
