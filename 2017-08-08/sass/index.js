var watch = require('node-watch');
var sass = require('node-sass');
var fs = require('fs');

var compile = function(callback) {
  sass.render({
    file: App.root('sass/main.scss'),
    // outFile: App.root('public/css/main.dist.css')
  }, function(err, result) {
    if (err) {
      return console.log(err);
    }

    fs.writeFile(App.root('public/css/main.dist.css'), result.css, function(err) {
      if (err) {
        return console.log(err);
      }

      console.log('main.dist.css has been created');
      callback();
    });
  });
};


module.exports = {
  initialize: function(app, io) {
    compile(function() {
      // io.emit('reload');
    });
    watch(App.root('sass/main.scss'), function() {
      compile(function() {
        // io.emit('reload');
      });
    });
  }
};
