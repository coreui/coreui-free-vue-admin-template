<template>
  <div class="animated fadeIn">
    <CCardGroup columns class="card-columns">
      <CCard headerHtml="Line Chart" bodyWrapper>
        <LineExample/>
      </CCard>
      <CCard headerHtml="Bar Chart" bodyWrapper>
        <BarExample/>
      </CCard>
      <CCard headerHtml="Doughnut Chart" bodyWrapper>
        <DoughnutExample/>
      </CCard>
      <CCard headerHtml="Radar Chart" bodyWrapper>
        <RadarExample/>
      </CCard>
      <CCard headerHtml="Pie Chart" bodyWrapper>
        <PieExample/>
      </CCard>
      <CCard headerHtml="Polar Area Chart" bodyWrapper>
        <PolarAreaExample/>
      </CCard>
      <CCard headerHtml="Simple line chart" bodyWrapper>
        <CSimpleLineChart style="height:80px" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                     label='Sales' borderColor='success'/>
      </CCard>
      <CCard headerHtml="Simple pointed chart" bodyWrapper>
        <CSimplePointedChart class='px-3' :data='[65, 59, 84, 84, 51, 55, 40]'
                     :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
                     style='height:80px' label='Members' pointHoverColor='warning' borderColor='warning'/>
      </CCard>
      <CCard headerHtml="Simple bar chart" bodyWrapper>
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
