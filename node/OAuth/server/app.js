var express = require('express');
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var jwtAuthz = require('express-jwt-authz');

var app = express();

var jwtCheck = jwt({
   secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://valhakis.eu.auth0.com/.well-known/jwks.json'
   }),
   audience: 'https://kodu.webhop.me',
   issuer: 'https://valhakis.eu.auth0.com/',
   algorithms: ['RS256']
});

app.use(jwtCheck);

var checkScopes = jwtAuthz([ 'read:messages' ]);

app.get('/authorized', function(req, res) {
   res.send('Secured Resource.');
});

app.get('/api/private', jwtCheck, checkScopes, function(req, res) {
   res.json({
      message: "Hello from the private endpoint! You need to be authorized and have a scope of read:messages to see this."
   });
});

module.exports = app;

