<template>
  <CChartLine
    :data="computedData"
  />
</template>

<script>
import { CChartLine } from '@coreui/vue-chartjs'
import { getColor, deepObjectsMerge } from '@coreui/utils/src'
export default {
  name: 'CChartLineSimplePointed',
  components: { CChartLine },
  props: {
    ...CChartLine.props,
    borderColor: {
      type: String,
      default: 'rgba(255,255,255,.55)'
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    },
    dataPoints: {
      type: Array,
      default: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]
    },
    label: {
      type: String,
      default: 'Sales'
    },
    pointed: {
      type: Boolean,
      default: true
    },
    pointHoverBackgroundColor: String
  },
  computed: {
    pointHoverColor () {
      if (this.pointHoverBackgroundColor) {
        return this.pointHoverBackgroundColor
      } else if (this.backgroundColor !== 'transparent') {
        return this.backgroundColor
      }
      return this.borderColor
    },
    computedData () {
      return {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
        datasets: [
          {
            data: this.dataPoints,
            borderColor: getColor(this.borderColor),
            backgroundColor: getColor(this.backgroundColor),
            pointBackgroundColor: getColor(this.pointHoverColor),
            pointHoverBackgroundColor: getColor(this.pointHoverColor),
            label: this.label
          }
        ],
        options: {
          scales: {
            xAxes: [
              {
                offset: true,
                gridLines: {
                  color: 'transparent',
                  zeroLineColor: 'transparent'
                },
                ticks: {
                  fontSize: 2,
                  fontColor: 'transparent'
                }
              }
            ],
            yAxes: [
              {
                display: false,
                ticks: {
                  display: false,
                  min: Math.min.apply(Math, this.dataPoints) - 5,
                  max: Math.max.apply(Math, this.dataPoints) + 5
                }
              }
            ]
          },
          elements: {
            line: {
              borderWidth: 1
            },
            point: {
              radius: 4,
              hitRadius: 10,
              hoverRadius: 4
            }
          }
        }
      }
    },
  }
}
</script>