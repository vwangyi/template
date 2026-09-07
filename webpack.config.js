
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'node:path';

const __dirname = import.meta.dirname;

export default {
    entry: './src/index.js', 
    output: {
        clean: true,
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/template.html')
        })
    ]
}