var app = App.require('server/app');

app.use('/', App.static('public'));
app.use('/api', App.require('server/app/api'));
