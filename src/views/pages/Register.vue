<template>
  <CContainer class="c-min-vh-100 c-d-flex c-align-items-center">
    <CRow class="c-w-100 c-justify-content-center">
      <CCol md="6" sm="8">
        <CCard class="c-mx-4">
          <CCardBody class="c-p-4">
            <CForm>
              <h1>Register</h1>
              <p class="c-text-muted">Create your account</p>
              <CFormInput
                placeholder="Username"
                prependHtml="<i class='cui-user'></i>"
                autocomplete="username"
              />
              <CFormInput
                placeholder="Email"
                prepend-html="@"
                autocomplete="email"
              />
              <CFormInput
                placeholder="Password"
                type="password"
                prependHtml="<i class='cui-lock-locked'></i>"
                autocomplete="new-password"
              />
              <CFormInput
                placeholder="Repeat password"
                type="password"
                prependHtml="<i class='cui-lock-locked'></i>"
                autocomplete="new-password"
                class="c-mb-4"
              />
              <CButton variant="success" block>Create Account</CButton>
            </CForm>
          </CCardBody>
          <CCardFooter class="c-p-4">
            <CRow>
              <CCol col="6">
                <CButton block variant="facebook" textHtml="Facebook"/>
              </CCol>
              <CCol col="6">
                <CButton block variant="twitter" textHtml="Twitter"/>
              </CCol>
            </CRow>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
export default {
  name: 'Register'
}
</script>
