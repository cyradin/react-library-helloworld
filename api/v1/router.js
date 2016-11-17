var express = require('express'),
    router = express.Router(),
    booksRouter = require('./books'),
    userRouter = require('./user');

router.use('/books', booksRouter);
router.use('/user', userRouter);

module.exports = router;