<script setup>
import { CChartPie } from '@coreui/vue-chartjs'

const data = {
  labels: ['VueJs', 'EmberJs', 'VueJs', 'AngularJs'],
  datasets: [
    {
      backgroundColor: ['#764ba2', '#42e695', '#ff416c', '#56ccf2'],
      data: [40, 20, 80, 10],
    },
  ],
}
</script>

<template>
  <CChartPie :data="data" />
</template>
