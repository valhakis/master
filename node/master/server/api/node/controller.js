var Node = GET.require('models/node');

exports.findAll = function(req, res) {
  Node.find({}).exec(function(err, nodes) {
    if (err) return res.status(500).send(err);
    res.send(nodes);
  });
};

exports.create = function(req, res) {
  Node.create(req.body, function(err, node) {
    if (err) return res.status(500).send(err);
    res.send(node);
  });
};
