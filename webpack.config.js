const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    mode:'production',
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
    plugins: [
        new HtmlWebpackPlugin({
            title:'测试',
            filename:'index.html',
            template: path.resolve(__dirname, 'public/index.html'),
            minify:false
        }),
        new CleanWebpackPlugin()
    ],
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'),
    }
}