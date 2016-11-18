var express = require('express'),
    router = express.Router(),
    booksRouter = require('./books'),
    authRouter = require('./auth');

// api key check
router.use(function (req, res, next) {
    next();
})

router.use('/auth', authRouter);
router.use('/books', booksRouter);

module.exports = router;