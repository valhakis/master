var loc = Loc['todo'];

var Post = loc.require('app/controllers/post');

var express = require('express');
var router = express.Router();

router.get('/', Post.index);
router.get('/create/table', Post.createTable);
router.get('/drop/table', Post.dropTable);

module.exports = router;
