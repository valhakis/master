'use strict';

const express = require('express');
const router = express.Router();
const controller = require('./example.controller.js');

router.get('/', controller.index);

module.exports = router;
