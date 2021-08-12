<template>
  <CRow>
    <CCol md="6" class="mt-4">
      <CCard>
        <CCardHeader>
          Line Chart
        </CCardHeader>
        <CCardBody>
          <CChartLineExample/>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol md="6" class="mt-4">
      <CCard>
        <CCardHeader>Bar Chart</CCardHeader>
        <CCardBody><CChartBarExample/></CCardBody>
      </CCard>
    </CCol>
    <CCol md="6" class="mt-4">
      <CCard>
        <CCardHeader>Doughnut Chart</CCardHeader>
        <CCardBody><CChartDoughnutExample/></CCardBody>
      </CCard>
    </CCol>
    <CCol md="6" class="mt-4">
      <CCard>
        <CCardHeader>Radar Chart</CCardHeader>
        <CCardBody><CChartRadarExample/></CCardBody>
      </CCard>
    </CCol>
    <CCol md="6" class="mt-4">
      <CCard>
         <CCardHeader>Pie Chart</CCardHeader>
        <CCardBody><CChartPieExample/></CCardBody>
      </CCard>
    </CCol>
    <CCol md="6" class="mt-4">
      <CCard>
        <CCardHeader>Polar Area Chart</CCardHeader>
        <CCardBody><CChartPolarAreaExample/></CCardBody>
      </CCard>
    </CCol>
    <CCol md="6" class="mt-4">
      <CCard>
        <CCardHeader>Simple line chart</CCardHeader>
        <CCardBody>
          <CChartLineSimple border-color="success" labels="months"/>
        </CCardBody>        
      </CCard>
    </CCol>
    <!--
    <CCol md="6" class="mt-4">
      <CCard>
        <CCardHeader>Simple pointed chart</CCardHeader>
        <CCardBody><CChartLineSimplePointed :pointed="true" border-color="warning"/></CCardBody>
      </CCard>
    </CCol>
    -->
    <CCol md="6" class="mt-4">
      <CCard>
        <CCardHeader>Simple bar chart</CCardHeader>
        <CCardBody><CChartBarSimple background-color="danger"/></CCardBody>        
      </CCard>
    </CCol>
  </CRow>
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