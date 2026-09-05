import { createApp } from 'vue';
import { createPinia } from 'pinia';
import persistentState from 'pinia-plugin-persistedstate';
// antd 已改为按需引入（见 webpack.config.js 的 unplugin-vue-components）
// 模板里直接写 <a-button> 等即可，message 等 JS API 需显式 import
import 'ant-design-vue/dist/reset.css';
// echarts 已移出主包：需要图表时在页面里局部引入 @/utils/echarts
import router from './router';
import App from './App';
import '@/styles/index.scss';
import '@/assets/iconfont/iconfont.css';
import '@/router/permission';

// import VxeUITable from 'vxe-table';
// import 'vxe-table/es/style.css';

// import '@/utils/check-update';
const pinia = createPinia();
pinia.use(persistentState);
const app = createApp(App);
// app.use(VxeUITable);
app.use(pinia);
app.use(router);
app.mount('#app');

// 导出应用实例（用于测试或其他场景）
export { app, pinia };
