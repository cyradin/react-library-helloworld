const crypto = require('crypto');
const config = require('../config');
const hash = crypto.createHmac('sha512', config.salt);
const fs = require('fs');
const path = require('path');

exports.hash = function (value) {
    return hash.update(value).digest('hex');
}

/**
 * Loads all files in defined folder and applies callback function to all of them
 */
exports.requireFolder = function (folder, callback, options) {
    var files = {};
    var options = options || {};
    var basename = options.basename || 'index.js';

    fs
        .readdirSync(folder)
        .filter(function (file) {
            return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
        })
        .forEach(function (file) {
            files[path.basename(file, '.js')] = require(path.join(folder, file));
        });

    for (var i in files) {
        callback(files[i], i);
    }

    if (typeof options.successCallback === 'function') {
        successCallback();
    }
}
