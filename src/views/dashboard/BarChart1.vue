<script>
import { Bar } from 'vue-chartjs'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'
import { generatedLabels, generatedBackgroundColor,generatedBorderColor, generatedOptions } from '@/mixins/charts/chartMixins'

export default {
  name: 'BarChart',
  extends: Bar,
  mixins: [generatedLabels, generatedBackgroundColor, generatedBorderColor, generatedOptions],
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
    backgroundColor:{
      type: String,
      default: 'rgba(0,0,0,.2)'
    },
    labels: Array,
    options:Object,
    finalOptions:{
      type: Object,
      default: () => ({
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
      })
    }
  },
  mounted () {
    const dataset = [
      {
        label: this.label,
        backgroundColor: this.generatedBackgroundColor,
        borderColor: this.generatedBorderColor,
        data: this.data
      }
    ]
    this.renderChart(
      {
        labels: this.generatedLabels,
        datasets: dataset
      },
      this.generatedOptions
    )
  }
}
</script>
