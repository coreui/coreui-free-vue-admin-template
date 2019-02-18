<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <CRow class="justify-content-center">
        <CCol md="6">
          <div class="clearfix">
            <h1 class="float-left display-3 mr-4">404</h1>
            <h4 class="pt-3">Oops! You're lost.</h4>
            <p class="text-muted">The page you are looking for was not found.</p>
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
  name: 'Page404'
}
</script>
