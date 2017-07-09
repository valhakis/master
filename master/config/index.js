var env = App.require('environment');

var config = {
  port: env.port || '4000',
  host: env.host || '192.168.0.3',
  'bs-port': env['bs-port'] || '3000',
  'bs-host': env['bs-host'] || '192.168.0.3',
  'app-port': env['app-port'] || '5000',
  'app-host': env['app-host'] || '192.168.0.3'
};

module.exports = config;
