var express = require('express'),
    router = express.Router(),
    _ = require('underscore'),
    jwt = require('jsonwebtoken'),
    errors = require('errors');

var testData = [
    { id: 1, username: 'admin', password: '1234' },
];

router.post('/login', function (req, res, next) {
    var user;
    if (user = _.findWhere(testData, { username: req.body.username, password: req.body.password })) {
        user = Object.assign({}, user, { password: null });
        try {
            res.json({
                success: true,
                data: {
                    authToken: jwt.sign(user, req.config.jwt.secret, req.config.jwt.authTokenOptions),
                    refreshtoken: jwt.sign(user, req.config.jwt.secret, req.config.jwt.refreshTokenOptions)
                }
            });
        } catch (err) {
            next(new errors.Http500Error());
        }
    } else {
        next(new errors.Http401Error());
    }
});

router.post('/logout', function(req, res) {
    res.json({ success: true });
});

router.post('/check', function(req, res) {
    var json = { success: true, data: { authorized: true } };
    try {
      jwt.verify(req.body.token, req.config.jwt.secret);
    } catch(err) {
      json.data.authorized = false;
    }
    res.json(json);
});

module.exports = router;