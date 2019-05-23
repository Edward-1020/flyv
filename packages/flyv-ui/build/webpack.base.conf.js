const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const babelConfig = require('../babel.cofig');

module.exports = {
    mode: "development",
    entry: {
        index: path.resolve(__dirname, '../docs/main.js')
    },
    output: {
        path: path.resolve(__dirname, '../lib'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelConfig()
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'vue-style-loader',
                        options: {
                          sourceMap: false,
                          shadowMode: false
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                          sourceMap: false,
                          modules: true,
                          localIdentName: '[name]_[local]_[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false,
                            config: {
                                path: path.resolve(__dirname, '../postcss.config.js')
                            }
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.md$/,
                use: [
                  'vue-loader',
                  '@flyv/markdown-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin(
            {
              template: path.resolve(__dirname, '../public/index.html')
            }
        ),
    ],
    resolve: {
        extensions: ['.js', '.vue']
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../lib'),
        compress: true,
        port: 9000
    }
}