const path = require('path')
const webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, '../'),
    output: {
        // 无论 path 是什么, dev 环境的 `index.html` 所引用的 js 路径都是 文件名而已(即与 path 完全无关. 只与
        // filename 字段有关而已)
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'bundle.js',
        chunkFilename: 'bundle.js'
    },
    resolve: {
        extensions: [
            '.js',
            '.vue',
            '.jsx',
            '.scss',
            '.css',
            '.jpg',
            '.png',
            'gif',
            '.svg'
        ],
        alias: {
            'SRC': path.resolve(__dirname, '../src'),
            'ASSETS': path.resolve(__dirname, '../src/assets'),
            'COMPONENTS': path.resolve(__dirname, '../src/components'),
            'ACTIONS': path.resolve(__dirname, '../src/actions'),
            'CONSTANTS': path.resolve(__dirname, '../src/constants'),
            'CONTAINERS': path.resolve(__dirname, '../src/containers'),
            'MIDDLEWARE': path.resolve(__dirname, '../src/middleware'),
            'REDUCERS': path.resolve(__dirname, '../src/reducers'),
            'STORE': path.resolve(__dirname, '../src/store'),
            'ROUTES': path.resolve(__dirname, '../src/routes')
        }
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.css$/,
                loader: ['css-loader', 'postcss-loader', 'sass-loader']
            }, {
                test: /\.scss$/,
                loader: ['css-loader', 'postcss-loader', 'sass-loader']
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg|gif|svg|ttf|woff|eot)$/,
                loader: 'file-loader',
                query: {
                    name: 'file/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new webpack
            .optimize
            .OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}