<template>
  <div>
    <CCardGroup columns class="card-columns cols-2">
      <CCard>
        <CCardHeader>
          Line Chart
          <div class="card-header-actions">
            <a 
              href="https://coreui.io/vue/docs/3.0/components/Charts" 
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
      <CCard header-html="Bar Chart" body-wrapper>
        <CChartBarExample/>
      </CCard>
      <CCard header-html="Doughnut Chart" body-wrapper>
        <CChartDoughnutExample/>
      </CCard>
      <CCard header-html="Radar Chart" body-wrapper>
        <CChartRadarExample/>
      </CCard>
      <CCard header-html="Pie Chart" body-wrapper>
        <CChartPieExample/>
      </CCard>
      <CCard header-html="Polar Area Chart" body-wrapper>
        <CChartPolarAreaExample/>
      </CCard>
      <CCard header-html="Simple line chart" body-wrapper>
        <CChartLineSimple border-color="success" labels="months"/>
      </CCard>
      <CCard header-html="Simple pointed chart" body-wrapper>
        <CChartLineSimple pointed border-color="warning"/>
      </CCard>
      <CCard header-html="Simple bar chart" body-wrapper>
        <CChartBarSimple background-color="danger"/>
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
