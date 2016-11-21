/**
 * Injects config object to the request
 * 
 * @param  {Object}   req  express request object
 * @param  {Object}   res  express response object
 * @param  {Function} next call next middleware
 * @return {null}
 */
module.exports = function (req, res, next) {
    req.config = require('../config/config');
    next();
}