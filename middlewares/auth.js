var passport = require('passport'),
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    config = require('../config'),
    models = require('../models');

var options = {
    // audience: config.jwt.audience,
    // issuer: config.jwt.issuer,
    secretOrKey: config.jwt.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
}

passport.use(new JwtStrategy(options, function (payload, done) {
    models.user.findOne({ where: { id: payload.id } }).then(function (user) {
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    }, function (err) {
        done(err, false);
    });
}));
passport.initialize();

module.exports = function (req, res, next) {
    passport.authenticate('jwt', { session: false }, function (err, user, info) {
        if (err) {
            return next(err);
        }

        if (user) {
            req.user = user;
        }
        next();
    })(req, res, next);
};
