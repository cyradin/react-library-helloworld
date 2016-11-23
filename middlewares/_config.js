// injects config object to the request
module.exports = function (req, res, next) {
    req.config = require('../config');
    next();
}