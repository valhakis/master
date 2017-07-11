const express = require('express');

module.exports = function(app) {
   app.use('/public', express.static(DevAdmin.path('root', 'public')));
   app.use('/node_modules', express.static(DevAdmin.path('master', 'node_modules')));
};
