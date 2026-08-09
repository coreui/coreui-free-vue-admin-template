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
              <h1>Check your email</h1>
              <p class="text-body-secondary">
                Please click the link sent to <span class="fw-semibold">your@email.com</span> to
                verify your account. Thank you!
              </p>
              <div class="d-grid">
                <RouterLink to="/">
                  <CButton color="primary" class="w-100"> Back to Home </CButton>
                </RouterLink>
              </div>
              <p class="text-body-secondary mt-3 mb-0">
                Didn&rsquo;t receive an email?
                <RouterLink to="/authentication/login">Resend</RouterLink>
              </p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>
