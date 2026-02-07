<script setup>
import { CChartDoughnut } from '@coreui/vue-chartjs'

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
  <CChartDoughnut :data="data" />
</template>
