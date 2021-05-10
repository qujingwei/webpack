const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: "[name].[contenthash].js",
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        }
    },
    optimization:{
        splitChunks:{
            chunks: 'all'
        },
        runtimeChunk: 'single'
    },
    module: {
        rules: [{
            test: /\.css/,
            use: ['style-loader', 'css-loader']
        },{
            test: /\.(png,png|svg|jpg|jpeg|gif)$/,
            use: ['file-loader']
        },{
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader']
        }]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            title:'测试',
            filename:'index.html',
            template: path.resolve(__dirname, 'public/index.html'),
            minify:false
        })
    ]
}