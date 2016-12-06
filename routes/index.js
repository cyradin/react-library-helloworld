var express = require('express');
var router = express.Router();
var logger = require('../logger');
var path = require('path');

router.use('/api', require('./api'));
logger.debug('Routes: "/api/*" enabled');

router.all('*', function response(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

logger.debug('Routes: "/" enabled');

module.exports = router;