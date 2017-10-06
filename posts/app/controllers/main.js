exports.index = function(req, res) {
  res.locals.layout = 'main';
  res.render('home');
};
