'use strict';

var path = require('path');

module.exports = [
    {test: /\.(js|jsx)$/, include: path.join(__dirname, 'src'), loaders: ['react-hot', 'babel', 'eslint'] },
    {test: /\.svg$/, loader: 'svg-inline' },
    {test: /\.css$/, loaders: [ 'style', 'css', 'postcss' ] },
    {test: /\.scss$/, loaders: [ 'style', 'css', 'postcss', 'sass' ]},    
    {test: /\.(ttf|eot|svg|woff|woff2)(\?[\s\S]+)?$/, loader: 'file'},
    {test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?!expose?jQuery&jQuery=jquery'},
    {test: require.resolve('jquery'), loader: 'expose?$!expose?jQuery'},
    {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
];