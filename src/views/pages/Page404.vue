<template>
  <div class="app c-flex-row c-align-items-center">
    <CContainer>
      <CRow class="c-justify-content-center">
        <CCol md="6">
          <div class="c-clearfix">
            <h1 class="c-float-left c-display-3 c-mr-4">404</h1>
            <h4 class="c-pt-3">Oops! You're lost.</h4>
            <p class="c-text-muted">The page you are looking for was not found.</p>
          </div>
          <CFormInput
            class="c-mb-0"
            prependHtml="<i class='cui-magnifying-glass'></i>"
            placeholder="What are you looking for?"
          >
            <template #append>
              <CButton variant="info">Search</CButton>
            </template>
          </CFormInput>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Page404'
}
</script>
