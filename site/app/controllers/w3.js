exports.renderIndex = function(req, res) {
  res.render('w3/index');
};

exports.renderDemo = function(req, res) {
  res.locals.layout = '';
  res.render('w3/demo');
};

exports.renderDemo2 = function(req, res) {
  res.locals.layout = '';
  res.render('w3/demo-2');
};

exports.renderDemo3 = function(req, res) {
  res.locals.layout = '';
  res.render('w3/demo-3');
};

exports.renderStatic = function(req, res) {
  res.locals.layout = '';
  res.render('w3/static');
};
