var fs = require('fs');
var hbs = require('handlebars');
var bcrypt = require('bcryptjs');
var User = App.require('mongo-api/user');

var render = function(path, res) {
	var source = fs.readFileSync(App.root('server/views/') + path, 'utf-8');
	res.end(hbs.compile(source)(res.locals));
};

exports.GET = {
	index: function(req, res) {
		render('index.hbs', res);
	},
	chat: function(req, res) {
		render('chat.hbs', res);
	}
};

exports.POST = {

};
