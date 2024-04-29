<script setup>
import { CChartPie } from '@coreui/vue-chartjs'

const data = {
  labels: ['VueJs', 'EmberJs', 'VueJs', 'AngularJs'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10],
    },
  ],
}
</script>

<template>
  <CChartPie :data="data" />
</template>
