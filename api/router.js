var express = require('express'),
    router = express.Router(),
    errors = require('errors'),
    v1router = require('./v1/router');

router.use('/v1', v1router);

// 404 for not found api routes
router.use(function (req, res, next) {
    var err = new errors.Http404Error();
    next(err);
})

// api error handler
router.use(function (err, req, res, next) {
    if (err instanceof Error) {
        res.status(err.status);

        var errorData = { code: err.code, message: err.message };
        if (err.errors) {
            errorData.fields = {};
            for (var i = 0; i < err.errors.length; i++) {
                errorData.fields[err.errors[i].field] = err.errors[i].messages;
            }
        }
        res.json({ success: false, error: errorData });
    } else {
        next();
    }
});

module.exports = router;