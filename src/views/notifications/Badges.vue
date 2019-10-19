<template functional>
  <CRow>
    <CCol col="12" md="6">
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i>
          <strong> Bootstrap Badge</strong>
          <div class="card-header-actions">
            <a 
              href="https://coreui.io/vue/docs/3.0/components/Badge" 
              class="card-header-action" 
              rel="noreferrer noopener" 
              target="_blank"
            >
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <h2>Example heading <CBadge color="primary">New</CBadge></h2>
          <h3>Example heading <CBadge color="primary">New</CBadge></h3>
          <h4>Example heading <CBadge color="primary">New</CBadge></h4>
          <h5>Example heading <CBadge color="primary">New</CBadge></h5>
          <h6>Example heading <CBadge color="primary">New</CBadge></h6>
        </CCardBody>
        <CCardFooter>
          <CButton color="primary">
            Notifications
            <CBadge color="light" class="ml-2 position-static">4</CBadge>
          </CButton>
        </CCardFooter>
      </CCard>
    </CCol>
    <CCol col="12" md="6">
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i> Badge
          <small>contextual variations</small>
        </CCardHeader>
        <CCardBody>
          <CBadge color="primary">Primary</CBadge>
          <CBadge color="secondary">Secondary</CBadge>
          <CBadge color="success">Success</CBadge>
          <CBadge color="danger">Danger</CBadge>
          <CBadge color="warning">Warning</CBadge>
          <CBadge color="info">Info</CBadge>
          <CBadge color="light">Light</CBadge>
          <CBadge color="dark">Dark</CBadge>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i> Badge
          <small>pills</small>
        </CCardHeader>
        <CCardBody>
          <CBadge pill color="primary">Primary</CBadge>
          <CBadge pill color="secondary">Secondary</CBadge>
          <CBadge pill color="success">Success</CBadge>
          <CBadge pill color="danger">Danger</CBadge>
          <CBadge pill color="warning">Warning</CBadge>
          <CBadge pill color="info">Info</CBadge>
          <CBadge pill color="light">Light</CBadge>
          <CBadge pill color="dark">Dark</CBadge>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i> Badge
          <small>actionable</small>
        </CCardHeader>
        <CCardBody>
          <CBadge href="#" color="primary">Primary</CBadge>
          <CBadge href="#" color="secondary">Secondary</CBadge>
          <CBadge href="#" color="success">Success</CBadge>
          <CBadge href="#" color="danger">Danger</CBadge>
          <CBadge href="#" color="warning">Warning</CBadge>
          <CBadge href="#" color="info">Info</CBadge>
          <CBadge href="#" color="light">Light</CBadge>
          <CBadge href="#" color="dark">Dark</CBadge>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'Badges'
}
</script>
