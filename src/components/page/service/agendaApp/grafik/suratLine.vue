<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';

const chart = ref<HTMLElement | null>(null);
let myChart: echarts.ECharts | null = null;

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'];
const minuman = ['Matcha Latte', 'Hot Kopi Latte', 'Cappuccino', 'Espresso'];

const option: echarts.EChartsOption = {
  title: {
    text: 'Tren Penjualan 1 Tahun',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'line' } // 1. Ganti ke line biar ada garis bantu
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
    type: 'category',
    data: months,
    boundaryGap: false // 2. Biar garis mulai dari tepi
  },
  yAxis: {
    type: 'value'
  },
  series: minuman.map((item, i) => {
    const colors = ['#3b82f6','#22c55e','#f59e0b','#ef4444'];
    return {
      name: item,
      type: 'line', // 3. Ganti dari bar ke line
      smooth: true, // 4. Garis melengkung. false = garis patah lurus
      symbol: 'circle', // titik di tiap bulan
      symbolSize: 6,
      lineStyle: {
        width: 3,
        color: colors[i]
      },
      itemStyle: {
        color: colors[i],
        borderColor: '#fff',
        borderWidth: 2
      },
      areaStyle: { // 5. Opsional: kasih area gradient di bawah garis
        opacity: 0.1,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: colors[i] },
          { offset: 1, color: 'rgba(0,0,0,0)' }
        ])
      },
      data: [
        1800 + i * 1000,
        1190 + i * 100,
        2100 + i * 1000,
        2200 + i * 1000,
        2300 + i * 1000,
        2000 + i * 1000,
        22200 + i * 100,
        5000 + i * 100,
        6000 + i * 1000,
        2700 + i * 1000,
        2600 + i * 100,
        2900 + i * 1000,
      ],
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