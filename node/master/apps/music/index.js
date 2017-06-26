var express = require('express');
var fs = require('fs');
var path = require('path');
var spawn = require('child_process').spawn;
var bodyParser = require('body-parser');

var router = express.Router();
var api = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

var root = __dirname;

router.use('/api', api);
router.use(express.static(Root('public')));

api.put('/music/upload', function(req, res) {
  var hnd = spawn('youtube-dl', ['-x', '--audio-format', 'mp3', req.body.url], {
    cwd: Root('public/music')
  });

  hnd.on('close', (code) => {
    res.send(`closed with code: ${code}`);
  });
});

api.get('/music', function(req, res) {
  var files = fs.readdirSync(Root('public/music'));
  var list = [];
  files.forEach(file => {
    var ext = path.extname(file);
    var music = {
      src: `music/${file}`,
      type: `audio/mp3`
    };
    list.push(music);
  });
  res.send(list);
});

module.exports = router;

function Root(name) {
  return __dirname + '/' + name;
}
