var express = require('express'),
    router = express.Router(),
    _ = require('underscore'),
    utils = require('../../lib/utils');

var testData = [
    { id: 1, username: 'admin', password: '1234' },
];

router.post('/login', function(req, res) {
    res.json({ success: true });
});

router.post('/logout', function(req, res) {
    res.json({ success: true });
});

module.exports = router;