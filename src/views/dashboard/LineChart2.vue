<script>
import { Line } from 'vue-chartjs'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities'
const defaultBorderColor = 'rgba(255,255,255,.55)'

export default {
  extends: Line,
  props: {
    data: {
      type: Array,
      default: () => [0, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]
    },
    height: {
      type: Number,
      default: 40
    },
    label:{
      type: String,
      default: 'label|string'
    },
    labels:{
      type: Array,
      default () {
        return(['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'])
      }
    },
    borderColor:{
      type: String,
      default: defaultBorderColor
    },
    backgroundColor:{
      type: String,
      default: 'transparent'
    },
    pointHoverBackgroundColor: String,
  },
  computed:{
    hoverBackgroundColor () {
     if(this.pointHoverBackgroundColor !== undefined)
       return this.pointHoverBackgroundColor
     if(this.borderColor !== defaultBorderColor)
       return this.borderColor
     return 'transparent'
    }
  },
  mounted () {
    const datasets1 = [
      {
        label: this.label,
        borderColor: this.borderColor,
        backgroundColor: this.backgroundColor,
        pointHoverBackgroundColor: this.hoverBackgroundColor,
        data: this.data
      }
    ]

    this.renderChart(
      {
        labels: this.labels,
        datasets: datasets1
      },
      {
        tooltips: {
          enabled: false,
          custom: CustomTooltips
        },
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
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
                min: Math.min.apply(Math, datasets1[0].data) - 5,
                max: Math.max.apply(Math, datasets1[0].data) + 5
              }
            }
          ]
        },
        elements: {
          line: {
            tension: 0.00001,
            borderWidth: 1
          },
          point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4
          }
        }
      }
    )
  }
}
</script>
