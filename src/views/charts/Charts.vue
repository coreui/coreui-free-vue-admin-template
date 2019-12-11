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
          <CChartLineExample/>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>Bar Chart</CCardHeader>
        <CCardBody><CChartBarExample/></CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>Doughnut Chart</CCardHeader>
        <CCardBody><CChartDoughnutExample/></CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>Radar Chart</CCardHeader>
        <CCardBody><CChartRadarExample/></CCardBody>
      </CCard>
      <CCard>
         <CCardHeader>Pie Chart</CCardHeader>
        <CCardBody><CChartPieExample/></CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>Polar Area Chart</CCardHeader>
        <CCardBody><CChartPolarAreaExample/></CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>Simple line chart</CCardHeader>
        <CCardBody>
          <CChartLineSimple border-color="success" labels="months"/>
        </CCardBody>        
      </CCard>
      <CCard>
        <CCardHeader>Simple pointed chart</CCardHeader>
        <CCardBody><CChartLineSimple pointed border-color="warning"/></CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>Simple bar chart</CCardHeader>
        <CCardBody><CChartBarSimple background-color="danger"/></CCardBody>        
      </CCard>
    </CCardGroup>
  </div>
</template>

<script>
import * as Charts from './index.js'
export default {
  name: 'Charts',
  components: {
    ...Charts
  }
}
</script>
