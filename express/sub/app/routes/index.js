var express = require('express');
var router = express.Router();

var Author = Loc.require('models/author');
var Story = Loc.require('models/story');

router.use('/posts', require('./posts'));

/* GET home page. */
router.get('/', function(req, res, next) {
  Story.find({ title: 'Viktors first story' }).populate('author').exec(function(err, stories) {
    if (err) {
      res.locals.error = 'Failed to fetch stories';
    } else {
      res.locals.stories = stories;
    }
    res.render('index', { title: 'Express' });
  });
});


router.get('/api/authors', function(req, res) {
  Author.find({}, function(err, authors) {
    if (err) {
      next(new Error(err));
    } else {
      res.send(authors);
    }
  });
});

router.get('/api/stories', function(req, res) {
  Story.find({}, function(err, stories) {
    if (err) {
      next(new Error(err));
    } else {
      res.send(stories);
    }
  });
});

module.exports = router;
