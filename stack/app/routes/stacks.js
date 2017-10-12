var loc = Loc['stack'];

var stack = loc.require('app/controllers/stack');
var express = require('express');
var router = express.Router();

router.get('/', stack.index);
router.get('/create', stack.create);
router.post('/store', stack.store);
router.get('/create/table', stack.createTable);
router.get('/drop/table', stack.dropTable);
router.get('/:id', stack.show);

module.exports = router;
