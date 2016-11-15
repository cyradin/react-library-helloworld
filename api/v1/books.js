var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
    res.send('list');
});

router.post('/add', function(req, res) {
    res.send('add');
});

router.get('/:id(\\d+)', function(req, res) {
    res.send('show ' + req.params.id);
});

router.post('/:id/edit', function(req, res) {
    res.send('edit ' + req.params.id);
});

module.exports = router;