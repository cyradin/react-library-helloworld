var express = require('express'),
    router = express.Router(),
    _ = require('underscore'),
    jwt = require('jsonwebtoken'),
    errors = require('errors'),
    models = require('../../models'),
    validate = require('express-validation'),
    forms = require('../../forms'),
    utils = require('../../lib/utils');

var testData = [
    { id: 1, username: 'admin', password: '1234' },
];

router.post('/login', validate(forms.login), function (req, res, next) {
    models.user.findOne({
        where: {
            username: req.body.username,
            password: utils.hash(req.body.password)
        }
    }).then(function (user) {
        if (!user) {
            return next(new errors.Http401Error());
        }
        console.dir(user);
        var payload = { id: user.id, username: user.username };
        try {
            res.json({
                success: true,
                data: {
                    authToken: jwt.sign(payload, req.config.jwt.secret, req.config.jwt.authTokenOptions),
                    refreshtoken: jwt.sign(payload, req.config.jwt.secret, req.config.jwt.refreshTokenOptions)
                }
            });
        } catch (err) {
            next(new errors.Http500Error());
        }
    }, function (err) {
        next(new errors.Http500Error());
    });
});

router.post('/logout', function (req, res) {
    res.json({ success: true });
});

router.post('/check', function (req, res) {
    var json = { success: true, data: { authorized: true } };
    try {
        var decoded = jwt.verify(req.body.token, req.config.jwt.secret);
        json.data.authToken = jwt.sign({ id: decoded.id, username: decoded.username }, req.config.jwt.secret, req.config.jwt.authTokenOptions);
    } catch (err) {
        json.data.authorized = false;
    }
    res.json(json);
});

module.exports = router;