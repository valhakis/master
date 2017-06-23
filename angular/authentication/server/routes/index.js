module.exports = function(app) {
   app.use('/api', GET.require('api')(app));

   require('./main.routes')(app);
   require('./auth.routes')(app);
   require('./user.routes')(app);
   require('./dashboard.routes')(app);
};
