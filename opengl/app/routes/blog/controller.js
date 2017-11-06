var main = Loc.require('shared/main');

exports.index = function(req, res) {
  main.render('blog/index', req, res);
};
