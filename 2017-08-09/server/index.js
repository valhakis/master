var path = require('path');
var express = require('express');

var App = require('../../share/App').initialize(path.join(__dirname, '..'));

var Main = App.masterRequire('share/Main');
var env = App.masterRequire('env');

var challenge = {
  differenceInSeconds: 0,
  intervalId: null,
  length: 30 * 60,
  startedAt: null,
  started: false,
  finishedAt: false,
  minutes: 0,
  seconds: 0
};

challenge.update = function() {
  var difference = Date.now() - this.startedAt;
  this.differenceInSeconds = Math.floor(Math.abs(difference / 1000));

  if (this.differenceInSeconds > this.length) {
    clearInterval(this.intervalId);
    this.finishedAt = Date.now();

    console.log(`Finished at: ${new Date(this.finishedAt)}`);
  }

  var seconds = this.length - this.differenceInSeconds

  var m = Math.floor(seconds / 60);
  var s = seconds % 60;

  this.minutes = m;
  this.seconds = s;

  console.log(seconds, m, s);


  // var seconds = this.differenceInSeconds;
  // var minutes = this.differenceInSeconds / 60;
  // console.log(this.length - seconds, minutes);
};

challenge.start = function() {
  if (this.started == true) {
    console.log('Challenge already started.');
    return;
  }
  this.startedAt = Date.now();
  this.started = true;
  this.intervalId = setInterval(this.update.bind(this), 1000);
};

Main.createServer('80', env.host, function(app, server) {
  app.use(express.static(App.masterRoot('node_modules')));
  app.get('/', function(req, res) {
    res.sendFile(App.root('public/index.html'));
  });
  app.get('/script.js', function(req, res) {
    res.sendFile(App.root('public/script.js'));
  });
  app.get('/start', function(req, res) {
    challenge.start();
    res.send(`challenge has been started at ${challenge.startedAt}.`);
  });
  app.get('/startedAt', function(req, res) {
    res.send({
      startedAt: challenge.startedAt
    });
  });
  app.get('/remaining', function(req, res) {
    res.send({
      remaining: `${challenge.minutes}:${challenge.seconds}`
    });
  });
});
