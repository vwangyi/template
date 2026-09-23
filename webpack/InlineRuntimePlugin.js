'use strict';

/**
 * html-webpack-plugin 5 的 runtime 内联插件
 *
 * 原项目使用 script-ext-html-webpack-plugin（该插件与 html-webpack-plugin 5 不兼容，
 * 已停止维护），这里用 hwp5 的官方 hooks 实现同等能力：
 * 将 `runtime.*.js` 内联到 index.html，减少一次 HTTP 请求
 * （`runtime` 名与 optimization.runtimeChunk: 'single' 的产物名保持一致）
 */

class InlineRuntimePlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap(
      'InlineRuntimePlugin',
      compilation => {
        const HtmlWebpackPlugin = require('html-webpack-plugin');
        HtmlWebpackPlugin.getHooks(compilation).alterAssetTagGroups.tap(
          'InlineRuntimePlugin',
          args => {
            const inline = tags =>
              tags.map(tag => {
                if (
                  tag.tagName === 'script' &&
                  tag.attributes &&
                  typeof tag.attributes.src === 'string' &&
                  /runtime\.[^/]*\.js$/.test(tag.attributes.src)
                ) {
                  // publicPath 为 '/' 时：/static/js/runtime.xxxx.js -> static/js/runtime.xxxx.js
                  const assetName = tag.attributes.src.replace(/^\/+/, '');
                  const asset = compilation.assets[assetName];
                  if (asset) {
                    const source = asset.source();
                    return {
                      tagName: 'script',
                      innerHTML: source,
                      closeTag: true,
                      voidTag: false,
                      attributes: {}
                    };
                  }
                }
                return tag;
              });

            args.headTags = inline(args.headTags);
            args.bodyTags = inline(args.bodyTags);
            return args;
          }
        );
      }
    );
  }
}

module.exports = InlineRuntimePlugin;
