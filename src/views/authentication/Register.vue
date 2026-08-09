<script setup>
import { RouterLink, useRouter } from 'vue-router'

import { apple } from '@/assets/brand/apple'
import { google } from '@/assets/brand/google'
import { logo } from '@/assets/brand/logo'
import { eye } from '@/assets/icons/eye'

const router = useRouter()

const handleSubmit = (event) => {
  event.preventDefault()
  router.push('/authentication/check-email')
}
</script>

<template>
  <div class="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8" :lg="6" :xl="5">
          <div class="d-flex flex-column gap-4 text-center">
            <div>
              <CIcon :icon="logo" :height="48" />
            </div>
            <CCard class="p-4">
              <CCardBody class="d-flex flex-column gap-4">
                <h2 class="h5 text-center mb-0">Create new account</h2>
                <CForm class="row gy-3 text-start" @submit="handleSubmit">
                  <CCol :xs="12">
                    <CFormLabel for="name">Name</CFormLabel>
                    <CFormInput id="name" placeholder="Your name" autocomplete="name" />
                  </CCol>
                  <CCol :xs="12">
                    <CFormLabel for="email">Email address</CFormLabel>
                    <CFormInput
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      autocomplete="email"
                    />
                  </CCol>
                  <CCol :xs="12">
                    <CFormLabel for="password">Password</CFormLabel>
                    <CInputGroup>
                      <CFormInput
                        id="password"
                        type="password"
                        placeholder="Your password"
                        autocomplete="new-password"
                      />
                      <CInputGroupText>
                        <CTooltip content="Show password">
                          <template #toggler="{ id, on }">
                            <CButton
                              type="button"
                              color="link"
                              class="p-0 link-secondary"
                              aria-label="Show password"
                              :aria-describedby="id"
                              v-on="on"
                            >
                              <CIcon :icon="eye" size="sm" />
                            </CButton>
                          </template>
                        </CTooltip>
                      </CInputGroupText>
                    </CInputGroup>
                  </CCol>
                  <CCol :xs="12">
                    <CFormCheck id="acceptTerms" label="I accept the terms and conditions">
                      <template #label>
                        I accept the <a href="#">terms and conditions</a>
                      </template>
                    </CFormCheck>
                  </CCol>
                  <CCol :xs="12">
                    <CButton color="primary" type="submit" class="w-100">
                      Create new account
                    </CButton>
                  </CCol>
                </CForm>
                <div class="position-relative">
                  <hr />
                  <div
                    class="position-absolute top-50 start-50 translate-middle bg-body px-2 text-body-tertiary text-uppercase small"
                  >
                    or
                  </div>
                </div>
                <CRow>
                  <CCol>
                    <CButton type="button" variant="outline" class="w-100">
                      <CIcon :icon="google" class="me-1" />
                      Login with Google
                    </CButton>
                  </CCol>
                  <CCol>
                    <CButton type="button" variant="outline" class="w-100">
                      <CIcon :icon="apple" class="me-1" />
                      Login with Apple
                    </CButton>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
            <div class="text-body-secondary">
              Already have an account? <RouterLink to="/authentication/login">Sign in</RouterLink>
            </div>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>
