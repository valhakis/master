console.log(`DEVELOPMENT SERVER HAS STARTED`);
var spawn = require('child_process').spawn;

spawn('nodemon', [], {
  stdio: 'inherit',
  cwd: App.root('server')
});
