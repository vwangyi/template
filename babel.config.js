module.exports = {
  presets: [
    // 等价原 @vue/cli-plugin-babel/preset（@vue/babel-preset-app）的核心行为：
    // 按使用注入 polyfill，core-js 3
    process.env.NODE_ENV === 'test'
      ? ['@babel/preset-env', { targets: { node: 'current' } }]
      : ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }],
    // Vue2 JSX（原 vue-cli 预设检测到 JSX 依赖时自动启用；
    // 这里显式启用，Sidebar/Item.vue 的函数式组件 render 依赖它）
    '@vue/babel-preset-jsx'
  ],
  env: {
    development: {
      // babel-plugin-dynamic-import-node 会把所有 import() 转为 require()，
      // 页面较多时可显著提升热更新速度
      plugins: ['dynamic-import-node']
    }
  },
  plugins: [
    // 减少冗余 helper 代码，配合 dependencies 中的 @babel/runtime
    '@babel/plugin-transform-runtime'
  ]
};
