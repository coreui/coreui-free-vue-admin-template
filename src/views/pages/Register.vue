<template>
  <CContainer class="min-vh-100 d-flex align-items-center">
    <CRow class="w-100 justify-content-center">
      <CCol md="6" sm="8">
        <CCard class="mx-4">
          <CCardBody class="p-4">
            <CForm>
              <h1>Register</h1>
              <p class="text-muted">Create your account</p>
              <CInput
                placeholder="Username"
                prependHtml="<i class='cui-user'></i>"
                autocomplete="username"
              />
              <CInput
                placeholder="Email"
                prepend-html="@"
                autocomplete="email"
              />
              <CInput
                placeholder="Password"
                type="password"
                prependHtml="<i class='cui-lock-locked'></i>"
                autocomplete="new-password"
              />
              <CInput
                placeholder="Repeat password"
                type="password"
                prependHtml="<i class='cui-lock-locked'></i>"
                autocomplete="new-password"
                class="mb-4"
              />
              <CButton color="success" block>Create Account</CButton>
            </CForm>
          </CCardBody>
          <CCardFooter class="p-4">
            <CRow>
              <CCol col="6">
                <CButton block color="facebook" textHtml="Facebook"/>
              </CCol>
              <CCol col="6">
                <CButton block color="twitter" textHtml="Twitter"/>
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
