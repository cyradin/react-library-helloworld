var passport = require('passport'),
    passportJwt = require('passport-jwt'),
    JwtStrategy = passportJwt.Strategy,
    ExtractJwt = passportJwt.ExtractJwt,
    errors = require('errors');


var _ = require('underscore');
var testData = [{id: 1, username: 'admin', password: 1234}];

var opts = {};

passport.use(new JwtStrategy(opts), function (jwtPayload, done) {
    var user;
    if (user = _.findWhere(testData, {id: jwtPayload.id})) {
        return done(null, user);
    } else {
        return done(null, false);
    }
});

/**
 * Checks auth token (in header)
 * @param  {Object}   req  express request object
 * @param  {Object}   res  express response object
 * @param  {Function} next call next middleware
 * @return {null}
 */
module.exports = function (req, res, next) {
    passport.authenticate('jwt', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return next(new errors.Http401Error())
        }
        req.user = user;
        req.authenticated = true;
    })(req, res, next);
}