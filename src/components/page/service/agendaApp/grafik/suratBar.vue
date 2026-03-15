
<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import * as echarts from 'echarts';
  
  const chart = ref(null);
  const option = ref({
 
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['Pangdam', 'Kesdam', 'Aspers']
  },
  series: [
    {
      name: 'Januari',
      type: 'bar',
      data: [18203, 23489, 29034]
    },
    {
      name: 'Februari',
      type: 'bar',
      data: [19325, 23438, 31000]
    }
  ]


  });
  
  onMounted(() => {
    const myChart = echarts.init(chart.value);
    myChart.setOption(option.value);
  });

  
</script>

<template>
  <div>
    <div ref="chart" class="items-center" style="height:400px;"></div>
  </div>
</template>