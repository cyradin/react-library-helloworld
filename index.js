var path = require('path');
var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var webpack = require('webpack');
var morgan = require('morgan');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var logger = require('./logger');
var config = require('./config');
var routes = require('./routes');

// request logger
app.use(morgan("combined", { stream: { write: message => logger.info(message) } }));

// parse application/json
app.use(bodyParser.json());

// using webpack dev server for development
if (process.env.NODE_ENV === 'development') {
    logger.info('development environment')
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
    logger.debug('Middlewares: "dev" applied succesfully');
    app.use(webpackHotMiddleware(compiler));
    logger.debug('Middlewares: "hot" applied succesfully');
} else {
    logger.info('production environment')
}

// serving static files
app.use(express.static(__dirname + '/public'));
logger.debug('Middlewares: "express.static" applied succesfully');

// loading all middlewares
require('./middlewares')(app);

app.use(routes);

var port = process.env.NODE_PORT || config.app.port || 3000;

app.listen(port, function () {
    logger.info('Server: started on port ' + port);
});

module.exports = app;
