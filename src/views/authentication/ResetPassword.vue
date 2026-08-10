<template>
  <div class="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="6">
          <CCard class="mx-4">
            <CCardBody class="p-4">
              <CForm>
                <h1>Reset password</h1>
                <p class="text-body-secondary">
                  Enter your email address and we will send you instructions on how to reset your
                  password.
                </p>
                <div class="mb-4">
                  <CFormLabel for="email">Email address</CFormLabel>
                  <CFormInput
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    autocomplete="email"
                  />
                </div>
                <div class="d-grid">
                  <CButton color="primary" type="submit"> Send reset instructions </CButton>
                </div>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>
