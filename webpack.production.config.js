var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'react-bootstrap',
        'font-awesome-loader',
        'bootstrap-loader',
        './src/js/render.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.min.js'
    },
    module: {
        loaders: require('./loaders')
    },
    postcss: function () {
        return [autoprefixer({ browsers: ['last 3 versions'] })];
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            React: 'react',
            Reflux: 'reflux'
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Apontador',
            template: './src/index.html',
            scriptFilename: 'app.min.js'
        })
    ]
};
