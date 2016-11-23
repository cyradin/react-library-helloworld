const crypto = require('crypto');
const config = require('../config');
const hash = crypto.createHmac('sha512', config.salt);

exports.hash = function (value) {
    return hash.update(value).digest('hex');
}