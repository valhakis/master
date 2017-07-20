module.exports = function(server, bs) {
	var watch = require('node-watch');
	var sass = require('node-sass');
	var fs = require('fs');

	var serverWatchList = [ ];
	var clientWatchList = [ ];
	var sassWatchList = [ ];

	serverWatchList = serverWatchList.concat(App.masterRequire('bootstrap/development')['server-watch']);
	clientWatchList = clientWatchList.concat(App.masterRequire('bootstrap/development')['client-watch']);

	serverWatchList = serverWatchList.concat(App.masterRequire('blog/development')['server-watch']);
	clientWatchList = clientWatchList.concat(App.masterRequire('blog/development')['client-watch']);

	var sassList = App.masterRequire('blog/development')['sass-watch'];
	sassList.forEach(function(item) {
		sassWatchList.push(item.in);
	});

	watch(serverWatchList, { recursive: true}, function() {
		server.restart();
	});

	watch(clientWatchList, { recursive: true}, function() {
		bs.reload();
	});

	var makeSass = function() {
		sassList.forEach(function(item) {
			sass.render({
				file: item.in,
				outFile: item.out
			}, function(err, result) {
				if (err) return console.log(err);
				fs.writeFile(item.out, result.css, function(err) {
					if (err) return console.log(err);
				});
			});
		});
	};

	watch(sassWatchList, { recursive: false}, function() {
		makeSass();
	});
};
