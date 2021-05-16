const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development' ? 1 : 0

let plugins = [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
        title:'测试',
        filename:'index.html',
        template: path.resolve(__dirname, 'public/index.html'),
        minify:false
    }),
    new webpack.HotModuleReplacementPlugin()
]
if(!isDev){
    plugins.splice(1,0,new CleanWebpackPlugin())
    plugins.push(new CopyPlugin({
        patterns: [
            {
                from: path.resolve(__dirname, 'public'),
                to: path.resolve(__dirname, 'dist'),
                globOptions:{
                    ignore:['index.html']
                }
            },
        ],
    }))
}
module.exports = {
    entry: './src/main.ts',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    mode:'production',
    devtool: 'source-map',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        }
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
    plugins: plugins,
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true
    }
}