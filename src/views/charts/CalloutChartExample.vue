<template>
  <CChartLine
    :datasets="defaultDatasets"
    :options="defaultOptions"
    :labels="['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']"
  />
</template>

<script>
import { CChartLine } from '@coreui/coreui-vue-chartjs'
import { customTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'
import { getColor } from '@coreui/coreui/dist/js/coreui-utilities'

export default {
  components: {
    CChartLine
  },
  props: ['data', 'borderColor'],
  computed: {
    defaultDatasets () {
      return [
        {
          backgroundColor: 'transparent',
          borderColor: getColor(this.borderColor) || '#c2cfd6',
          data: this.data
        }
      ]
    },
    defaultOptions () {
      return {
        tooltips: {
          enabled: false,
          custom: customTooltips,
          intersect: true,
          mode: 'index',
          position: 'nearest',
          callbacks: {
            labelColor: function (tooltipItem, chart) {
              return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].backgroundColor }
            }
          }
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        },
        elements: {
          line: {
            borderWidth: 2
          },
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          }
        },
        legend: {
          display: false
        }
      }
    }
  },

  methods: {
    getVariant (val, el) {
      return val[0] === '#' ? val : getStyle(`--${val}`, el)
    }
  }
}
</script>
