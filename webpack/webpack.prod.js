'use strict';

/**
 * 生产环境配置：webpack5
 * 等价替代原 `vue-cli-service build`：
 * - 产物目录 dist、静态资源 static/（与原 outputDir/assetsDir 一致）
 * - 分包策略与原 chainWebpack 保持一致：chunk-libs / chunk-elementUI / chunk-commons
 * - runtimeChunk: 'single' + InlineRuntimePlugin（内联 runtime.js）
 * - terser 压缩（drop console/debugger）+ css 压缩
 * - 不生成 sourcemap（原 productionSourceMap: false）
 * - public/favicon.ico 拷贝到 dist
 */

process.env.NODE_ENV = 'production';

const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common')({ extractCss: true });
const InlineRuntimePlugin = require('./InlineRuntimePlugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,

  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/',
    clean: true,
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].js',
    assetModuleFilename: 'static/img/[name].[hash:8][ext]'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        // 生产默认 /prod-api，可通过环境变量覆盖（如 build:stage 传入 /stage-api）
        VUE_APP_BASE_API: JSON.stringify(process.env.VUE_APP_BASE_API || '/prod-api')
      }
    }),

    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].css',
      // 删除抽取产物中关于 JS 侧的 icss(:export) 映射内容
      ignoreOrder: true
    }),

    // 拷贝 public 下的静态资源（favicon），等价原 vue-cli 的 public 目录拷贝
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', 'public'),
          to: path.resolve(__dirname, '..', 'dist'),
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    }),

    new InlineRuntimePlugin()
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true
          },
          format: {
            comments: false
          }
        },
        extractComments: false
      }),
      new CssMinimizerPlugin()
    ],

    // 与原 vue.config.js 的 chainWebpack 分包策略一致
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial' // 只打包初始依赖的三方库
        },
        elementUI: {
          name: 'chunk-elementUI', // element-ui 单独分包
          priority: 20,
          test: /[\\/]node_modules[\\/]_?element-ui(.*)/
        },
        commons: {
          name: 'chunk-commons',
          test: path.resolve(__dirname, '..', 'src/components'),
          minChunks: 3,
          priority: 5,
          reuseExistingChunk: true
        }
      }
    },

    runtimeChunk: 'single'
  }
});
