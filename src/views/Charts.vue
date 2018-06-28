<template>
  <div class="animated fadeIn">
    <b-card-group columns class="card-columns">
      <b-card header="Line Chart">
        <div class="chart-wrapper">
          <line-example chartId="chart-line-01"/>
        </div>
      </b-card>
      <b-card header="Bar Chart">
        <div class="chart-wrapper">
          <bar-example chartId="chart-bar-01"/>
        </div>
      </b-card>
      <b-card header="Doughnut Chart">
        <div class="chart-wrapper">
          <doughnut-example chartId="chart-doughnut-01"/>
        </div>
      </b-card>
      <b-card header="Radar Chart">
        <div class="chart-wrapper">
          <radar-example chartId="chart-radar-01"/>
        </div>
      </b-card>
      <b-card header="Pie Chart">
        <div class="chart-wrapper">
          <pie-example chartId="chart-pie-01"/>
        </div>
      </b-card>
      <b-card header="Polar Area Chart">
        <div class="chart-wrapper">
          <polar-area-example chartId="chart-polar-area-01"/>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>
<script>
import BarExample from './charts/BarExample'
import LineExample from './charts/LineExample'
import DoughnutExample from './charts/DoughnutExample'
import RadarExample from './charts/RadarExample'
import PieExample from './charts/PieExample'
import PolarAreaExample from './charts/PolarAreaExample'

export default {
  name: 'charts',
  components: {
    BarExample,
    LineExample,
    DoughnutExample,
    RadarExample,
    PieExample,
    PolarAreaExample
  }
}
</script>
