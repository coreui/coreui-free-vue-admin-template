<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> Bootstrap Jumbotron </strong>
              <!-- <div class="card-header-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/jumbotron" class="card-header-action" rel="noreferrer noopener" target="_blank">
                  <small class="text-muted">docs</small>
                </a>
              </div> -->
            </CCardHeader>
            <CCardBody>
              <CJumbotron header="Bootstrap 4" lead="Bootstrap 4 Components for Vue.js 2">
                <p>For more information visit website</p>
                <CButton variant="primary" href="#">More Info</CButton>
              </CJumbotron>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i> <strong> Jumbotron </strong>
              <small>with slots</small>
            </CCardHeader>
            <CCardBody>
              <CJumbotron header="Bootstrap 4" lead="">
                <p slot="lead" class="lead">
                  This is a simple hero unit, a simple jumbotron-style component for
                  calling extra attention to featured content or information.
                </p>
                <hr class="my-4">
                <p>
                  It uses utility classes for typography and spacing to space content
                  out within the larger container.
                </p>
                <CButton variant="primary" href="#">Do Something</CButton>
                <CButton variant="success" href="#">Do Something Else</CButton>
              </CJumbotron>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i> <strong> Jumbotron </strong>
              <small>variants</small>
            </CCardHeader>
            <CCardBody>
              <CJumbotron variant="info"
                           textVariant="white"
                           borderVariant="dark"
                           header="Bootstrap 4">

                <p slot="lead" class="lead">
                  This is a simple hero unit, a simple jumbotron-style component for
                  calling extra attention to featured content or information.
                </p>
                <hr class="my-4">
                <p>
                  It uses utility classes for typography and spacing to space content
                  out within the larger container.
                </p>
              </CJumbotron>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jumbotrons'
}
</script>
