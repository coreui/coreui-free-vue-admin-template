<template>
  <div>
    <LineChart
    :options="chartOptions"
  />
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue'
export default {
  components: { LineChart: Chart },
   data() {
      return {
        chartOptions: {
          chart: {
            type: 'spline'
          },
          title: {
            text: 'Line chart'
          },
          series: [{
            data: [10, 0, 8, 2, 6, 4, 5, 5]
          }]
        },
      title: ''
    }
  }
}
</script>
