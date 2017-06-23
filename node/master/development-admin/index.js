require('./globals');

const http = require('http');

const config = App.rootRequire('config');

const host = config['development-admin'].host;
const port = config['development-admin'].port;

const app = DevAdmin.require('app');

const server = http.createServer(app);
DevAdmin.require('socket')(server);

server.listen(port, host, function() {
   console.log(`Development Admin [server]: ${host}:${port}.`);
});
