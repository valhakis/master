var http = require('http');
var path = require('path');
var express = require('express');
var bs = require('browser-sync').create();
var fs = require('fs');
var watch = require('node-watch');
var sass = require('node-sass');

global.App = require('../share/App.js').initialize(path.join(__dirname));

var spawn = require('child_process').spawn;
var env = App.masterRequire('env');
var config = require('./config');
var app = require('./app');

fs.writeFileSync(__dirname + '/nodemon.json', JSON.stringify({
  watch: [
    __dirname,
    App.masterRoot("mongo/dev")
  ],
  ignore: [
    "nodemon.json"
  ]
}, ' ', 2), 'utf-8');

watch(__dirname + '/nodemon.json', function() {
  console.log("DEVSERVER: nodemon.json has been changed.");
});

var nodemon = {
  watch: [
    App.masterRoot("server"),
    App.masterRoot("rest/app"),
    App.masterRoot("mongodb/app"),
    App.masterRoot("opengl/app"),
    App.masterRoot("todo/app"),
    App.masterRoot("share"),
    App.masterRoot("W3/app"),
    App.masterRoot("mongo/app"),
    App.masterRoot("mysql/app"),
    App.masterRoot("bootstrap/app"),
    App.masterRoot("canvas/app"),
    App.masterRoot("codemirror/app"),
    App.masterRoot("pug/app"),
    App.masterRoot("tmux/app"),
    App.masterRoot("code/app"),
    App.masterRoot("site/app"),
    App.masterRoot("2017-08-19/app"),
    App.masterRoot("sqlite/app"),
    App.masterRoot("current/app"),
    App.masterRoot("node/app"),
    App.masterRoot("stack/app"),
    App.masterRoot("express/app"),
    App.masterRoot("game/dev"),
    App.masterRoot("mustache/app"),
    App.masterRoot("standard/app"),
    App.masterRoot("2017-09-05/app"),
    App.masterRoot("posts/app"),
    App.masterRoot("demo/app"),
    App.masterRoot("demo-2/app"),
    App.masterRoot("demo-3/app"),
    App.masterRoot("excel/app"),
    App.masterRoot("angular/app"),
    App.masterRoot("prism/app"),
    App.masterRoot("express/sub/app"),
    App.masterRoot("regular-expressions/app"),
  ],
  ignore: [
  ]
};
fs.writeFileSync(App.masterRoot("server/nodemon.json"), JSON.stringify(nodemon, ' ', 2), 'utf-8');

var server = {
  host: App.masterRequire('server/config').host,
  port: App.masterRequire('server/config').port,
};

// spawn('nodemon', ['--exec', 'babel-node', '--presets', 'es2015,stage-2', '.'], {
spawn('nodemon', ['.'], {
  cwd: App.masterRoot('server'),
  stdio: 'inherit'
});

bs.init({
  port: env.bs.port,
  host: env.host,
  proxy: `${server.host}:${server.port}`,
  open: false,
  ui: false,
  logLevel: "info", // 'info' 'silent' 'debug'
  logConnections: true,
  logFileChanges: true,
  logSnippet: true,
  notify: false,
  reloadOnRestart: true,
  snippetOptions: {
    rule: {
      match: /^/i,
      fn: function (snippet, match) {
        // console.log('MATCH');
        return snippet + match;
      }
    }
  },
  online: false,
  /*
  files: [
    {
      match: [App.masterRoot('php/*.php')],
      fn: function(event, file) {
        console.log(`PHP FILE CHANGED '${file.slice(App.masterRoot('').length)}'.`);
      }
    }
  ]
  */
});

