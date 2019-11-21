<template>
  <div>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/>
            <strong> Bootstrap Jumbotron </strong>
            <div class="card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/components/jumbotron" 
                class="card-header-action" 
                rel="noreferrer noopener" 
                target="_blank"
              >
                <small class="text-muted">docs</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            <CJumbotron>
              <h1 class="display-3">Bootstrap 4</h1>
              <p class="lead">Bootstrap 4 Components for Vue.js 2.6+</p>
              <p>For more information visit website</p>
              <CButton color="primary" href="#">More Info</CButton>
            </CJumbotron>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol>
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/> <strong> Jumbotron </strong>
            <small>with slots</small>
          </CCardHeader>
          <CCardBody>
            <CJumbotron header="Bootstrap 4" lead="">
              <h1 class="display-3">Bootstrap 4</h1>
              <p class="lead">
                This is a simple hero unit, a simple jumbotron-style component for
                calling extra attention to featured content or information.
              </p>
              <hr class="my-4">
              <p>
                It uses utility classes for typography and spacing to space content
                out within the larger container.
              </p>
              <CButton color="primary" href="#">Do Something</CButton>
              <CButton color="success" href="#">Do Something Else</CButton>
            </CJumbotron>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/> <strong> Jumbotron </strong>
            <small>colors</small>
          </CCardHeader>
          <CCardBody>
            <CJumbotron
              color="info"
              text-color="white"
              border-color="dark"
            >
              <h1 class="display-3">Bootstrap 4</h1>
              <p class="lead">
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
</template>

<script>
export default {
  name: 'Jumbotrons'
}
</script>
