<script>
import { Line } from 'vue-chartjs'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'
import { generatedLabels, generatedBackgroundColor, generatedBorderColor, generatedPointHoverBackgroundColor, generatedOptions } from '@/mixins/charts/chartMixins'

export default {
  name: 'LineChart1',
  extends: Line,
  mixins: [generatedLabels, generatedBackgroundColor, generatedBorderColor, generatedPointHoverBackgroundColor, generatedOptions],
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
    borderColor:{
      type: String,
      default: 'rgba(255,255,255,.55)'
    },
    labels: Array,
    backgroundColor:{
      type: String,
      default: 'transparent'
    },
    pointHoverBackgroundColor:{
      type: String,
      default: 'transparent'
    },
    options:Object,
    finalOptions:{
      type: Object,
      default: () => ({
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
          line: {
            borderWidth: 2
          },
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4
          }
        }
      })
    }
  },
  mounted () {
    const datasets = [
      {
        label: this.label,
        borderColor: this.generatedBorderColor,
        backgroundColor: this.generatedBackgroundColor,
        pointHoverBackgroundColor: this.generatedPointHoverBackgroundColor,
        data: this.data
      }
    ]
    this.renderChart(
      {
        labels: this.generatedLabels,
        datasets: datasets
      },
      this.generatedOptions
    )
  },
}
</script>
