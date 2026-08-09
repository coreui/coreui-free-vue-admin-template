<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="6">
          <CCard class="mx-4 text-center">
            <CCardBody class="p-4">
              <h1>Your password has been changed</h1>
              <p class="text-body-secondary">
                Your password has been successfully changed. You can now log in with your new
                password.
              </p>
              <div class="d-grid">
                <RouterLink to="/authentication/login">
                  <CButton color="primary" class="w-100"> Back to Login </CButton>
                </RouterLink>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>
