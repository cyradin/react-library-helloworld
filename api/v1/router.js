var express = require('express'),
    router = express.Router(),
    booksRouter = require('./books');

router.use('/books', booksRouter);

module.exports = router;