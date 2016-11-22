var path = require('path'),
    fs = require('fs'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware');
    apiRouter = require('./api/router');

// parse application/json
app.use(bodyParser.json());

// using webpack dev server for development
if (process.env.NODE_ENV === 'development') {
    const config = require(path.resolve(__dirname, 'webpack.config.js'));
    const compiler = webpack(config);
    const middleware = webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });
    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
}

// serving static files
app.use(express.static(__dirname + '/public'));

// loading all middlewares
var middlewares = fs.readdirSync('middlewares');
for (var i = 0; i < middlewares.length; i++) {
    app.use(require(path.resolve('./middlewares/', middlewares[i])));
}

app.use('/api', apiRouter);

app.all('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

var port = process.env.NODE_PORT || 3000;

app.listen(port, function() {
    console.log('App listening on port ' + port);
});

module.exports = app;
