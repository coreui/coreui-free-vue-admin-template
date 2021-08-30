<template>
  <CChartPolarArea :data="defaultData" />
</template>

<script>
import { CChartPolarArea } from '@coreui/vue-chartjs'
export default {
  name: 'CChartPolarAreaExample',
  components: { CChartPolarArea },
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
            label: 'My First dataset',
            backgroundColor: 'rgba(179,181,198,0.5)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: 'rgba(179,181,198,1)',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40],
          },
          {
            label: 'My Second dataset',
            backgroundColor: 'rgba(255,99,132,0.5)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: 'rgba(255,99,132,1)',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
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
