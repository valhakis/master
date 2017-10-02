module.exports = function() {
  var fs = require('fs');
  var Post = Loc['rest'].require('app/models/post');
  var Handlebars = require('handlebars');
  var layouts = require('handlebars-layouts');
  var express = require('express');
  var router = express.Router();

  var render = function(path, req, res) {
    Handlebars.registerPartial('layout', fs.readFileSync(Loc['rest'].root('views/lay/base.hbs'), 'utf-8'));
    Handlebars.registerPartial('footer', fs.readFileSync(Loc['rest'].root('views/inc/footer.hbs'), 'utf-8'));
    Handlebars.registerPartial('navigation', fs.readFileSync(Loc['rest'].root('views/inc/navigation.hbs'), 'utf-8'));
    var source = fs.readFileSync(Loc['rest'].root(`views/${path}.hbs`), 'utf-8');
    var template = Handlebars.compile(source);
    res.end(template(res.locals));
  };

  Handlebars.registerHelper(layouts(Handlebars));

  router.get('/', function(req, res) {
    render('home', req, res);
  });

  router.get('/posts', function(req, res) {
    render('posts/index', req, res);
  });

  router.get('/posts/create', function(req, res) {
    render('posts/create', req, res);
  });

  router.post('/posts', function(req, res) {
    res.send(req.body);
  });

  router.get('/example', function(req, res) {
    var post = new Post();
    post.title = 'NEW POST TITLE';
    post.body = 'NEW POST CONTENT';
    post.save(function(err) {
      if (err) return res.send(err);
      res.send( {message: 'Post has been created.'} );
    });
  });

  router.get('/api/posts', function(req, res) {
    Post.find(function(err, posts) {
      if (err) return res.send(err);
      res.send(posts);
    });
  });

  router.get('/api/posts/:id', function(req, res) {
    Post.findById(req.params.id, function(err, post) {
      if (err) return res.send(err);
      res.send(post);
    });
  });

  return router;
};

