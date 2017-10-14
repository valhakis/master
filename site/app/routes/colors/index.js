var ColorController = Loc.require('app/controllers/color');
var express = require('express');
var router = express();

router.set('views', Loc.root('views'));
router.locals.basedir = Loc.root('views');
router.set('view engine', 'pug');

router.get('/', ColorController.renderIndex);

module.exports = router;
