<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i>
          <strong> Bootstrap Popovers</strong>
          <!-- <div class="card-header-actions">
            <a href="https://bootstrap-vue.js.org/docs/components/popovers" class="card-header-action" rel="noreferrer noopener" target="_blank">
              <small class="text-muted">docs</small>
            </a>
          </div> -->
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol cols="4">
              <div class="my-3 text-center">
                <CButton
                  variant="primary"
                  v-c-popover="{
                    header: 'Popover header',
                    content: 'I am popover content!'
                  }"
                >
                  Hover Me
                </CButton>
              </div>
            </CCol>
            <CCol cols="4">
              <div class="my-3 text-center">
                <CButton
                  variant="primary"
                  v-c-popover="{
                    header: 'Popover!',
                    content: 'I start <strong>open</strong>',
                    active: true
                  }"
                  text="Hover me"
                />
              </div>
            </CCol>
            <CCol cols="4">
              <div class="my-3 text-center">
                <CButton
                  variant="primary"
                  v-c-popover.click="{
                    header: 'Popover!',
                    content: 'I am showing on click and hiding on click outside tooltip!',
                    placement: 'bottom'
                  }"
                >
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
          <strong> Popovers </strong>
          <small>placement</small>
        </CCardHeader>
        <CCardBody class="my-3">
          <CRow>
            <CCol
              md="4"
              class="py-4 text-center"
              v-for="placement in placements"
              :key="placement"
            >
              <CButton
                variant="primary"
                v-c-popover="{
                  header: 'Popover!',
                  content: `Placement ${placement}`,
                  placement
                }"
              >
                {{ placement }}
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popovers',
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
