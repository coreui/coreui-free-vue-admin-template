<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <CRow class="justify-content-center">
        <CCol md="6">
          <div class="clearfix">
            <h1 class="float-left display-3 mr-4">500</h1>
            <h4 class="pt-3">Houston, we have a problem!</h4>
            <p class="text-muted">The page you are looking for is temporarily unavailable.</p>
          </div>
          <CFormInput
            class="mb-0"
            prepend="<i class='fa fa-search'></i>"
            placeholder="What are you looking for?"
          >
            <template #append>
              <CButton variant="info">Search</CButton>
            </template>
          </CFormInput>
        </CCol>
      </CRow>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page500'
}
</script>
