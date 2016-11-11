var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: ['webpack/hot/dev-server', 'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, '../app/app.jsx')
    ],
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('dev')
        })
    ],
    module: {
        loaders: [{
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'es2017', 'react'],
                    plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties']
                }
            },
            /* {
              test: /\.css$/,
              loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
            }*/
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
    resolve: {
        alias: {
            '@app': path.resolve(__dirname, '../app'),
            '@actions': path.resolve(__dirname, '../app/actions'),
            '@components': path.resolve(__dirname, '../app/components'),
            '@lib': path.resolve(__dirname, '../app/lib'),
            '@reducers': path.resolve(__dirname, '../app/reducers'),
        },
        extensions: ['', '.js', '.jsx']
    }
};