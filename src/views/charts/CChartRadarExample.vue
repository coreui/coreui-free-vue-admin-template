<template>
  <CChartRadar :data="defaultData" />
</template>

<script>
import { CChartRadar } from '@coreui/vue-chartjs'
export default {
  name: 'CChartRadarExample',
  components: { CChartRadar },
  computed: {
    defaultData() {
      return {
        labels: [
          'Eating',
          'Drinking',
          'Sleeping',
          'Designing',
          'Coding',
          'Cycling',
          'Running',
        ],
        datasets: [
          {
            label: '2020',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            tooltipLabelColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40],
          },
          {
            label: '2021',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            tooltipLabelColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100],
          },
        ],
        options: {
          aspectRatio: 1.5,
        },
      }
    },
  },
}
</script>
