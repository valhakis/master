var Game = Loc.require('app/models/game');

exports.index = function(req, res) {
  Game.find({}).populate('author').sort({createdAt: -1}).exec().then(games => {
    res.locals.games = games;
    res.render('games/index');
  });
};

exports.store = function(req, res) {
  Game.create({
    name: req.body.name,
    author: req.user._id,
  }).then(game => {
    res.redirect(`/site/games/${game._id}`);
  });
};

exports.show = function(req, res) {
  Game.findOne({_id: req.params.gameId}).exec().then(game => {
    res.locals.game = game;
    res.render('games/show');
  });
};
