<template>
  <CChartBar :data="defaultData" />
</template>

<script>
import { CChartBar } from '@coreui/vue-chartjs'
export default {
  name: 'CChartBarExample',
  components: { CChartBar },
  computed: {
    defaultData() {
      return {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 12],
          },
        ],
      }
    },
  },
}
</script>
