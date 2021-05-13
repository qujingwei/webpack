const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(base, {
    mode:'production',
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public'),
                    to: path.resolve(__dirname, 'dist'),
                    globOptions:{
                        ignore:['index.html']
                    }
                },
            ],
        }),
    ]
})