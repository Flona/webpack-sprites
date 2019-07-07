const merge = require('webpack-merge')
const baseConfig = require('./webpack-base-config')

let devConfig = {
    mode: "development",
    devServer: {
        hot: true,
        overlay: true,
        port: 9000
    },

    devtool: "cheap-module-eval-source-map",
}

module.exports = merge(baseConfig,devConfig)