const merge = require('webpack-merge');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const base = require('./webpack.doc.base.conf');

module.exports = merge(base, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin()
    ]
});