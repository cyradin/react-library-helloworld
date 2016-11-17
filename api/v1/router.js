var express = require('express'),
    router = express.Router(),
    booksRouter = require('./books'),
    userRouter = require('./user');

// api key check
router.use(function (req, res, next) {
    next();
})

router.use('/books', booksRouter);
router.use('/user', userRouter);

module.exports = router;