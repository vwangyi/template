const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js', 
    output: {
        clean: true,
        filename: 'main.js'
    },
    devServer: {
        port: 1234,
    },
    plugins: [new HtmlWebpackPlugin()]
}