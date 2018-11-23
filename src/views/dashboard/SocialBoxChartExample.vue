<script>
import { Line } from '@coreui/vue/src/extends/BaseCharts'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'

export default {
  name: 'SocialBoxChartExample',
  extends: Line,
  props: {
    data: {
      type: Array,
      default: () => [0, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]
    },
    height: {
      type: String,
      default: '100'
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
    }
  },
  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: this.label,
          backgroundColor: 'rgba(255,255,255,.1)',
          borderColor: 'rgba(255,255,255,.55)',
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: this.data
        }
      ]
    }, {
      tooltips: {
        enabled: false,
        custom: CustomTooltips
      },
      responsive: true,
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
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3
        }
      }
    })
  }
}
</script>
