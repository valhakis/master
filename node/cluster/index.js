const cluster = require('cluster');
const http = require('http');

var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running.`);

  // Fork workers.
  for (let i=0; i<numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker: ${worker.process.pid} has died.`);
  });
} else {
  // workers can share TCP connection -> 'HTTP server'

  var sum = 0;
  for (let i=0; i<100000000; i++) {
    sum += i;
  }
  console.log(`Sum is ${sum}.`);

  console.log(`Worker ${process.pid} started.`);
}
