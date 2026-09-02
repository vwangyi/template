"use strict";
(this["webpackChunkvue3_webpack5"] = this["webpackChunkvue3_webpack5"] || []).push([[792],{

/***/ 2699
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: app, pinia

// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-dom@3.5.42/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(5967);
// EXTERNAL MODULE: ./node_modules/.pnpm/pinia@4.0.3_@vue+devtools-api@8.2.1_typescript@5.9.3_vue@3.5.42_typescript@5.9.3_/node_modules/pinia/dist/pinia.js
var pinia = __webpack_require__(8395);
// EXTERNAL MODULE: ./node_modules/.pnpm/pinia-plugin-persistedstate@4.7.1_pinia@4.0.3_@vue+devtools-api@8.2.1_typescript@5.9.3_vue@3.5.42_typescript@5.9.3__/node_modules/pinia-plugin-persistedstate/dist/index.js
var dist = __webpack_require__(2671);
// EXTERNAL MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.42_typescript@5.9.3_/node_modules/ant-design-vue/es/index.js + 1185 modules
var es = __webpack_require__(2350);
// EXTERNAL MODULE: ./node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.42_typescript@5.9.3_/node_modules/ant-design-vue/dist/reset.css
var dist_reset = __webpack_require__(5389);
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-echarts@8.2.0_echarts@6.1.0_vue@3.5.42_typescript@5.9.3_/node_modules/vue-echarts/dist/index.js + 1 modules
var vue_echarts_dist = __webpack_require__(3023);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@6.1.0/node_modules/echarts/index.js + 432 modules
var echarts = __webpack_require__(1473);
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-router@5.3.0_@vue+compiler-sfc@3.5.42_pinia@4.0.3_@vue+devtools-api@8.2.1_typescrip_e24443e2e47763a05e67648b3c0d7bd0/node_modules/vue-router/dist/vue-router.js + 1 modules
var vue_router = __webpack_require__(2151);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-core@3.5.42/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(4772);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+reactivity@3.5.42/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(5908);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+shared@3.5.42/node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(6877);
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-router@5.3.0_@vue+compiler-sfc@3.5.42_pinia@4.0.3_@vue+devtools-api@8.2.1_typescrip_e24443e2e47763a05e67648b3c0d7bd0/node_modules/vue-router/dist/useApi-CUgTH_jn.js
var useApi_CUgTH_jn = __webpack_require__(1653);
;// ./node_modules/.pnpm/babel-loader@10.1.1_@babel+core@7.29.7_supports-color@8.1.1__webpack@5.110.2/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.42_vue@3.5.42_typescript@5.9.3__webpack@5.110.2/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[12].use[0]!./src/pages/HomeView/HomeView.vue?vue&type=script&setup=true&lang=js

var _hoisted_1 = {
  "class": "home"
};



/* harmony default export */ const HomeViewvue_type_script_setup_true_lang_js = ({
  __name: 'HomeView',
  setup: function setup(__props) {
    var route = (0,useApi_CUgTH_jn.t)();
    var router = (0,useApi_CUgTH_jn.n)();
    var list = (0,reactivity_esm_bundler/* ref */.KR)([]);
    function handleClickBtn(item) {
      router.push(item.path);
    }
    return function (_ctx, _cache) {
      var _component_a_button = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("a-button");
      return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)((0,reactivity_esm_bundler/* unref */.R1)(routes), function (item) {
        return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_a_button, {
          "class": "btn",
          key: item.path,
          onClick: function onClick($event) {
            return handleClickBtn(item);
          },
          type: "primary"
        }, {
          "default": (0,runtime_core_esm_bundler/* withCtx */.k6)(function () {
            return [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(item.meta.title), 1 /* TEXT */)];
          }),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"]);
      }), 128 /* KEYED_FRAGMENT */))]);
    };
  }
});
;// ./src/pages/HomeView/HomeView.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.5.42_vue@3.5.42_typescript@5.9.3__webpack@5.110.2/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(9184);
;// ./src/pages/HomeView/HomeView.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(HomeViewvue_type_script_setup_true_lang_js, [['__scopeId',"data-v-e551d3b6"]])

/* harmony default export */ const HomeView = (__exports__);
;// ./src/router/index.js


var routes = [{
  path: '/',
  name: 'HomeView',
  component: HomeView,
  meta: {
    title: '首页'
  }
}];

// const routes1 = [
//   {
//     path: '/',
//     name: 'HomeView',
//     component: HomeView,
//     meta: {
//       title: '首页'
//     }
//   },
//   {
//     path: '/files-upload',
//     name: 'FilesUpload',
//     component: () =>
//       import(
//         /* webpackChunkName: "FilesUpload" */ '@/pages/FilesUpload/FilesUpload.vue'
//       ),
//     meta: {
//       title: '大文件上传'
//     }
//   },

