const path = require('node:path');
const cwd = process.cwd();
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(cwd, 'dist'),
        clean: true,
        filename: "js/bundle_[name]_[contenthash:8].js", 
    }
}