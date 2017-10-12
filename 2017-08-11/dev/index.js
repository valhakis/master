console.log(`DEVELOPMENT SERVER HAS STARTED`);
var watch = require('node-watch');
var spawn = require('child_process').spawn;
var path = require('path');
var fs = require('fs');
var bs = require('browser-sync').create();

global.App = require('../../share/App').initialize(path.join(__dirname, '..'));

var env = App.masterRequire('env');

var server = App.require('server');

server.watch = [

];

var nodemon = {
	ignore: [
		App.root("server/app/mysql/main.js")
	],
	watch: [
	]
};

fs.writeFileSync(App.root('server/nodemon.json'), JSON.stringify(nodemon, ' ', 2), 'utf-8');

spawn('nodemon', ['.', 'start'], {
  stdio: 'inherit',
  cwd: App.root('server')
});

bs.init({
  port: '3000',
  proxy: `${server.host}:${server.port}`,
  open: false
});

bs.watch([
  App.root('server/app/todo/*.html'),
  App.root('server/app/home/*.html'),
  App.root('server/app/mysql/*.html'),
  App.root('server/app/mysql/{main}.js'),
]).on('change', bs.reload);

bs.watch([
  App.root('app/*.c')
], function() {
  spawn('make', [], {
    stdio: 'inherit',
    cwd: App.root('app')
  });
});
