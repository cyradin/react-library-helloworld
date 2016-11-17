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
        jwt.sign(user, req.config.jwt.secret, req.config.jwt.options, function (err, token) {
            if (err) {
                next(new errors.Http500Error());
            } else {
                res.json({ success: true, data: token });
            }
        })
    } else {
        next(new errors.Http401Error());
    }
});

router.post('/logout', function(req, res) {
    res.json({ success: true });
});

module.exports = router;