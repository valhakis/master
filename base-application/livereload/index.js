var watch = require('node-watch');
var inject = require('connect-inject');
var fs = require('fs');

module.exports = {
  watch: [],
  initialize: function(app, io) {

    io.on('connection', function(socket) {
    });

    watch(this.watch, {recursive: true}, function(err, event) {
      io.emit('reload');
      console.log(err, event);
    });

    app.get('/lib/livereload.js', function(req, res) {
      fs.readFile(App.root('livereload/lib/livereload.js'), 'utf-8', function(err, data) {
        if (err) throw new Error(err);
        res.end(data);
      });
    });

    app.use(inject({
      snippet: '<script src="/lib/livereload.js"></script>',
      ignore: ['.js', '.svg', '.css']
    }));

  }
};
