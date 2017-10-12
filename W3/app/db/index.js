var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var uri = 'mongodb://localhost/server';

module.exports = {
	connect: function(cb) {
		mongoose.createConnection(uri, {
			useMongoClient: true
		}).then(function(db) {
			require('./models/component')(db);
			cb(db);
		}).catch(function(err) {
			console.log(`Failed to connect to database [${uri}].`);
		});
	}
};
