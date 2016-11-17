var express = require('express'),
    router = express.Router(),
    errors = require('errors'),
    v1router = require('./v1/router');

router.use('/v1', v1router);

// 404 for not found api routes
router.all('*', function (req, res, next) {
    var err = new errors.Http404Error();
    next(err);
})

// api error handler
router.use(function (err, req, res, next) {
    if (err instanceof Error) {
        res.status = err.status;
        res.json({ success: false, error: { code: err.code, message: err.message } });
    }
    next();
});

module.exports = router;