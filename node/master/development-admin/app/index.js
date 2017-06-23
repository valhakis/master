const express = require('express');
const app = express();

DevAdmin.require('app/app.config')(app);
DevAdmin.require('app/app.middleware')(app);
DevAdmin.require('routes')(app);

module.exports = app;
