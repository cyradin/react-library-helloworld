var path = require('path'),
    express = require('express'),
    app = express(),
    webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware');

// using webpack dev server for development
if (process.env.NODE_ENV === 'dev') {
  const compiler = webpack(require(path.resolve(__dirname, './config/webpack')));
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: '/',
    // contentBase: path.resolve('../public'),
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
// or express.static on production
} else {
  app.use(express.static(__dirname + '/public'));

}

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

var port = process.env.NODE_PORT || 3000;

app.listen(port, function() {
    console.log('App listening on port ' + port);
});