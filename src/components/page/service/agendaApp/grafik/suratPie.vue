<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import * as echarts from 'echarts';
          
  const chart = ref(null);
  const option = ref({
    title: {
      text: ''
    },
    tooltip: {},
    legend: {
      data: ['Approved', 'Masih proses', 'Ditolak']
    },
    series: [
      {
        name: 'Grafik Pie',
        type: 'pie',
        data: [
          { value: 5, name: 'Approved' },
          { value: 5, name: 'Masih proses' },
          { value: 2, name: 'Ditolak' },
        ]
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