bs.watch([
  App.masterRoot('server/views/*.{pug,html,hbs}'),
  App.masterRoot('rest/{public,views}/**/*.{html,css,js,mst,hbs}'),
  App.masterRoot('W3/public/**/*.{html,js,css}'),
  App.masterRoot('2017-08-15/**/*.{html,js,css}'),
  App.masterRoot('mongo/{pub,dist}/**/*.{html,js,css}'),
  App.masterRoot('2017-08-19/public/**/*.{html,js,css}'),
  App.masterRoot('2017-08-22/public/**/*.{html,js,css}'),
  App.masterRoot('lib/**/*.{html,js,css}'),
  App.masterRoot('public/**/*.{html,js,css}'),
  App.masterRoot('sqlite/public/**/*.{html,js,css}'),
  App.masterRoot('current/public/**/*.{html,js,css}'),
  App.masterRoot('game/public/**/*.{html,js,css}'),
  App.masterRoot('2017-09-05/public/**/*.{html,js,css}'),
  App.masterRoot('php/**/*.{twig,html,php,js,css}'),
  // App.masterRoot('php/database/**/*.{html,php,js,css}'),
  // App.masterRoot('php/blog/{app,public,routes,resources}/**/*.{html,php,js,css}'),
  App.masterRoot('lib/**/*.{html,js,css}'),
  App.masterRoot('css/**/*.css'),
  App.masterRoot('current/public/**/*.{html,js,css}'),
  App.masterRoot('code/public/**/*.{html,js,css}'),
  App.masterRoot('mustache/{public,views,partials}/**/*.{html,js,css,mst}'),
  App.masterRoot('mongodb/{public,views,partials}/**/*.{html,js,css,mst}'),
  App.masterRoot('opengl/{public,views,partials}/**/*.{html,js,css,mst,hbs}'),
  App.masterRoot('prism/{public,views,partials}/**/*.{html,js,css,mst}'),
  App.masterRoot('node/{public,views,partials}/**/*.{html,js,css,mst}'),
  App.masterRoot('standard/{public,views,partials}/**/*.{html,js,css,mst}'),
  App.masterRoot('laravel/{app,routes,public,resources}/**/*.{html,js,css,mst,php}'),
  App.masterRoot('bootstrap/{public,views}/**/*.{html,js,css,mst,hbs}'),
  App.masterRoot('demo/{public,views}/**/*.{html,js,css,mst,hbs}'),
  App.masterRoot('express/{public,views}/**/*.{html,js,css,mst,hbs,pug,jade}'),
  App.masterRoot('canvas/{public,views}/**/*.{html,js,css,mst,hbs,pug,jade}'),
  App.masterRoot('site/{public,views}/**/*.{html,js,css,mst,hbs,pug,jade}'),
  App.masterRoot('express/sub/app/{views,public}/**/*.{html,js,css,mst,hbs,pug,jade}'),
  App.masterRoot('pug/{public,views}/**/*.{html,js,css,mst,hbs,pug,jade}'),
  App.masterRoot('posts/{public,views}/**/*.{html,js,css,mst,hbs,pug,jade}'),
  App.masterRoot('tmux/{public,views}/**/*.{html,js,css,mst,hbs,pug,jade}'),
  App.masterRoot('demo-2/{public,views}/**/*.{html,js,css,mst,hbs}'),
  App.masterRoot('demo-3/{public,views}/**/*.{html,js,css,mst,hbs,pug}'),
  App.masterRoot('sim/{public,views}/**/*.{html,js,css,mst,hbs,pug}'),
  App.masterRoot('excel/{public,views}/**/*.{html,js,css,mst,hbs,pug}'),
  App.masterRoot('todo/{public,views}/**/*.{html,js,css,mst,hbs}'),
  App.masterRoot('angular/{public,views}/**/*.{html,js,css,mst,hbs}'),
  App.masterRoot('codemirror/{public,views}/**/*.{html,js,css,mst,hbs}'),
  App.masterRoot('mysql/{public,views}/**/*.{html,js,css,mst,hbs}'),
  App.masterRoot('stack/{public,views}/**/*.{html,js,css,mst,hbs}'),
  App.masterRoot('regular-expressions/public/**/*.{html,css,js}'),
]).on('change', function() {
  bs.reload();
});

bs.watch([
  App.masterRoot('sass/**/*.scss')
], function() {
  sass.render({
    file: App.masterRoot('sass/main.scss'),
    outFile: App.masterRoot('public/main.dist.css')
  }, function(error, result) {
    if (error) {
      console.log(error);
    } else {
      fs.writeFile(App.masterRoot('public/main.dist.css'), result.css, function(error) {
        if (error) {
          console.log(error);
        }
      });
    }
  });
  console.log('SASS CHANGED');
})

console.log('DEVELOPMENT SERVER HAS STARTED');

app.listen(config.port, config.host, function() {
  console.log(`Development server is at ${config.host}:${config.port}.`);
});

// STARTS LARAVEL ASSET WATCHING

/*
spawn('npm', ['run', 'watch'], {
  stdio: 'inherit',
  cwd: App.masterRoot('laravel')
});
*/
