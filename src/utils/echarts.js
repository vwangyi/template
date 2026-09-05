/**
 * echarts 按需引入（模板中目前没有使用图表，需要时再引入，避免 900KB+ 的全量包进主包）
 *
 * 用法（在需要的页面里）：
 *   <template>
 *     <v-chart :option="option" autoresize style="height: 300px" />
 *   </template>
 *   <script setup>
 *   import VChart from '@/utils/echarts';
 *   const option = { xAxis: {...}, yAxis: {...}, series: [{ type: 'line', data: [...] }] };
 *   </script>
 *
 * 如果用到下面没注册的图表/组件，在对应 import 里补上即可，不要改回 `import 'echarts'` 全量引入
 */
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
// 按需注册图表（常用的三种，不够再加）
import { LineChart, BarChart, PieChart } from 'echarts/charts';
// 按需注册组件
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
import VChart from 'vue-echarts';

use([
  CanvasRenderer,
  LineChart,
  BarChart,
  PieChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  DatasetComponent,
  TransformComponent
]);

export default VChart;
