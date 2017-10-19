var GalleryController = Loc.require('app/controllers/gallery');

var express = require('express');
var router = express.Router();

router.get('/', GalleryController.index);

module.exports = router;
