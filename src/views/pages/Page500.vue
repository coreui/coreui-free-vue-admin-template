<template>
  <CContainer class="d-flex align-items-center min-vh-100">
    <CRow class="w-100 justify-content-center">
      <CCol md="6">
        <div class="clearfix">
          <h1 class="float-left display-3 mr-4">500</h1>
          <h4 class="pt-3">Houston, we have a problem!</h4>
          <p class="text-muted">The page you are looking for is temporarily unavailable.</p>
        </div>
        <CFormInput
          class="mb-0"
          prependHtml="<i class='cui-magnifying-glass'></i>"
          placeholder="What are you looking for?"
        >
          <template #append>
            <CButton color="info">Search</CButton>
          </template>
        </CFormInput>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
export default {
  name: 'Page500'
}
</script>
