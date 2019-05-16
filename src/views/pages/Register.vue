<template>
  <div class="c-app c-flex-row c-align-items-center">
    <CContainer>
      <CRow class="c-justify-content-center">
        <CCol md="6" sm="8">
          <CCard class="c-mx-4">
            <CCardBody class="c-p-4">
              <CForm>
                <h1>Register</h1>
                <p class="c-text-muted">Create your account</p>
                <CFormInput
                  placeholder="Username"
                  prepend="<i class='icon-user'></i>"
                  autocomplete="username"
                />
                <CFormInput
                  placeholder="Email"
                  prepend="@"
                  autocomplete="email"
                />
                <CFormInput
                  placeholder="Password"
                  type="password"
                  prepend="<i class='icon-lock'></i>"
                  autocomplete="new-password"
                />
                <CFormInput
                  placeholder="Repeat password"
                  type="password"
                  prepend="<i class='icon-lock'></i>"
                  autocomplete="new-password"
                  class="c-mb-4"
                />
                <CButton variant="success" block>Create Account</CButton>
              </CForm>
            </CCardBody>
            <CCardFooter class="c-p-4">
              <CRow>
                <CCol col="6">
                  <CButton block class="btn btn-facebook">
                    <span>facebook</span>
                  </CButton>
                </CCol>
                <CCol col="6">
                  <CButton block class="btn btn-twitter" type="button">
                    <span>twitter</span>
                  </CButton>
                </CCol>
              </CRow>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>
