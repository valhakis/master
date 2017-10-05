var loc = Loc['mysql'];

exports.index = function(req, res) {
  loc.render('tutorials/index.hbs', req, res);
};
