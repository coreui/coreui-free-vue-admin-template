<template>
  <div class="animated fadeIn">
    <CCardGroup columns class="card-columns cols-2">
      <CCard headerHtml="Line Chart" bodyWrapper>
        <CChartLineExample/>
      </CCard>
      <CCard headerHtml="Bar Chart" bodyWrapper>
        <CChartBarExample/>
      </CCard>
      <CCard headerHtml="Doughnut Chart" bodyWrapper>
        <CChartDoughnutExample/>
      </CCard>
      <CCard headerHtml="Radar Chart" bodyWrapper>
        <CChartRadarExample/>
      </CCard>
      <CCard headerHtml="Pie Chart" bodyWrapper>
        <CChartPieExample/>
      </CCard>
      <CCard headerHtml="Polar Area Chart" bodyWrapper>
        <CChartPolarAreaExample/>
      </CCard>
      <CCard headerHtml="Simple line chart" bodyWrapper>
        <CChartLineSimple borderColor="success" labels="months"/>
      </CCard>
      <CCard headerHtml="Simple pointed chart" bodyWrapper>
        <CChartLineSimple pointed borderColor="warning"/>
      </CCard>
      <CCard headerHtml="Simple bar chart" bodyWrapper>
        <CChartBarSimple backgroundColor="danger"/>
      </CCard>
    </CCardGroup>
  </div>
</template>
<script>
import * as Charts from './charts/index.js'

export default {
  name: 'Charts',
  components: {
    ...Charts
  }
}
</script>
