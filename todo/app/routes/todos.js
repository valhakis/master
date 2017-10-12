var loc = Loc['todo'];

var express = require('express');
var Todo = loc.require('app/controllers/todo');
var router = express.Router();

router.get('/', Todo.index);
router.get('/create', Todo.create);
router.post('/store', Todo.store);
router.get('/createTable', Todo.createTable);
router.get('/dropTable', Todo.dropTable);
router.get('/:id', Todo.show);
router.get('/:id/posts/create', Todo.createPost);
router.post('/:id/posts/store', Todo.storePost);

module.exports = router;
