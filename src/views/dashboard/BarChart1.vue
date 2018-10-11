<script>
import { Bar } from 'vue-chartjs'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'

export default {
  extends: Bar,
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
    backgroundColor:{
      type: String,
      default: 'rgba(255,255,255,.3)'
    },
    pointHoverBackgroundColor: String,
  },
  mounted () {
    const dataset = [
      {
        label: this.label,
        backgroundColor: this.backgroundColor,
        borderColor: 'transparent',
        data: this.data
      }
    ]
    this.renderChart(
      {
        labels: this.labels,
        datasets: dataset
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
          xAxes: [{
            display: false,
            categoryPercentage: 1,
            barPercentage: 0.5
          }],
          yAxes: [{
            display: false
          }]
        }
      }
    )
  }
}
</script>
