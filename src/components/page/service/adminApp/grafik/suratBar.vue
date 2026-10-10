<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';

const chart = ref<HTMLElement | null>(null);
let myChart: echarts.ECharts | null = null;

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',];
const minuman = ['Matcha Latte', 'Hot Kopi Latte', 'Cappuccino', 'Espresso'];

const option: echarts.EChartsOption = {
  title: {
    text: '',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' }
  },
  legend: {
    type: 'scroll',
    bottom: 0
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '15%',
    containLabel: true
  },
  xAxis: {
    type: 'category', // 1. Ganti ke category
    data: months, // 2. Isinya 12 bulan
    axisLabel: { rotate: 30 } // biar ga numpuk kalau 12
  },
  yAxis: {
    type: 'value' // 3. Ganti ke value
  },
  series: minuman.map((item, i) => { // 4. Sekarang series = per menu
    const colors = ['#3b82f6','#22c55e','#f59e0b','#ef4444'];
    return {
      name: item, // nama menu
      type: 'bar',
      barWidth: 6,
      data: [ // data 12 bulan untuk 1 menu
        1800 + i * 1000,
        1190 + i * 100,
        2100 + i * 1000,
        2200 + i * 1000,
        2300 + i * 1000,
        2000 + i * 1000,
      ],
      itemStyle: {
        color: colors[i],
        borderRadius: [2, 2, 0, 0] // sudut atas melengkung
      }
    }
  })
};

onMounted(() => {
  if (chart.value) {
    myChart = echarts.init(chart.value);
    myChart.setOption(option);
    window.addEventListener('resize', () => myChart?.resize());
  }
});
onUnmounted(() => {
  window.removeEventListener('resize', () => myChart?.resize());
  myChart?.dispose();
});
</script>

<template>
  <div>
    <div ref="chart" class="items-center" style="height:400px;"></div>
  </div>
</template>