var express = require('express');
var router = express.Router();

router.get('/sample', (req, res) => {
  res.send('EVERYTHING IS WORKING FINE');
});

module.exports = router;
