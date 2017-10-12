var _root = __dirname;

exports.root = function(name) {
	if (!name) name = '';
	return _root + '/' + name;
};
