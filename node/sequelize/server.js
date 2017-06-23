var http = require('http');
var fs = require('fs');
var sio = require('socket.io');
var mu = require('mu2');
var Sequelize = require('sequelize');
var sequelize = new Sequelize({ dialect: 'sqlite', storage: 'db.sqlite', logging: false });

var Post = sequelize.define('post', {
  title: Sequelize.STRING,
  content: Sequelize.STRING
});

Post.sync(/* { force: true } */).then(() => {
  Post.findAll().then(posts => {
    // console.log(JSON.stringify(posts, ' ', 4));
  });
});

var app = function(req, res) {
  mu.clearCache();

  switch (req.url) {
    case '/index.js':
      res.setHeader('Content-Type', 'text/javascript');
      fs.createReadStream('index.js').pipe(res);
      break;
    case '/index.css':
      res.setHeader('Content-Type', 'text/css');
      fs.createReadStream('index.css').pipe(res);
      break;
    case '/angular.js':
      res.setHeader('Content-Type', 'text/javascript');
      fs.createReadStream('angular.js').pipe(res);
      break;
    case '/socket.io.js':
      res.setHeader('Content-Type', 'text/javascript');
      fs.createReadStream('socket.io.min.js').pipe(res);
      break;
    case '/addpost':
      req.on('data', function(data) {
        var post = JSON.parse(data.toString());
        console.log(post);
      });
      req.on('end', function() {

      });
      break;
    default:
      Post.findAll().then(posts => {
        mu.compileAndRender('index.mu', {posts: posts}).pipe(res);
      });
      break;
  }
};

var server = http.createServer(app);

var io = sio(server);

io.on('connection', function(socket) {
  Post.findAll().then(posts => {
    socket.emit('posts', posts);
    socket.emit('initialize', {
      posts: posts
    });
  });
  socket.broadcast.emit('welcome');
  console.log('USER CONNECTED');
  socket.on('disconnect', function() {
    console.log('USER DISCONNECTED');
  });
  socket.on('addpost', function(post) {
    Post.create(post).then(function(post) {
      console.log('CREATED: ', JSON.stringify(post));
    });
    console.log('POST: ', post);
  });
});

var port = '4000';
var host = 'localhost';

sequelize.sync().then(() => {
  server.listen(port, host, function() {
    console.log(`Server is running at http://${host}:${port}.`);
  });
});
