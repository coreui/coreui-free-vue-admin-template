<template>
  <CChartPie :data="defaultData" />
</template>

<script>
import { CChartPie } from '@coreui/vue-chartjs'
export default {
  name: 'CChartPieExample',
  components: { CChartPie },
  computed: {
    defaultData() {
      return {
        labels: ['VueJs', 'EmberJs', 'VueJs', 'AngularJs'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [40, 20, 80, 10],
          },
        ],
      }
    },
  },
}
</script>
