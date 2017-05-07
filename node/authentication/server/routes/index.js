module.exports = function(app) {
   require('./main.routes')(app);
   require('./auth.routes')(app);
   require('./user.routes')(app);
   require('./dashboard.routes')(app);
};
