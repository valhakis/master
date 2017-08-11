var express = require('express');
var router = express.Router();

require('./todo.routes')(router);

router.get('/', function(req, res) {
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>api</title>
      <link rel="stylesheet" href="/css/main.dist.css">
    </head>
    <body idea="api">

      <button>GET /api/todos</button>

    </body>
    </html>
  `);
});

module.exports = router;
