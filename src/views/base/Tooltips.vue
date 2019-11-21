<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-justify-center"/>
        <strong> Bootstrap Tooltips </strong>
        <small><code>v-c-tooltip</code> directive</small>
        <div class="card-header-actions">
          <a 
            href="https://coreui.io/vue/docs/directives/tooltip" 
            class="card-header-action" 
            rel="noreferrer noopener" 
            target="_blank"
          >
            <small class="text-muted">docs</small>
          </a>
        </div>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol col="6">
            <div class="text-center my-3">
              <CButton 
                color="secondary"
                v-c-tooltip.hover.click="'I am a tooltip!'"
              >
                Hover Me
              </CButton>
            </div>
          </CCol>
          <CCol col="6">
            <div class="text-center my-3">
              <CButton 
                v-c-tooltip="{content: 'I start open!', active:true }"
                color="secondary"
              >
                Hover me
              </CButton>
            </div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-justify-center"/>
        <strong> Tooltips </strong>
        <small>placement</small>
      </CCardHeader>
      <CCardBody>
        <div class="my-3">
          <CRow>
            <CCol
              md="4"
              class="py-4 text-center"
              v-for="placement in placements"
              :key="placement"
            >
              <CButton
                color="primary"
                v-c-tooltip.hover="{
                  content: `Placement ${placement}`,
                  placement
                }"
              >
                {{ placement }}
              </CButton>
            </CCol>
          </CRow>
        </div>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
export default {
  name: 'Tooltips',
  data () {
    return {
      placements: [
        'top-start', 'top', 'top-end',
        'bottom-start', 'bottom', 'bottom-end',
        'right-start', 'right', 'right-end',
        'left-start', 'left', 'left-end'
      ]
    }
  }
}
</script>
