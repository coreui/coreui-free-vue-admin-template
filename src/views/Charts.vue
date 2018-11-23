<template>
  <div class="animated fadeIn">
    <b-card-group columns class="card-columns">
      <b-card header="Line Chart">
        <line-example/>
      </b-card>
      <b-card header="Bar Chart">
        <bar-example/>
      </b-card>
      <b-card header="Doughnut Chart">
        <doughnut-example/>
      </b-card>
      <b-card header="Radar Chart">
        <radar-example/>
      </b-card>
      <b-card header="Pie Chart">
        <pie-example/>
      </b-card>
      <b-card header="Polar Area Chart">
        <polar-area-example/>
      </b-card>
      <b-card header="Simple line chart">
        <c-simple-line-chart style="height:80px" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                     label='Sales' borderColor='success'/>
      </b-card>
      <b-card header="Simple pointed chart">
        <c-simple-pointed-chart class='px-3' :data='[65, 59, 84, 84, 51, 55, 40]'
                     :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
                     style='height:80px' label='Members' pointHoverColor='warning' borderColor='warning'/>
      </b-card>
      <b-card header="Simple bar chart">
        <c-simple-bar-chart style="height:80px" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                    label='Sales' color='danger'/>
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
  name: 'Charts',
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
