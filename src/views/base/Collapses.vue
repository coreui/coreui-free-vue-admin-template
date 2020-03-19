<template>
  <CRow>
    <CCol col="12" md="6">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/>
          <strong> Bootstrap Collapse </strong>
          <div class="card-header-actions">
            <a 
              href="https://coreui.io/vue/docs/components/collapse" 
              class="card-header-action" 
              rel="noreferrer noopener" 
              target="_blank"
            >
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <CButton @click="collapse = !collapse" color="primary" class="mb-2">
            Toggle Collapse
          </CButton>
          <CCollapse :show="collapse" :duration="400">
            <CCard body-wrapper>
              <CCardText>Collapse contents Here</CCardText>
              <CButton  
                @click="innerCollapse = !innerCollapse" 
                size="sm" 
                color="secondary"
              >
                Toggle Inner Collapse
              </CButton>
              <CCollapse :show="innerCollapse" class="mt-2">
                <CCard body-wrapper>Hello!</CCard>
              </CCollapse>
            </CCard>
          </CCollapse>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol col="12" md="6">
      <CCard>
        <CCardHeader 
          @click="cardCollapse = !cardCollapse" 
          class="btn text-left"
        > 
          <strong>Collapsible card</strong>
        </CCardHeader>
        <CCollapse :show="cardCollapse">
          <CCardBody class="m-1">
            {{text}}
          </CCardBody>
          </CCollapse>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'Collapses',
  data () {
    return {
      collapse: false,
      cardCollapse: true,
      innerCollapse: false,
      text: `
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
      `
    }
  }
}
</script>
