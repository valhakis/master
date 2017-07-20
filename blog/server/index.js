var Loc = App.masterRequire('blog/Loc');
var fs = require('fs');
var express = require('express');
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');

var hbs = expressHandlebars.create({
	extname: 'hbs',
	layoutsDir: Loc.root('layouts'),
	defaultLayout: 'main',
	partialsDir: [
		Loc.root('partials')
	]
});

var app = express();

app.set('views', Loc.root('views'));
app.set('layouts', Loc.root('views/layouts'));
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(Loc.root('public')));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/create', function(req, res) {
	res.render('create');
});

module.exports = {
	app: app
};
