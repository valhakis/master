var express = require('express');
var app = Loc.require('app');

app.use(Loc.static('public'));
app.use('/api', Loc.require('api'));
