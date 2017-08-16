var http = require('http');
var path = require('path');
var express = require('express');
var bs = require('browser-sync').create();
var fs = require('fs');
var watch = require('node-watch');

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
		App.masterRoot("W3/app"),
		App.masterRoot("mongo/app"),
	],
	ignore: [
	]
};
fs.writeFileSync(App.masterRoot("server/nodemon.json"), JSON.stringify(nodemon, ' ', 2), 'utf-8');

var server = {
	host: App.masterRequire('server/config').host,
	port: App.masterRequire('server/config').port,
};

spawn('nodemon', ['--exec', 'babel-node', '--presets', 'es2015,stage-2', '.'], {
	cwd: App.masterRoot('server'),
	stdio: 'inherit'
});

bs.init({
	port: '3000',
	proxy: `${server.host}:${server.port}`,
	open: false
});

bs.watch([
	App.masterRoot('todo/public/*.{html,js}'),
	App.masterRoot('server/views/*.{pug,html}'),
	App.masterRoot('rest/public/*.{html}'),
	App.masterRoot('W3/public/**/*.{html,js,css}'),
	App.masterRoot('2017-08-15/**/*.{html,js,css}'),
	App.masterRoot('mongo/{pub,dist}/**/*.{html,js,css}'),
]).on('change', bs.reload);

console.log('DEVELOPMENT SERVER HAS STARTED');

app.listen(config.port, config.host, function() {
	console.log(`Development server is at ${config.host}:${config.port}.`);
});
