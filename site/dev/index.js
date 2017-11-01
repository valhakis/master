// THE DEVELOPMENT SERVER
console.log('DEVELOPMENT SERVER STARTED');

var spawn = require('child_process').spawn;

spawn('mongod', ['--dbpath', 'C:\\tmp'], {
  stdio: 'inherit'
});

var srv = spawn('nodemon.cmd', ['-q', '.'], {
  cwd: __dirname + '/../server',
  stdio: 'inherit'
});
