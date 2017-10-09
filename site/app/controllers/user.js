exports.renderIndex = function(req, res) {
  res.render('users/index');
};

exports.renderLogin = function(req, res) {
  res.render('users/login');
};

exports.renderRegister = function(req, res) {
  res.render('users/register');
};

exports.doLogin = function(req, res) {
  res.send(req.body);
};

exports.doRegister = function(req, res) {
  res.send(req.body);
};
