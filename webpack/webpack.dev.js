'use strict';

/**
 * 开发环境配置：webpack5 + webpack-dev-server
 * 等价替代原 `vue-cli-service serve`：
 * - 端口 9527、自动打开浏览器、HMR（vue-loader 15 自带 SFC 热更新 + vue-style-loader 样式热替换）
 * - history 路由刷新回退（historyApiFallback）
 * - mock-server 挂载（原 devServer.before → setupMiddlewares）
 */

process.env.NODE_ENV = 'development';

const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common')({ extractCss: false });
const mockServer = require('../mock/mock-server.js');

// 与原 vue.config.js 保持一致：port = 9527，可用环境变量覆盖
const port = process.env.port || process.env.npm_config_port || 9527;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',

  output: {
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        // 无 .env 文件时默认 /dev-api，与 mock-server 的路由前缀一致
        VUE_APP_BASE_API: JSON.stringify(process.env.VUE_APP_BASE_API || '/dev-api')
      }
    })
  ],

  devServer: {
    port: port,
    host: 'localhost',
    open: true,
    compress: true,
    hot: true,
    historyApiFallback: true,

    // 静态资源目录（favicon 等）
    static: {
      directory: path.join(__dirname, '..', 'public'),
      publicPath: '/'
    },

    // 挂载 mock 服务（等价原 vue-cli 的 devServer.before）
    setupMiddlewares(middlewares, devServer) {
      if (devServer && devServer.app) {
        mockServer(devServer.app);
        console.log('📦 [mock] Mock server mounted');
      }
      return middlewares;
    },

    client: {
      progress: true,
      overlay: {
        errors: true,
        warnings: false
      }
    }
  }
});
