<template>
  <div class="c-wrapper">
    <div>
      <CRow>
        <CCol col="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> Bootstrap Collapse </strong>
              <div class="c-card-header-actions">
                <a 
                  href="https://coreui.io/vue/docs/3.0/components/Collapse" 
                  class="card-header-action" 
                  rel="noreferrer noopener" 
                  target="_blank"
                >
                  <small class="text-muted">docs</small>
                </a>
              </div>
            </CCardHeader>
            <CCardBody>
              <CButton id="collapse1" variant="primary">
                Toggle Collapse
              </CButton>
              <CCollapse toggler="collapse1" class="c-mt-2">
                <CCard body-wrapper>
                  <p class="c-card-text">Collapse contents Here</p>
                  <CButton id="collapse2" size="sm" variant="secondary">
                    Toggle Inner Collapse
                  </CButton>
                  <CCollapse toggler="collapse2" class="c-mt-2">
                    <CCard body-wrapper>Hello!</CCard>
                  </CCollapse>
                </CCard>
              </CCollapse>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  </div>
</template>

<script>
export default {
  name: 'collapses',
  data () {
    return {
      showCollapse: true,
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
