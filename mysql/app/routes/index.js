var loc = Loc['mysql'];
var mysql = require('mysql');

var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'admin',
  database : 'shared'
});

con.connect();

module.exports = function(app) {
  app.get('/', function(req, res) {
    con.query(`SELECT * FROM codes ORDER BY createdAt DESC LIMIT 5`, function(err, codes) {
      if (err) {
        res.locals.errors.push('Failed to fetch codes.');
      } else {
        res.locals.codes = codes;
      }
      loc.render('home.hbs', req, res);
    });
  });
  app.use('/codes', require('./codes'));
  app.use('/tutorials', require('./tutorials'));
};
