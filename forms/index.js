/**
 * Forms validation autoloader. Exports all files in this folder as an object with keys = basenames of this files
 */
'use strict';

var fs = require('fs');
var path = require('path');
var basename = path.basename(module.filename);
var validation = {};

fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(function (file) {
        validation[path.basename(file, '.js')] = require(path.join(__dirname, file));
    });

module.exports = validation;
