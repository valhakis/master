module.exports = function(app) {
   require('./main.routes')(app);
   app.use('/users', require('./user.routes'));
};
