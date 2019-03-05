<template functional>
  <div class="wrapper">
    <div class="animated fadeIn">
      <CRow>
        <CCol cols="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> Bootstrap Badge</strong>
              <div class="card-header-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/badge" class="card-header-action" rel="noreferrer noopener" target="_blank">
                  <small class="text-muted">docs</small>
                </a>
              </div>
            </CCardHeader>
            <CCardBody>
              <h2>Example heading <CBadge>New</CBadge></h2>
              <h3>Example heading <CBadge>New</CBadge></h3>
              <h4>Example heading <CBadge>New</CBadge></h4>
              <h5>Example heading <CBadge>New</CBadge></h5>
              <h6>Example heading <CBadge>New</CBadge></h6>
            </CCardBody>
            <CCardFooter>
              <CButton variant="primary">
                Notifications <CBadge variant="light" :style="{position: 'static'}">4</CBadge>
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol cols="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i> Badge
              <small>contextual variations</small>
            </CCardHeader>
            <CCardBody>
              <CBadge variant="primary">Primary</CBadge>
              <CBadge variant="secondary">Secondary</CBadge>
              <CBadge variant="success">Success</CBadge>
              <CBadge variant="danger">Danger</CBadge>
              <CBadge variant="warning">Warning</CBadge>
              <CBadge variant="info">Info</CBadge>
              <CBadge variant="light">Light</CBadge>
              <CBadge variant="dark">Dark</CBadge>
            </CCardBody>
          </CCard>
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i> Badge
              <small>pills</small>
            </CCardHeader>
            <CCardBody>
              <CBadge pill variant="primary">Primary</CBadge>
              <CBadge pill variant="secondary">Secondary</CBadge>
              <CBadge pill variant="success">Success</CBadge>
              <CBadge pill variant="danger">Danger</CBadge>
              <CBadge pill variant="warning">Warning</CBadge>
              <CBadge pill variant="info">Info</CBadge>
              <CBadge pill variant="light">Light</CBadge>
              <CBadge pill variant="dark">Dark</CBadge>
            </CCardBody>
          </CCard>
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i> Badge
              <small>actionable</small>
            </CCardHeader>
            <CCardBody>
              <CBadge href="#" variant="primary">Primary</CBadge>
              <CBadge href="#" variant="secondary">Secondary</CBadge>
              <CBadge href="#" variant="success">Success</CBadge>
              <CBadge href="#" variant="danger">Danger</CBadge>
              <CBadge href="#" variant="warning">Warning</CBadge>
              <CBadge href="#" variant="info">Info</CBadge>
              <CBadge href="#" variant="light">Light</CBadge>
              <CBadge href="#" variant="dark">Dark</CBadge>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  </div>
</template>

<script>
export default {
  name: 'badges'
}
</script>
