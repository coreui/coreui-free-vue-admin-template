<template>
  <CContainer class="c-d-flex c-align-items-center c-min-vh-100">
    <CRow class="c-justify-content-center">
      <CCol md="8">
        <CCardGroup>
          <CCard class="c-p-4">
            <CCardBody>
              <CForm>
                <h1>Login</h1>
                <p class="c-text-muted">Sign In to your account</p>
                <CFormInput
                  prependHtml="<i class='cui-user'></i>"
                  placeholder="Username"
                  autocomplete="username email"
                />
                <CFormInput
                  prependHtml="<i class='cui-lock-locked'></i>"
                  placeholder="Password"
                  type="password"
                  autocomplete="curent-password"
                />
                <CRow>
                  <CCol col="6">
                    <CButton variant="primary" class="c-px-4">Login</CButton>
                  </CCol>
                  <CCol col="6" class="c-text-right">
                    <CButton variant="link" class="c-px-0">Forgot password?</CButton>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
          <CCard
            class="c-text-white c-text-center c-bg-primary c-py-5 c-d-md-down-none"
            style="width:44%"
            body-wrapper
          >
            <h2>Sign up</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <CButton
              variant="primary"
              class="c-active c-mt-3"
            >
              Register Now!
            </CButton>
          </CCard>
        </CCardGroup>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
export default {
  name: 'Login'
}
</script>
