/*
 * @Description: 生产配置文件
 * @Author: linqibin
 * @Date: 2020-04-13 09:46:19
 * @LastEditTime: 2020-04-13 16:51:29
 * @LastEditors: linqibin
 */
const webpack = require('webpack')
const merge = require('webpack-merge')

module.exports = merge(require('./webpack.base'), {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: '"prod"'
        })
    ]
})