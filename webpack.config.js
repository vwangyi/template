/**
 * 
 */
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';


console.log('path ', path.resolve(__dirname, './'))
export default {
    entry: './src/index.js', 
    output: {
        clean: true,
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './')
        })
    ]
}