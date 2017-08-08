const path              = require('path');
const webpack           = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve('dist'),
        filename: 'src/bundle.js',
        publicPath: 'http://localhost:8080'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: ['babel-loader?presets[]=react,presets[]=es2015']
            }
        ]
    },
    resolve: {
        extensions: [
            '*',
            '.js',
            '.jsx'
        ],
        modules: [
            'src',
            'node_modules'
        ]
    },
    devServer: {
        publicPath: '/',
        contentBase: './dist',
        historyApiFallback: true
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: './src/assets/',
                to: 'assets/'
            }
        ]),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"',
            }
        })
    ]
};