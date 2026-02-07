<script setup>
import { CChartLine } from '@coreui/vue-chartjs'

const data = {
  labels: ['months', 'a', 'b', 'c', 'd'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: 'rgba(118, 75, 162, 0.9)',
      borderColor: '#764ba2',
      pointBackgroundColor: '#764ba2',
      pointBorderColor: '#fff',
      data: [30, 39, 10, 50, 30, 70, 35],
    },
    {
      label: 'Data Two',
      backgroundColor: 'rgba(66, 230, 149, 0.9)',
      borderColor: '#42e695',
      pointBackgroundColor: '#42e695',
      pointBorderColor: '#fff',
      data: [39, 80, 40, 35, 40, 20, 45],
    },
  ],
}
</script>

<template>
  <CChartLine :data="data" />
</template>
