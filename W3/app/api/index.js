module.exports = function(db) {
	var Component = db.models.Component;
	var express = require('express');
	var router = express.Router();

	router.get('/components', function(req, res) {
		Component.find(function(err, components) {
			if (err) {
				res.send(err);
			} else {
				res.send(components);
			}
		});
	});

	router.post('/components', function(req, res) {
		var component = new Component();
		component.title = req.body.title;
		component.description = req.body.description;
		component.save(function(err) {
			if (err) {
				res.send(err);
			} else {
				res.send({
					message: "New component has been created."
				});
			}
		});
	});

	router.delete('/components/:componentId', function(req, res) {
		Component.remove({
			_id: req.params.componentId
		}, function(err, component) {
			if (err) {
				res.send(err);
			} else {
				res.send({message: 'Component has been removed sucessfully.'});
			}
		});
	});

	return router;
};
