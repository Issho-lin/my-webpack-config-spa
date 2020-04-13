/*
 * @Description: 开发配置文件
 * @Author: linqibin
 * @Date: 2020-04-13 09:46:30
 * @LastEditTime: 2020-04-13 17:07:02
 * @LastEditors: linqibin
 */
const webpack = require('webpack')
const merge = require('webpack-merge')

module.exports = merge(require('./webpack.base'), {
    mode: 'development',
    devServer: {
        // 自动打开浏览器
        open: true,
        // 热更新
        hot: true,
        // 文件压缩
        compress: true,
        // 自定义端口
        port: 8080,
        // 自定义映射的根目录
        contentBase: './src',
        // 跨域代理
        proxy: {
            // 当前端请求本域以 /api 开头的地址时，会将请求转发到 https://10.8.20.25
            // 此时 /api 是前端自己加的，只是为了统一代理转发
            '/api': {
                target: 'https://10.8.20.25',
                // 重写地址，把前端自己加的 /api 消除
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true,
                secure: false
            }
        }
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        // 配置环境变量
        new webpack.DefinePlugin({
            NODE_ENV: '"dev"'
        })
    ]
})