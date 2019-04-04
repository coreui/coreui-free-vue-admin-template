<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i>
          <strong> Bootstrap Tooltips </strong>
          <small><code>v-c-tooltip</code> directive</small>
          <!-- <div class="card-header-actions">
            <a href="https://bootstrap-vue.js.org/docs/components/tooltip" class="card-header-action" rel="noreferrer noopener" target="_blank">
              <small class="text-muted">docs</small>
            </a>
          </div> -->
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol col="4">
              <div class="text-center my-3">
                <CButton v-c-tooltip.hover.click="'I am a tooltip!'">
                  Hover Me
                </CButton>
              </div>
            </CCol>
            <CCol col="4">
              <div class="text-center my-3">
                <CButton v-c-tooltip="{content: 'I start open!', active:true }">
                  Hover me
                </CButton>
              </div>
            </CCol>
            <CCol col="4">
              <div class="text-center my-3">
                <CButton v-c-tooltip.click="
                  'I am showing on click and hiding on click outside tooltip!'
                ">
                  Click me
                </CButton>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i>
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
                  variant="primary"
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
  </div>
</template>

<script>
export default {
  name: 'tooltips',
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
