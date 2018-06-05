<script>
import { Line } from 'vue-chartjs'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities'

export default {
  components: {
    CustomTooltips
  },
  extends: Line,
  props: ['data', 'height', 'width', 'variant'],
  mounted () {
    this.renderChart({
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
        {
          backgroundColor: 'transparent',
          borderColor: this.getVariant(this.variant) || '#c2cfd6',
          data: this.data
        }
      ]
    }, {
      responsive: true,
      tooltips: {
        enabled: false,
        custom: CustomTooltips,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
          labelColor: function (tooltipItem, chart) {
            return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
          }
        }
      },
      maintainAspectRatio: true,
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
    })
  },
  methods: {
    getVariant (val, el) {
      return val[0] === '#' ? val : getStyle(`--${val}`, el)
    }
  }
}
</script>
