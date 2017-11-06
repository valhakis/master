var main = Loc.require('shared/main');

exports.render_single = function(req, res) {
  main.render('posts/single', req, res);
};
