module.exports = function(db) {

	var Component = db.model('Component', {
		title: String,
		description: String
	});

	return Component;
};
