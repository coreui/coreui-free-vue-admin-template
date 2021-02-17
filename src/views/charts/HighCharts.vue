<template>
  <div>
    <CCardGroup columns class="card-columns cols-2">
      <CCard>
        <CCardHeader>
          Line Chart
          <div class="card-header-actions">
            <a 
              href="https://coreui.io/vue/docs/components/charts" 
              class="card-header-action" 
              rel="noreferrer noopener" 
              target="_blank"
            >
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <LineChart />
        </CCardBody>
      </CCard>
       <CCard>
        <CCardHeader>Bar Chart</CCardHeader>
        <CCardBody><BarChart/></CCardBody>
      </CCard>
      <!--<CCard>
        <CCardHeader>Doughnut Chart</CCardHeader>
        <CCardBody><CChartDoughnutExample/></CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>Radar Chart</CCardHeader>
        <CCardBody><CChartRadarExample/></CCardBody>
      </CCard> !-->
      <CCard>
         <CCardHeader>Pie Chart</CCardHeader>
        <CCardBody><PieChart/></CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>Area Chart</CCardHeader>
        <CCardBody><AreaChart/></CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>Activity Guage</CCardHeader>
        <CCardBody>
          <ActivityGuage />
        </CCardBody>        
      </CCard>
     <!-- <CCard>
        <CCardHeader>Simple pointed chart</CCardHeader>
        <CCardBody><CChartLineSimple pointed border-color="warning"/></CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>Simple bar chart</CCardHeader>
        <CCardBody><CChartBarSimple background-color="danger"/></CCardBody>        
      </CCard> -->
    </CCardGroup>
  </div>
</template>

<script>
import * as HighCharts from './HighCharts/index'
export default {
  name: 'HighCharts',
  components: {
    ...HighCharts
  }
}
</script>
