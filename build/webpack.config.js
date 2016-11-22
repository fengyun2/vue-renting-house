const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const cssnext = require('postcss-cssnext')
const customMedia = require('postcss-custom-media')
const customProperties = require('postcss-custom-properties')
const pxtorem = require('postcss-pxtorem')
const baseConfig = require('./webpack.base')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const developmentConf = merge(baseConfig, {
    entry: {
        index: path.resolve(__dirname, '../src/index.js')
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [
                        customMedia(),
                        cssnext({
                           flexbox: true, browsers: ['last 3 versions']
                        }),
                        customProperties(),
                        // pxtorem({rootValue: 100, propWhiteList: []})
                    ]
                }
            },
            vue: {
                // postcss: [require('autoprefixer')({flexbox: true, browsers: ['last 3 versions']})],
                postcss: function () {
                    return [
                        customMedia(),
                        cssnext({
                            flexbox: true, browsers: ['last 3 versions']
                        }),
                        customProperties(),
                        // pxtorem({rootValue: 100, propWhiteList: []})
                    ]
                },
                css: ExtractTextPlugin.extract({
                    loader: [
                        'css-loader', 'postcss-loader'
                    ],
                    fallbackLoader: "vue-style-loader"
                }),
                scss: ExtractTextPlugin.extract({
                    loader: [
                        'css-loader', 'postcss-loader', 'sass-loader'
                    ],
                    fallbackLoader: "vue-style-loader"
                }),
                sass: ExtractTextPlugin.extract({
                    loader: [
                        'css-loader', 'postcss-loader', 'sass-loader'
                    ],
                    fallbackLoader: "vue-style-loader"
                })
            }
        }),
        new ExtractTextPlugin('css/[name].[hash].css')
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '../src'),
        hot: true,
        port: 8080,
        historyApiFallback: true
    }
})

module.exports = developmentConf
