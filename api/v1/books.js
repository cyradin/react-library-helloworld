var express = require('express'),
    router = express.Router(),
    _ = require('underscore'),
    utils = require('../../lib/utils');

var testData = [
    {id: 1, name: 'Seven', author: 'John Doe', readDate: '2016-01-15', file: '/img/1.jpg', cover: '/img/1_cover.jpg', allowDownload: true},
    {id: 2, name: 'Hello', author: 'John Doe', readDate: '2016-02-15', cover: '/img/2_cover.jpg', allowDownload: true},
    {id: 3, name: 'World', author: 'John Doe', readDate: '2016-03-15', file: '/img/3.jpg', allowDownload: false},
    {id: 4, name: 'Harry Potter', author: 'John Doe', readDate: '2016-04-15', file: '/img/4.jpg', cover: '/img/4_cover.jpg', allowDownload: false}
];

router.get('/', function(req, res) {
    var serverUrl = utils.serverUrl(req),
        books = JSON.parse(JSON.stringify(testData));

    for (var i = 0; i < books.length; i++) {
        if (books[i].file) {
            books[i].file = serverUrl + books[i].file;
        }

        if (books[i].cover) {
            books[i].cover = serverUrl + books[i].cover;
        }
    }

    res.json({ success: true, data: books });
});

router.post('/add', function(req, res) {
    res.json({ success: true, data: {id: 5 } });
});

router.get('/:id(\\d+)', function(req, res, next) {
    var id = parseInt(req.params.id),
        book = _.findWhere(testData, {id: id});
    if (book) {
        res.json({ success: true, data: book });
    } else {
        next();
    }
});

router.post('/:id/edit', function(req, res) {
    res.json({ success: true, data: {id: 1 } });
});

module.exports = router;