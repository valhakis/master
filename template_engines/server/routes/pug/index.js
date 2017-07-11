module.exports = function(Loc) {
  var express = require('express');
  var pug = require('pug');

  var router = express.Router();

  router.use(Loc.render);

  router.get('/', function(req, res) {
    res.render('views/pug/index.html', {
      title: 'sample title'
    });
  });

  router.get('/sample', function(req, res) {
    const template = pug.compileFile(Loc.root('views/pug/sample.pug'));
    res.end(template({
      name: 'Viktor'
    }));
  });

  return router;
};
