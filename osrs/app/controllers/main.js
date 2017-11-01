exports.index = function(req, res) {
  res.render('index');
};

exports.M404 = function(req, res) {

  res.locals.data = {
    method: req.method,
    path: req.path,
    url: req.url,
    originalUrl: req.originalUrl,
  };

  res.status(404).render('404');
};
