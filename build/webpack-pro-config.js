const merge = require('webpack-merge')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseConfig = require('./webpack-base-config')

let proConfig = {
    mode: "production",
    plugins: [
        new CleanWebpackPlugin({
            path: 'dist',
            root: path.resolve(__dirname, '../')
        })
        
    ]
}

module.exports = merge(baseConfig,proConfig)