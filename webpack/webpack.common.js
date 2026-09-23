'use strict';

/**
 * webpack5 公共配置（vue2 + vue-loader 15）
 * 等价替代原 vue-cli-service 的基础能力：
 * - @ 别名 / extensions 解析
 * - .vue / .js / css / scss / svg 图标 / 静态资源 处理规则
 * - node 内置模块 polyfill（path / stream）
 * - HtmlWebpackPlugin（标题、favicon、BASE_URL 注入）
 *
 * @param {object} options
 * @param {boolean} options.extractCss  生产构建为 true（样式抽取为独立 css 文件），
 *                                      开发为 false（走 vue-style-loader，支持 HMR）
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const defaultSettings = require('../src/settings');

const title = defaultSettings.title || 'vue Element Admin';

const resolve = dir => path.join(__dirname, '..', dir);
const iconsDir = resolve('src/icons');

module.exports = function createCommonConfig(options = {}) {
  const styleLoader = options.extractCss
    ? MiniCssExtractPlugin.loader
    : 'vue-style-loader';

  return {
    entry: {
      app: './src/main.js'
    },

    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src')
      },
      fallback: {
        // src 中 `import path from 'path'`（HeaderSearch / TagsView / SidebarItem / role.vue）
        path: require.resolve('path-browserify'),
        // jszip / stream-browserify 链路需要
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/')
      }
    },

    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                cacheCompression: false
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            styleLoader,
            {
              loader: 'css-loader',
              options: {
                // vue-loader 15 与 css-loader 6+ 的 esModule 互操作存在兼容问题，必须关闭
                esModule: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  config: false,
                  plugins: [autoprefixer]
                }
              }
            }
          ]
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            styleLoader,
            {
              loader: 'css-loader',
              options: {
                esModule: false,
                // 开启 ICSS 模式：支持 variables.scss / element-variables.scss 中的 `:export`
                // store/modules/settings.js 与 layout/components/Sidebar 依赖该导出
                modules: {
                  mode: 'icss'
                }
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  config: false,
                  plugins: [autoprefixer]
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  quietDeps: true,
                  // element-ui 2.x 的老式 scss 源码在 dart-sass 下的废弃语法告警
                  silenceDeprecations: [
                    'slash-div',
                    'mixed-decls',
                    'import',
                    'global-builtin',
                    'color-functions',
                    'legacy-js-api'
                  ]
                }
              }
            }
          ]
        },
        // svg 雪碧图：仅 src/icons 下的 svg 走 svg-sprite-loader
        {
          test: /\.svg$/,
          include: [iconsDir],
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                symbolId: 'icon-[name]'
              }
            }
          ]
        },
        // 其余 svg（src/assets、element-ui 等）按普通静态资源处理
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i,
          exclude: [iconsDir],
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 8 * 1024
            }
          }
        },
        // 字体
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          type: 'asset/resource',
          generator: {
            filename: 'static/fonts/[name].[hash:8][ext]'
          }
        },
        // 音视频
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          type: 'asset/resource',
          generator: {
            filename: 'static/media/[name].[hash:8][ext]'
          }
        }
        // 注意：`script-loader!jsonlint`（src/components/JsonEditor）为内联 loader 语法，
        // webpack5 原生支持，无需在此重复配置规则
      ]
    },

    plugins: [
      new VueLoaderPlugin(),

      new HtmlWebpackPlugin({
        template: resolve('public/index.html'),
        filename: 'index.html',
        templateParameters: {
          BASE_URL: '/',
          TITLE: title
        }
      })
    ]
  };
};
