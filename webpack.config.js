var path = require('path');
var webpack = require('webpack');

var config = {
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {}
            },
            { 
                test: /\.css$/,
                loader: "style-loader!css-loader!less-loader"
            }
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'moment': 'moment',
        '_': 'underscore'
    },
    resolve: {
        alias: {
            '@app': path.resolve(__dirname, './app'),
            '@actions': path.resolve(__dirname, './app/actions'),
            '@actiontypes': path.resolve(__dirname, './app/actions/actionTypes.js'),
            '@components': path.resolve(__dirname, './app/components'),
            '@lib': path.resolve(__dirname, './app/lib'),
            '@mixins': path.resolve(__dirname, './app/mixins'),
            '@reducers': path.resolve(__dirname, './app/reducers'),
        },
        extensions: ['', '.js', '.jsx']
    }
}

switch (process.env.NODE_ENV) {
    // start dev server
    case 'development':
        config = Object.assign(config, {
            devtool: 'eval',
            entry: [
                'react-hot-loader/patch',
                'webpack/hot/dev-server',
                'webpack-hot-middleware/client',
                path.join(__dirname, './app/index.jsx')
            ],
            plugins: [
                new webpack.optimize.OccurenceOrderPlugin(),
                new webpack.HotModuleReplacementPlugin(),
                new webpack.NoErrorsPlugin(),
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
                })
            ],
        });
        break;
    // build
    default:
        config = Object.assign(config, {
            entry: [
                path.join(__dirname, './app/index.jsx')
            ],
            plugins: [
                new webpack.optimize.UglifyJsPlugin(),
                new webpack.optimize.DedupePlugin(),
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify('production')
                })
            ],
        });
}

module.exports = config;