//   {
//     path: '/low-code-platform',
//     name: 'LowCodePlatform',
//     component: () =>
//       import(
//         /* webpackChunkName: "LowCodePlatform" */ '@/pages/LowCodePlatform/LowCodePlatform.vue'
//       ),
//     meta: {
//       title: '低代码'
//     }
//   },
//   {
//     path: '/antd-table',
//     name: 'AntdTable',
//     component: () =>
//       import(
//         /* webpackChunkName: "AntdTable" */ '@/pages/AntdTable/AntdTable.vue'
//       ),
//     meta: {
//       title: 'Antd 表格'
//     }
//   },
//   {
//     path: '/memory-leak',
//     name: 'MemoryLeak',
//     component: () =>
//       import(
//         /* webpackChunkName: "MemoryLeak" */ '@/pages/MemoryLeak/MemoryLeak.vue'
//       ),
//     meta: {
//       title: '内存泄露'
//     }
//   },
//   {
//     path: '/video-view',
//     name: 'VideoView',
//     component: () =>
//       import(
//         /* webpackChunkName: "VideoView" */ '@/pages/VideoView/VideoView.vue'
//       ),
//     meta: {
//       title: '视频页面'
//     }
//   },
//   {
//     path: '/virtual-list',
//     name: 'VirtualList',
//     component: () =>
//       import(
//         /* webpackChunkName: "VirtualList" */ '@/pages/VirtualList/VirtualList.vue'
//       ),
//     meta: {
//       title: '虚拟列表'
//     }
//   },
//   {
//     path: '/word-view',
//     name: 'WordView',
//     component: () =>
//       import(
//         /* webpackChunkName: "WordView" */ '@/pages/WordView/WordView.vue'
//       ),
//     meta: {
//       title: '单词'
//     }
//   },
//   {
//     path: '/waterfall-flow',
//     name: 'WaterfallFlow',
//     component: () =>
//       import(
//         /* webpackChunkName: "WaterfallFlow" */ '@/pages/WaterfallFlow/WaterfallFlow.vue'
//       ),
//     meta: {
//       title: '瀑布流'
//     }
//   },
//   {
//     path: '/editable-table',
//     name: 'EditableTable',
//     component: () =>
//       import(
//         /* webpackChunkName: "EditableTable" */ '@/pages/EditableTable/EditableTable.vue'
//       ),
//     meta: {
//       title: '可编辑表格'
//     }
//   },
//   {
//     path: '/canvas-signature',
//     name: 'CanvasSignature',
//     component: () =>
//       import(
//         /* webpackChunkName: "CanvasSignature" */ '@/pages/CanvasSignature/CanvasSignature.vue'
//       ),
//     meta: {
//       title: 'Canvas签名'
//     }
//   },
//   {
//     path: '/super-lotto',
//     name: 'SuperLotto',
//     component: () =>
//       import(
//         /* webpackChunkName: "SuperLotto" */ '@/pages/SuperLotto/SuperLotto.vue'
//       ),
//     meta: {
//       title: '大乐透'
//     }
//   },
//   {
//     path: '/multi-spec-goods',
//     name: 'MultiSpecGoods',
//     component: () =>
//       import(
//         /* webpackChunkName: "MultiSpecGoods" */ '@/pages/MultiSpecGoods/MultiSpecGoods.vue'
//       ),
//     meta: {
//       title: '多规格商品'
//     }
//   },
//   {
//     path: '/dynamic-form',
//     name: 'DynamicForm',
//     component: () =>
//       import(
//         /* webpackChunkName: "DynamicForm" */ '@/pages/DynamicForm/DynamicForm.vue'
//       ),
//     meta: {
//       title: '动态表单'
//     }
//   },
//   {
//     path: '/todo-list',
//     name: 'TodoList',
//     component: () =>
//       import(
//         /* webpackChunkName: "TodoList" */ '@/pages/TodoList/TodoList.vue'
//       ),
//     meta: {
//       title: '代办列表'
//     }
//   },
//   {
//     path: '/screen-saver',
//     name: 'ScreenSaver',
//     component: () =>
//       import(
//         /* webpackChunkName: "ScreenSaver" */ '@/pages/ScreenSaver/ScreenSaver.vue'
//       ),
//     meta: {
//       title: '屏保'
//     }
//   },
//   {
//     path: '/settings',
//     name: 'Settings',
//     component: () =>
//       import(
//         /* webpackChunkName: "SettingsView" */ '@/pages/SettingsView/SettingsView.vue'
//       ),
//     meta: {
//       title: '设置'
//     }
//   },
//   {
//     path: '/user-agreement',
//     name: 'UserAgreement',
//     component: () =>
//       import(
//         /* webpackChunkName: "UserAgreement" */ '@/pages/UserAgreement/UserAgreement.vue'
//       ),
//     meta: {
//       title: '用户协议'
//     }
//   },
//   {
//     path: '/demo-view',
//     name: 'DemoView',
//     component: () =>
//       import(
//         /* webpackChunkName: "DemoView" */ '@/pages/DemoView/DemoView.vue'
//       ),
//     meta: {
//       title: 'demo'
//     }
//   },
//   {
//     path: '/work-flow',
//     name: 'WorkFlow',
//     component: () =>
//       import(
//         /* webpackChunkName: "WorkFlow" */
//         '@/pages/WorkFlow/WorkFlow.vue'
//       ),
//     meta: {
//       title: '流程/工作流'
//     }
//   },
//   {
//     path: '/approval-process',
//     name: 'ApprovalProcess',
//     component: () =>
//       import(
//         /* webpackChunkName: "ApprovalProcess" */
//         '@/pages/ApprovalProcess/ApprovalProcess.vue'
//       ),
//     meta: {
//       title: '审批/审批流'
//     }
//   },
//   {
//     path: '/permission-setting',
//     name: 'PermissionSetting',
//     component: () =>
//       import(
//         /* webpackChunkName: "PermissionSetting" */
//         '@/pages/PermissionSetting/PermissionSetting.vue'
//       ),
//     meta: {
//       title: '权限设置'
//     }
//   },
//   {
//     path: '/web-socket',
//     name: 'WebSocket',
//     component: () =>
//       import(
//         /* webpackChunkName: "WebSocket" */
//         '@/pages/WebSocket/WebSocket.vue'
//       ),
//     meta: {
//       title: 'WebSocket / http轮询'
//     }
//   },
//   {
//     path: '/draggable-table',
//     name: 'DraggableTable',
//     component: () =>
//       import(
//         /* webpackChunkName: "DraggableTable" */
//         '@/pages/DraggableTable/DraggableTable.vue'
//       ),
//     meta: {
//       title: '拖拽生成表格'
//     }
//   },
//   {
//     path: '/count-down',
//     name: 'CountDown',
//     component: () =>
//       import(
//         /* webpackChunkName: "CountDown" */
//         '@/pages/CountDown/CountDown.vue'
//       ),
//     meta: {
//       title: '倒计时'
//     }
//   },
//   {
//     path: '/parabola-shop',
//     name: 'ParabolaShop',
//     component: () =>
//       import(
//         /* webpackChunkName: "ParabolaShop" */
//         '@/pages/ParabolaShop/ParabolaShop.vue'
//       ),
//     meta: {
//       title: '抛物线效果'
//     }
//   },
//   {
//     path: '/lyrics-scrolling',
//     name: 'LyricsScrolling',
//     component: () =>
//       import(
//         /* webpackChunkName: "LyricsScrolling" */
//         '@/pages/LyricsScrolling/LyricsScrolling.vue'
//       ),
//     meta: {
//       title: '歌词滚动'
//     }
//   }
// ];
var router = (0,vue_router/* createRouter */.aE)({
  history: (0,vue_router/* createWebHistory */.LA)(),
  // history模式
  // history: createWebHashHistory(), // hash模式
  routes: routes
});
/* harmony default export */ const src_router = (router);
;// ./src/App.jsx

function setup() {
  return function () {
    return (0,runtime_core_esm_bundler/* createVNode */.bF)((0,runtime_core_esm_bundler/* resolveComponent */.g2)("router-view"), null, null);
  };
}
/* harmony default export */ const App = ({
  setup: setup
});
;// ./src/router/permission.js

src_router.beforeEach(function (to, from, next) {
  next();
});
;// ./src/main.js













// import VxeUITable from 'vxe-table';
// import 'vxe-table/es/style.css';

// import '@/utils/check-update';
var main_pinia = (0,pinia/* createPinia */.Ey)();
main_pinia.use(dist/* default */.A);
var app = (0,runtime_dom_esm_bundler/* createApp */.Ef)(App);
app.component('vue-echarts', vue_echarts_dist/* default */.Ay);
// app.use(VxeUITable);
app.use(es/* default */.A);
app.use(main_pinia);
app.use(src_router);
app.mount('#app');

// 导出应用实例（用于测试或其他场景）


/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(moduleId))
/******/ __webpack_require__.O(0, [121], () => (__webpack_exec__(2699)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main_8ed269c9.bundle.js.map