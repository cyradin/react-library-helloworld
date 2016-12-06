/**
 * Routes autoloader. Applies all files in this folder as express routes
 */
'use strict';

var express = require('express');
var router = express.Router();
var logger = require('../../../logger');
var utils = require('../../../lib/utils');


router.use(function (req, res, next) {
    next();
})
logger.debug('Middlewares: "/api/v1 key check" applied succesfully');

utils.requireFolder(__dirname, function (file, i) {
    router.use('/' + i, file);
    logger.debug('Routes: "/api/v1/' + i + '" enabled');
});

module.exports = router;