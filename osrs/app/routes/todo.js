var TodoController = Loc.require('controllers/todo');

var express = require('express');
var router = express.Router();

router.get('/', TodoController.index);

module.exports = router;
