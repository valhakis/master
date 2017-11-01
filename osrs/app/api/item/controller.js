var Item = Loc.require('models/item');

exports.index = function(req, res) {
  Item.find({}).exec().then(items => {
    res.send(items);
  });
};

exports.store = function(req, res) {
  Item.create({
    name: req.body.name
  }).then(item => {
    res.send(item);
  })
};
