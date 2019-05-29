const merge = require('webpack-merge');
const path = require('path');
const base = require('./webpack.doc.base.conf');

module.exports = merge(base, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../docs/lib'),
        filename: '[name].[chunkhash].js'
    },
});