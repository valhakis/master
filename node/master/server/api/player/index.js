var controller = {};

module.exports = function(app) {
  app.get('/api/players', controller.findAll);
};

controller.findAll = function(req, res) {
  res.send([
    {
      _id: "1",
      name: "William Valhakis"
    },
    {
      _id: "2",
      name: 'Marcus Aurelius'
    }
  ]);
};
