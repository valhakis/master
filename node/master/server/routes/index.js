module.exports = function(app) {
   require('./post')(app);
   require('./server')(app);
   require('./person.routes')(app);
   require('./story.routes')(app);
   app.use('/api', GET.require('api/api.routes')(app));
   require('./main.routes')(app);
   require('./auth.routes')(app);
   require('./user.routes')(app);
   require('./dashboard.routes')(app);
   require('./document.routes')(app);
};
