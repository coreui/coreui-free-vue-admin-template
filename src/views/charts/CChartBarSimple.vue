<template>
  <CChartBar
    :data="computedData"
  />
</template>

<script>
import { CChartBar } from '@coreui/vue-chartjs'
import { getColor, deepObjectsMerge } from '@coreui/utils/src'
export default {
  name: 'CChartBarSimple',
  components: { CChartBar },
  props: {
    ...CChartBar.props,
    backgroundColor: {
      type: String,
      default: '#f87979'
    },
    pointHoverBackgroundColor: String,
    dataPoints: {
      type: Array,
      default: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]
    },
    label: {
      type: String,
      default: 'Sales'
    },
    pointed: Boolean
  },
  computed: {
    defaultOptions () {
      return {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        }
      }
    },
    computedData () {
      return {
        labels: ['4','5','6','7','8','9','10','11','12','13','14','15'],
        datasets: [
          {
            data: this.dataPoints,
            backgroundColor: getColor(this.backgroundColor),
            pointHoverBackgroundColor: getColor(this.pointHoverBackgroundColor),
            label: this.label,
            barPercentage: 0.5,
            categoryPercentage: 1
          }
        ],
        options: this.defaultOptions
      }     
    },
  }
}
</script>