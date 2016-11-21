var express = require('express'),
    router = express.Router(),
    _ = require('underscore'),
    jwt = require('jsonwebtoken'),
    errors = require('errors'),
    uniqid = require('uniqid');

var testData = [
    { id: 1, username: 'admin', password: '1234' },
];

router.post('/login', function (req, res, next) {
    var user;
    if (user = _.findWhere(testData, { username: req.body.username, password: req.body.password })) {
        try {
            res.json({
                success: true,
                data: {
                    authToken: jwt.sign({id: user.id, seed: uniqid() }, req.config.jwt.secret, req.config.jwt.authTokenOptions),
                    refreshtoken: jwt.sign({id: user.id, seed: uniqid() }, req.config.jwt.secret, req.config.jwt.refreshTokenOptions)
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
    // TODO invalidate tokens
    res.json({ success: true });
});

router.post('/check', function(req, res) {
    var json = { success: true, data: { authorized: true } };
    try {
      var decoded = jwt.verify(req.body.token, req.config.jwt.secret);
      if (user = _.findWhere(testData, { id: decoded.id })) {
        var payload = { id: user.id, seed: uniqid() };
        json.data.authToken = jwt.sign(payload, req.config.jwt.secret, req.config.jwt.authTokenOptions);
      } else {
        json.data.authorized = false;
      }
    } catch(err) {
      json.data.authorized = false;
    }
    res.json(json);
});

module.exports = router;