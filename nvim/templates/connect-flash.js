const flash = require('connect-flash');
app.use(flash());
app.get('/flash', function(req, res) {
  req.flash('info', 'flash is back');
  res.redirect('/dest');
});
app.get('/dest', function(req, res){
  res.json(req.flash('info'));
});
