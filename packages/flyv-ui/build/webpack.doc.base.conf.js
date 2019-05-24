const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const babelConfig = require('../../../babel.cofig');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: "development",
    entry: {
        index: path.resolve(__dirname, '../docs/main.js')
    },
    output: {
        path: path.resolve(__dirname, '../lib'),
        filename: '[name].[hash].js'
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
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                        options: {
                          sourceMap: false,
                          shadowMode: false
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                          sourceMap: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false,
                            config: {
                                path: path.resolve(__dirname, '../../../postcss.config.js')
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false
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
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin(
            {
              template: path.resolve(__dirname, '../public/index.html')
            }
        ),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css"
        })
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