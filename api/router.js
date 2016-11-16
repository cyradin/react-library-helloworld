var express = require('express'),
    router = express.Router(),
    v1router = require('./v1/router');

router.use('/v1', v1router);

router.all('*', function(req, res) {
    res.status(404).json({ success: false, error: '404 Not Found' });
})

module.exports = router;