<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const chart = ref(null);
const option = ref({

title: {
  text: 'Line Population'
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
  data: ['Surat Berita', 'Surat Penting', 'Surat Rahasia']
},
series: [
  {
    name: 'Januari',
    type: 'line',
    data: [18203, 23489, 29034]
  },
  {
    name: 'Februari',
    type: 'line',
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