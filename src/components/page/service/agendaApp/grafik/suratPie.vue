<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';

const chart = ref<HTMLElement | null>(null);
let myChart: echarts.ECharts | null = null;

const option = ref<echarts.EChartsOption>({
  title: {
    text: '',
    left: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c} ({d}%)' // nama : value : %
  },
  legend: {
    orient: 'horizontal',
    bottom: '0',
    data: ['Matcha Latte', 'Hot Kopi Latte', 'Cappuccino', 'Espresso']
  },
  series: [
    {
      name: 'Status',
      type: 'pie', // 1. Ganti dari doughnut ke pie
      radius: ['40%', '70%'], // 2. Ini yg bikin jadi doughnut/bolong
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 0,
        borderColor: '#fff',
        borderWidth: 0,
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '18',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 220, name: 'Matcha Latte' },
        { value: 56, name: 'Hot Kopi Latte' },
        { value: 159, name: 'Cappuccino' },
        { value: 359, name: 'Espresso' },
      ]
    }
  ]
});

onMounted(() => {
  if (chart.value) {
    myChart = echarts.init(chart.value);
    myChart.setOption(option.value);

    // biar responsive
    window.addEventListener('resize', () => {
      myChart?.resize();
    });
  }
});

onUnmounted(() => {
  myChart?.dispose(); // buang chart pas component di destroy
});
</script>

<template>
    <div>
        <div ref="chart" class="items-center" style="height:400px;"></div>
    </div>
</template>