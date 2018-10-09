<template>
  <b-card no-body :class="cardClasses">
    <b-card-body class="pb-0">
      <slot></slot>
      <h4 class="mb-0">{{header}}</h4>
      <p>{{text}}</p>
    </b-card-body>
    <card-line1-chart-example v-if="chartType == 'chart1'" chartId="card-chart-01" class="chart-wrapper px-3" style="height:70px;" :height="chartHeight"/>
    <card-line2-chart-example v-if="chartType == 'chart2'"chartId="card-chart-02" class="chart-wrapper px-3" style="height:70px;" :height="chartHeight"/>
    <card-line3-chart-example v-if="chartType == 'chart3'"chartId="card-chart-03" class="chart-wrapper" style="height:70px;" :height="chartHeight"/>
    <card-bar-chart-example v-if="chartType == 'chart4'" chartId="card-chart-04" class="chart-wrapper px-3" style="height:70px;" :height="chartHeight"/>
  </b-card>
</template>

<script>
import CardLine1ChartExample from './../dashboard/CardLine1ChartExample'
import CardLine2ChartExample from './../dashboard/CardLine2ChartExample'
import CardLine3ChartExample from './../dashboard/CardLine3ChartExample'
import CardBarChartExample from './../dashboard/CardBarChartExample'

export default {
  components:{
    CardLine1ChartExample,
    CardLine2ChartExample,
    CardLine3ChartExample,
    CardBarChartExample
  },
  name: 'Widget06',
  data () {
    return{
      backgroundColor: '',
    }
  },
  created ()  {
  },
  props: {
    cardClasses: {
      type: String,
      default: ''
    },
    header: {
      type: String,
      default: 'header|string'
    },
    text: {
      type: String,
      default: 'text|string'
    },
    chartType:{
      type: String,
      default: 'chart1'
    },
    chartHeight:{
      type: Number,
      default: 70
    },
  }
}
</script>
