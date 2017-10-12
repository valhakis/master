var express = require('express');
var path = require('path');
var scraperjs = require('scraperjs');

/*
var getEvents = function() {
	return scraperjs.StaticScraper.create("https://news.ycombinator.com/")
		.scrape(function($) {
			return $(".title a").map(function() {
				return $(this).html();
			}).get();
		}).then(function(data) {
			return new Promise(function(resolve) {
				resolve(data);
			});
			// return eventsClean;
			// console.log(data);
		});
};

getEvents().then(function(data) {
	console.log(data);
});
*/

// scraperjs
// phantomjs

var app = express();
var router = new scraperjs.Router();
var _root = path.join(__dirname, '..');

router.otherwise(function(url) {
	console.log(`URL: ${url} could not be routed.`);
});

app.get('/news', function(req, res) {
	scraperjs.StaticScraper.create('https://news.ycombinator.com/')
		.scrape(function($) {
			return $(".title a").map(function() {
				return $(this).text();
			}).get();
		})
		.then(function(news) {
			res.send(news);
		});
});

app.use(express.static(_root + '/public'));

module.exports = app;
