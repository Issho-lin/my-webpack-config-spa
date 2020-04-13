/*
 * @Description: 公共配置文件
 * @Author: linqibin
 * @Date: 2020-04-13 09:46:09
 * @LastEditTime: 2020-04-13 16:56:02
 * @LastEditors: linqibin
 */
const path = require('path')
const webpack = require('webpack')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: [
        '@babel/polyfill',
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }, {
                test: /\.s(c|a)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'media/iconfont',// 自定义打包后的图片输出路径
                        name: '[name]-[hash:4].[ext]'// 自定义打包后的图片名字,hash:n,n为hash长度
                    }
                }
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1 * 1024, // 小于5kb转base64
                        outputPath: 'media/images',
                        name: '[name]-[hash:4].[ext]',
                        esModule: false
                    }
                }
            }, {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            // 解决generator语法报错
                            '@babel/plugin-transform-runtime'
                        ],
                    }
                },
                // 排除被转换的目录
                exclude: /node_modules/
            }, {
                // 打包index.html中引用的图片
                test: /\.(htm|html)$/i,
                use: 'html-withimg-loader'
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            // 输出的文件名，默认就是 index.html
            filename: 'index.html',
            // 以指定的index.html为模板
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        // 把资源文件原封不动的复制到打包输出的指定目录下
        new CopyWebpackPlugin([
            {
                // from: 源，从哪里拷贝，可以是相对路径或绝对路径，推荐绝对路径
                from: path.join(__dirname, '..', 'src', 'asset'),
                // to: 目标，拷贝到哪里去，相对于 output 的路径，同样可以是相对路径或绝对路径，但是更推荐相对路径
                to: 'asset'
            }
        ]),
        new webpack.ProvidePlugin({
            _: 'lodash',
            axios: 'axios'
        })
    ]
}