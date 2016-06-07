var path = require('path');
var autoprefixer = require('autoprefixer');

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
    plugins: require('./plugins')
};
