<script setup>
import { CChartPolarArea } from '@coreui/vue-chartjs'

const data = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(118, 75, 162, 0.5)',
      pointBackgroundColor: 'rgba(118, 75, 162, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: 'rgba(118, 75, 162, 1)',
      pointHoverBorderColor: 'rgba(118, 75, 162, 1)',
      data: [65, 59, 90, 81, 56, 55, 40],
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'rgba(66, 230, 149, 0.5)',
      pointBackgroundColor: 'rgba(66, 230, 149, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: 'rgba(66, 230, 149, 1)',
      pointHoverBorderColor: 'rgba(66, 230, 149, 1)',
      data: [28, 48, 40, 19, 96, 27, 100],
    },
  ],
  options: {
    aspectRatio: 1.5,
  },
}
</script>

<template>
  <CChartPolarArea :data="data" />
</template>
