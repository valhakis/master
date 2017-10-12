var fs = require('fs');
var source = fs.readFileSync(App.root('server/app/home/index.view.html'), 'utf-8');
res.end(source);
