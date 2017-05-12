module.exports = function(app) {
   app.use('/api', GET.require('api/api.routes'));
   require('./main.routes')(app);
   require('./auth.routes')(app);
   require('./user.routes')(app);
   require('./dashboard.routes')(app);
};
