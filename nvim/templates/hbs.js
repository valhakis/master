var hbs = require('hbs');
var hbsutils = require('hbs-utils')(hbs);

hbsutils.registerPartials(path.join(__dirname, 'views', 'partials'));
hbsutils.registerWatchedPartials(path.join(__dirname, 'views', 'partials'), {
  onchange: function() {
    fs.writeFile('tmp.txt', 'content', function(err){
      if (err) throw err;
    });
  }
});

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs');
