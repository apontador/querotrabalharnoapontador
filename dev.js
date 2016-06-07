var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');
var config = require('./config');
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });
    new WebpackDevServer(webpack(webpackConfig), {
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        historyApiFallback: true
    }).listen(config.devPort, 'localhost', function (err) {
        if (err) {
            console.log(err);
        }
        console.log('Listening at localhost:', config.devPort);
    });
};