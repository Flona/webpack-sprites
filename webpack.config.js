const path = require('path')
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        'app': './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    devServer: {
        hot: true,
        overlay: true,
        port: 9000
    },

    devtool: "cheap-module-eval-source-map",

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                include: path.resolve(__dirname, './src'),
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            }
        ]
    },
    
    optimization:{
        // minimize: false,
        runtimeChunk: true,
        splitChunks: {
            name: true,
            minSize: 0,
            // chunks: 'all'
            cacheGroups: {
                lodash: {
                    test: /lodash/,
                    chunks: "all"
                }
            }
        }
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        })
    ]
}