const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const babelConfig = require('../../../babel.cofig');

module.exports = {
    mode: 'none',
    entry: {
        pc: path.resolve(__dirname, '../src/pages/pc/main.js')
    },
    output: {
        path: path.resolve(__dirname, '../lib'),
        filename: 'index.[name].js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelConfig()
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.js', '.vue']
    },
    externals: {
        vue: {
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue',
            root: 'Vue'
        }
    },
}