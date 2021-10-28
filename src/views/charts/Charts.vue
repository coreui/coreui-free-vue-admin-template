<template>
  <CRow>
    <CCol :xs="12">
      <DocsCallout
        name="Chart"
        href="components/chart"
        content="React wrapper component for Chart.js 3.0, the most popular charting library."
      />
    </CCol>
    <CCol :md="6" class="mb-4">
      <CCard>
        <CCardHeader> Line Chart </CCardHeader>
        <CCardBody>
          <CChartLineExample />
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :md="6" class="mb-4">
      <CCard>
        <CCardHeader>Bar Chart</CCardHeader>
        <CCardBody><CChartBarExample /></CCardBody>
      </CCard>
    </CCol>
    <CCol :md="6" class="mb-4">
      <CCard>
        <CCardHeader>Doughnut Chart</CCardHeader>
        <CCardBody><CChartDoughnutExample /></CCardBody>
      </CCard>
    </CCol>
    <CCol :md="6" class="mb-4">
      <CCard>
        <CCardHeader>Radar Chart</CCardHeader>
        <CCardBody><CChartRadarExample /></CCardBody>
      </CCard>
    </CCol>
    <CCol :md="6" class="mb-4">
      <CCard>
        <CCardHeader>Pie Chart</CCardHeader>
        <CCardBody><CChartPieExample /></CCardBody>
      </CCard>
    </CCol>
    <CCol :md="6" class="mb-4">
      <CCard>
        <CCardHeader>Polar Area Chart</CCardHeader>
        <CCardBody><CChartPolarAreaExample /></CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import * as Charts from './index.js'
export default {
  name: 'Charts',
  components: {
    ...Charts,
  },
}
</script>
