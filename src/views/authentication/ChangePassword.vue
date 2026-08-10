<template>
  <div class="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="6">
          <CCard class="mx-4">
            <CCardBody class="p-4">
              <CForm>
                <h1>Reset password</h1>
                <p class="text-body-secondary">Enter your new password and confirm it.</p>
                <div class="mb-3">
                  <CFormLabel for="new-password">New password</CFormLabel>
                  <CFormInput
                    id="new-password"
                    type="password"
                    placeholder="Enter new password"
                    autocomplete="new-password"
                  />
                </div>
                <div class="mb-4">
                  <CFormLabel for="confirm-password">Confirm new password</CFormLabel>
                  <CFormInput
                    id="confirm-password"
                    type="password"
                    placeholder="Re-enter new password"
                    autocomplete="new-password"
                  />
                </div>
                <div class="d-grid">
                  <CButton color="primary" type="submit"> Set new password </CButton>
                </div>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>
