var express = require('express'),
    router = express.Router(),
    booksRouter = require('./books'),
    userRouter = require('./user');

router.all('*', function (req, res, next) {
    console.log('authCheck');
    next();
})

router.use('/books', booksRouter);
router.use('/user', userRouter);

module.exports = router;