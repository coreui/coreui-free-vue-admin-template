<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <CFormInput
                    prepend="<i class='icon-user'></i>"
                    placeholder="Username"
                    autocomplete="username email"
                  />
                  <CFormInput
                    prepend="<i class='icon-lock'></i>"
                    placeholder="Password"
                    type="password"
                    autocomplete="curent-password"
                  />
                  <CRow>
                    <CCol cols="6">
                      <CButton variant="primary" class="px-4">Login</CButton>
                    </CCol>
                    <CCol cols="6" class="text-right">
                      <CButton variant="link" class="px-0">Forgot password?</CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard
              class="text-white text-center bg-primary py-5 d-md-down-none"
              style="width:44%"
              bodyWrapper
            >
              <h2>Sign up</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <CButton
                variant="primary"
                class="active mt-3"
              >
                Register Now!
              </CButton>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>
