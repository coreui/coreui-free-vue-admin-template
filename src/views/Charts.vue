<template>
  <div class="animated fadeIn">
    <CCardGroup columns class="card-columns">
      <CCard header="Line Chart">
        <LineExample/>
      </CCard>
      <CCard header="Bar Chart">
        <BarExample/>
      </CCard>
      <CCard header="Doughnut Chart">
        <DoughnutExample/>
      </CCard>
      <CCard header="Radar Chart">
        <RadarExample/>
      </CCard>
      <CCard header="Pie Chart">
        <PieExample/>
      </CCard>
      <CCard header="Polar Area Chart">
        <PolarAreaExample/>
      </CCard>
      <CCard header="Simple line chart">
        <CSimpleLineChart style="height:80px" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                     label='Sales' borderColor='success'/>
      </CCard>
      <CCard header="Simple pointed chart">
        <CSimplePointedChart class='px-3' :data='[65, 59, 84, 84, 51, 55, 40]'
                     :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
                     style='height:80px' label='Members' pointHoverColor='warning' borderColor='warning'/>
      </CCard>
      <CCard header="Simple bar chart">
        <CSimpleBarChart style="height:80px" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                    label='Sales' color='danger'/>
      </CCard>
    </CCardGroup>
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
