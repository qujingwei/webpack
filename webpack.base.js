const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

module.exports = {
    entry: {
        main:'./src/main.js',
        print:'./src/lib/print.js',
    },
    output: {
        filename: "[name].[contenthash].js",
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    optimization:{
        splitChunks:{
            chunks: 'all',
            // cacheGroups: {
            //     libs: {
            //         test: path.resolve('src'),
            //         priority: 20,
            //         minChunks: 2, //  minimum common number
            //     }
            // }
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