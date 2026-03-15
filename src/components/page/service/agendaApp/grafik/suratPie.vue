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
      data: ['Sudah Selesai', 'Masih Proses', 'Disposisi']
    },
    series: [
      {
        name: 'Grafik Pie',
        type: 'pie',
        data: [
          { value: 5, name: 'Sudah Selesai' },
          { value: 6, name: 'Masih Proses' },
          { value: 15, name: 'Disposisi' },
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