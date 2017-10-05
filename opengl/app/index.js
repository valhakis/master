var path = require('path');
var express = require('express');
var hbs = require('handlebars');
var hbsLayouts = require('handlebars-layouts');

hbs.registerHelper(hbsLayouts(hbs));
// hbsLayouts.register(hbs);

Loc['opengl'] = {
  _root: path.join(__dirname, '..'),
  root: function(name) {
    return this._root + '/' + name;
  },
  render: function(path, req, res) {
    hbs.registerPartial('base', fs.readFileSync(this.root('views/lay/base.hbs'), 'utf-8'));
    hbs.registerPartial('footer', fs.readFileSync(this.root('views/inc/footer.hbs'), 'utf-8'));
    hbs.registerPartial('navigation', fs.readFileSync(this.root('views/inc/navigation.hbs'), 'utf-8'));
    var source = fs.readFileSync(this.root(`views/${path}`), 'utf-8');
    var template = hbs.compile(source);
    res.end(template());
  }
};

var spawn = require('child_process').spawn;

var io = App.masterRequire('server/socket');

var fs = require('fs');

var loc = require('./Loc');

var app = express();

app.use(App.require('server/app/controllers/auth').MID.main);

app.use('/', loc.static('public'));

require('./routes')(app);

app.get('/', function(req, res) {
  loc.render('index', req, res);
});

app.get('/chat', function(req, res) {
  loc.render('chat', req, res);
});

app.get('/source', function(req, res) {
  if (req.query.file) {
    var source = fs.readFileSync(loc.root(req.query.file), 'utf-8');
    res.end(source);
  }
});

app.get('/glfw', function(req, res) {
  loc.render('glfw/index', req, res);
});

// PROGRAM 01 ROUTES
app.get('/program-01', function(req, res) {
  loc.render('program-01/index', req, res);
});

app.get('/program-01/source', function(req, res) {
  if (req.query.file) {
    var source = fs.readFileSync(loc.root(req.query.file), 'utf-8');
    res.end(source);
  } else {
    loc.render('program-01/source', req, res);
  }
});

app.get('/program-01/make', function(req, res) {
  var handle = spawn('make', [], {
    stdio: 'inherit',
    cwd: loc.root('program-01')
  });
  handle.on('close', function(code) {
    res.send(`Make closed with code ${code}`);
  });
});

app.get('/program-01/run', function(req, res) {
  var handle = spawn('./bin/app', [], {
    stdio: 'inherit',
    cwd: loc.root('program-01')
  });
  handle.on('close', function(code) {
    res.send(`Program closed with code ${code}`);
  });
});

// PROGRAM 02 ROUTES
app.get('/program-02', function(req, res) {
  loc.render('program-02/index', req, res);
});

app.get('/program-02/source', function(req, res) {
  if (req.query.file) {
    var source = fs.readFileSync(loc.root(req.query.file), 'utf-8');
    res.end(source);
  } else {
    loc.render('program-02/source', req, res);
  }
});

app.get('/program-02/make', function(req, res) {
  var handle = spawn('make', [], {
    stdio: 'inherit',
    cwd: loc.root('program-02')
  });
  handle.on('close', function(code) {
    res.send(`Make closed with code ${code}`);
  });
});

app.get('/program-02/run', function(req, res) {
  var handle = spawn('./bin/app', [], {
    stdio: 'inherit',
    cwd: loc.root('program-02')
  });
  handle.on('close', function(code) {
    res.send(`Program closed with code ${code}`);
  });
});

// PROGRAM 03 ROUTES
app.get('/program-03', function(req, res) {
  loc.render('program-03/index', req, res);
});

app.get('/program-03/source', function(req, res) {
  loc.render('program-03/source', req, res);
});

app.get('/program-03/make', function(req, res) {
  var handle = spawn('make', [], {
    stdio: 'inherit',
    cwd: loc.root('program-03')
  });
  handle.on('close', function(code) {
    res.send(`Make closed with code ${code}`);
  });
});

app.get('/program-03/run', function(req, res) {
  var handle = spawn('./bin/app', [], {
    stdio: 'inherit',
    cwd: loc.root('program-03')
  });
  handle.on('close', function(code) {
    res.send(`Program closed with code ${code}`);
  });
});

// PROGRAM 04 ROUTES
app.get('/program-04', function(req, res) {
  loc.render('program-04/index', req, res);
});

app.get('/program-04/source', function(req, res) {
  loc.render('program-04/source', req, res);
});

app.get('/program-04/make', function(req, res) {
  var handle = spawn('make', [], {
    stdio: 'inherit',
    cwd: loc.root('program-04')
  });
  handle.on('close', function(code) {
    res.send(`Make closed with code ${code}`);
  });
});

app.get('/program-04/run', function(req, res) {
  var handle = spawn('./bin/app', [], {
    stdio: 'inherit',
    cwd: loc.root('program-04')
  });
  handle.on('close', function(code) {
    res.send(`Program closed with code ${code}`);
  });
});

module.exports = app;
