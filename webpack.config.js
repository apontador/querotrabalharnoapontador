var path = require('path');
var friendlyFormatter = require('eslint-friendly-formatter');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        'react-bootstrap',
        'font-awesome-loader',
        'bootstrap-loader',
        './src/js/render.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.js'
    },
    module: {
        loaders: require('./loaders')
    },
    postcss: function () {
        return [autoprefixer({ browsers: ['last 3 versions'] })];
    },
    eslint: {
        formatter: friendlyFormatter,
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    plugins: require('./plugins')
};
