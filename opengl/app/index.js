var express = require('express');
var spawn = require('child_process').spawn;

var io = App.masterRequire('server/socket');

var fs = require('fs');

var Loc = require('./Loc');

var app = express();

app.use(App.require('server/app/controllers/auth').MID.main);

app.use('/', Loc.static('public'));

app.get('/', function(req, res) {
  Loc.render('index', req, res);
});

app.get('/chat', function(req, res) {
  Loc.render('chat', req, res);
});

app.get('/source', function(req, res) {
  if (req.query.file) {
    var source = fs.readFileSync(Loc.root(req.query.file), 'utf-8');
    res.end(source);
  }
});

app.get('/glfw', function(req, res) {
  Loc.render('glfw/index', req, res);
});

// PROGRAM 01 ROUTES
app.get('/program-01', function(req, res) {
  Loc.render('program-01/index', req, res);
});

app.get('/program-01/source', function(req, res) {
  if (req.query.file) {
    var source = fs.readFileSync(Loc.root(req.query.file), 'utf-8');
    res.end(source);
  } else {
    Loc.render('program-01/source', req, res);
  }
});

app.get('/program-01/make', function(req, res) {
  var handle = spawn('make', [], {
    stdio: 'inherit',
    cwd: Loc.root('program-01')
  });
  handle.on('close', function(code) {
    res.send(`Make closed with code ${code}`);
  });
});

app.get('/program-01/run', function(req, res) {
  var handle = spawn('./bin/app', [], {
    stdio: 'inherit',
    cwd: Loc.root('program-01')
  });
  handle.on('close', function(code) {
    res.send(`Program closed with code ${code}`);
  });
});

// PROGRAM 02 ROUTES
app.get('/program-02', function(req, res) {
  Loc.render('program-02/index', req, res);
});

app.get('/program-02/source', function(req, res) {
  if (req.query.file) {
    var source = fs.readFileSync(Loc.root(req.query.file), 'utf-8');
    res.end(source);
  } else {
    Loc.render('program-02/source', req, res);
  }
});

app.get('/program-02/make', function(req, res) {
  var handle = spawn('make', [], {
    stdio: 'inherit',
    cwd: Loc.root('program-02')
  });
  handle.on('close', function(code) {
    res.send(`Make closed with code ${code}`);
  });
});

app.get('/program-02/run', function(req, res) {
  var handle = spawn('./bin/app', [], {
    stdio: 'inherit',
    cwd: Loc.root('program-02')
  });
  handle.on('close', function(code) {
    res.send(`Program closed with code ${code}`);
  });
});

// PROGRAM 03 ROUTES
app.get('/program-03', function(req, res) {
  Loc.render('program-03/index', req, res);
});

app.get('/program-03/source', function(req, res) {
  Loc.render('program-03/source', req, res);
});

app.get('/program-03/make', function(req, res) {
  var handle = spawn('make', [], {
    stdio: 'inherit',
    cwd: Loc.root('program-03')
  });
  handle.on('close', function(code) {
    res.send(`Make closed with code ${code}`);
  });
});

app.get('/program-03/run', function(req, res) {
  var handle = spawn('./bin/app', [], {
    stdio: 'inherit',
    cwd: Loc.root('program-03')
  });
  handle.on('close', function(code) {
    res.send(`Program closed with code ${code}`);
  });
});

// PROGRAM 04 ROUTES
app.get('/program-04', function(req, res) {
  Loc.render('program-04/index', req, res);
});

app.get('/program-04/source', function(req, res) {
  Loc.render('program-04/source', req, res);
});

app.get('/program-04/make', function(req, res) {
  var handle = spawn('make', [], {
    stdio: 'inherit',
    cwd: Loc.root('program-04')
  });
  handle.on('close', function(code) {
    res.send(`Make closed with code ${code}`);
  });
});

app.get('/program-04/run', function(req, res) {
  var handle = spawn('./bin/app', [], {
    stdio: 'inherit',
    cwd: Loc.root('program-04')
  });
  handle.on('close', function(code) {
    res.send(`Program closed with code ${code}`);
  });
});

module.exports = app;
