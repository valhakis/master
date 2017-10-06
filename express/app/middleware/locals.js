module.exports = function(req, res, next) {
  res.locals.link = function(name, path) {
    return '<a href="/">link</a>'
  };
  res.locals.demo = function() {
    return '<a>WHAT A DEMO</a>';
  };
  next();
};
