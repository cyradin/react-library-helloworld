var forever = require('forever-monitor');

var child = new (forever.Monitor)('./index.js', {
    // max: 3,
    silent: false,
    args: [],
    watch: true,               // Value indicating if we should watch files.
    watchIgnoreDotFiles: null, // Whether to ignore file starting with a '.'
    watchIgnorePatterns: [
        'client',
        'public',
        'node_modules'
    ],
    watchDirectory: __dirname      // Top-level directory to watch from.
});

child.on('exit', function () {
    console.log('app.js has exited after 3 restarts');
}).on('restart', function () {
    console.log('app reloaded');
}).on('watch:restart', function(info) {
    console.error('Restaring script because ' + info.stat + ' changed');
});
child.start();