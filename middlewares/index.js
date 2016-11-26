/**
 * Middlewares autoloader. Applies all files in this folder as an express middlewares
 */
'use strict';

var middlewares = {};
var logger = require('../logger');
var utils = require('../lib/utils');

module.exports = function (app) {
    utils.requireFolder(__dirname, function (file, i) {
        app.use(file);
        logger.debug('Middlewares: "' + i + '" applied succesfully');
    })
};
