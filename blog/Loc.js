var Loc = {};

var fs = require('fs');
var handlebars = require('handlebars');
var root = App.masterRoot('blog');

var loadTemplate = function(path) {
  var source = fs.readFileSync(Loc.root(`views/${path}`), 'utf-8');
  var template = handlebars.compile(source);
  return template;
};

handlebars.registerHelper('link', function(text, url) {
	text = handlebars.Utils.escapeExpression(text);
	url = handlebars.Utils.escapeExpression(url);

	var result = `<a href="${url}">${text}</a>`;

	return new handlebars.SafeString(result);
});

handlebars.registerHelper('list', function(items, options) {
	var out = '<ul>';

	items.forEach(function(item) {
		out += `<li>${options.fn(item)}</li>`;
	});

	return out + '</ul>';
});

handlebars.registerPartial('navbar', function(data) {
  return loadTemplate('partials/navbar.hbs')(data);
});

handlebars.registerPartial('head', function(data) {
  return loadTemplate('partials/head.hbs')(data);
});

handlebars.registerPartial('foot', function(data) {
  return loadTemplate('partials/foot.hbs')(data);
});

handlebars.registerPartial('extends', function(path) {
	var source = fs.readFileSync(Loc.root(`views/layouts/${path}`), 'utf-8');
	var template = handlebars.compile(source);
	return template();
	// console.log(path);
	//return 'okei';
  // return loadTemplate('partials/foot.hbs')(data);
});

Loc.render = function(req, res, next) {

  res.render = function(path, data, helpers) {
	  var source = fs.readFileSync(Loc.root(`views/${path}`), 'utf-8');
	  //console.log(source);
		
  	//var source;
		//if (data.layout) {
			//source = fs.readFileSync(Loc.root(`views/layouts/${data.layout}`), 'utf-8');
		//}
		var template = handlebars.compile(source);

		res.end(template(data ? data : {}, helpers));
	};

	next();
};

Loc.root = function(name) {
	return root + '/' + name;
};

Loc.require = function(name) {
	return require(root + '/' + name);
};

module.exports = Loc;
