var Code = GET.require('models/code.model');

exports.all = function(req, res) {
   Code.find({removedAt: null}, function(err, codes) {
      if (err) return res.send(err);
      res.send(codes);
   });
};

exports.create = function(req, res) {
   Code.create(req.body, function(err, code) {
      if (err) return res.send(err);
      res.send(code);
   });
};

exports.latest = function(req, res) {
   Code.find({}, {}, {
      sort: {
         createdAt: -1
      },
      limit: 3
   }, function(err, codes) {
      if (err) return res.send(err);
      res.send(codes);
   });
};

exports.remove = function(req, res) {
   Code.findOneAndUpdate({
      _id: req.params.codeId 
   }, {
      $set: {
         removedAt: new Date()
      }
   }, function(err, code) {
      if (err) return res.send(err);
      res.send(code);
   });
};
