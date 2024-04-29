<script setup>
import { CChartDoughnut } from '@coreui/vue-chartjs'

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
  <CChartDoughnut :data="data" />
</template>
