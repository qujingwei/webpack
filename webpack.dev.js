const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');

const path = require('path');
const webpack = require('webpack');


module.exports = merge(base, {
    mode:'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true
    }
})